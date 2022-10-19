import { APKG_SCHEMA } from "./schema.js";
import createHTML from "./createSensesHTML";
import hash from "./anki_hash.js";
import JSZip from "jszip";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const addCards = async (db, deckId, noteId) => {
    try {
        const insert = db.prepare(`INSERT INTO 
        cards (id, nid, did, ord, mod, usn, type, queue, due, ivl, factor, reps, lapses, left, odue, odid, flags, data) 
        VALUES (null, ?, ?, ?, 0, 0, 0, 0, ?, 0, 0, 0, 0, 0, 0, 0, 0, '')`);

        insert.run([
            noteId,     // nid
            deckId,     // did
            0,          // ord
            noteId,     // que
        ]);

        insert.run([
            noteId,     // nid
            deckId,     // dids
            1,          // ord
            noteId,     // que
        ]);
    } catch (err) {
        console.log(err);
    }
};

const addNote = async (db, modelId, word, noteId) => {
    try {
        const flds = [
            `<a href=https://krdict.korean.go.kr/m/eng/searchResultView?ParaWordNo=${
                word.Id
            }&nationCode=6&nation=eng&viewType=A>${word.Hangul}<sup>${
                word.HomonymNumber > 0 ? word.HomonymNumber : ""
            }</sup></a>`,
            word.Id,
            word.Pronounciation,
            word.Audio,
            word.Hanja,
            word.TypeEng,
            word.TypeKr,
            await createHTML(word.Senses),
        ];

        const guid = await hash(flds);

        db.exec(
            "INSERT INTO notes VALUES (?, ?, ?, 0, -1, ' KLED ', ?, ?, 0, 0, 'none');",
            [
                noteId, // id   integer primary key
                guid, // guid text not null
                modelId, // mid  integer not null
                flds.join("\x1f"), // flds text not null
                0, // sfld integer not null,
            ]
        );
    } catch (err) {
        console.log(err);
    }
};

const createTables = (db, objects) => {
    db.exec(APKG_SCHEMA);
    db.exec("INSERT INTO col VALUES (1, ?, ?, ?, 11, 0, 0, 0, ?, ?, ?, ?, ?)", [
        Math.floor(Date.now() / 1000), // crt   integer not null
        Math.floor(Date.now() / 1000), // mod   integer not null
        Math.floor(Date.now() / 1000), // scm   integer not null
        JSON.stringify(objects.conf), // conf  text not null
        JSON.stringify(objects.model), // model text not null
        JSON.stringify(objects.decks), // deck  text not null
        JSON.stringify(objects.dconf), // dconf text not null
        JSON.stringify({}),
    ]);
};

const addToDb = async (db, id) => {
    try {
        const keys = Object.keys(sessionStorage);
        const full = keys.map((key) => sessionStorage[key]);
        const filtered = full.filter((element) =>
            JSON.parse(element).hasOwnProperty("item")
        );
        const data = filtered.map((element) => JSON.parse(element));

        for (let i = 0; i < data.length; i++) {
            // Sleep to avoid identical Ids on cards
            await sleep(5);
            let noteId = Date.now();
            await addNote(db, id, data[i].item, noteId);
            await addCards(db, id, noteId);
        }
    } catch (err) {
        console.log(err);
    }
};

const download = (file) => {
    const blob = new Blob([file]);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = window.URL.createObjectURL(blob);
    const date = new Date();
    a.download = date.toString() + ".apkg"
    a.onclick = function () {
        setTimeout(function () {
            window.URL.revokeObjectURL(a.href);
        }, 1500);
    };
    a.click();
};

const zipDb = async (db) => {
    try {
        const data = db.export();
        const buffer = new Uint8Array(data).buffer;

        const zip = new JSZip();
        zip.file("collection.anki2", buffer);
        zip.file("media", "{}");
        zip.generateAsync({
            type: "uint8array",
        }).then((zip) => download(zip));
    } catch (err) {
        console.log(err);
    }
};

const closeDb = async (db) => {
    db.close();
};

export { addCards, addNote, createTables, addToDb, zipDb, closeDb };
