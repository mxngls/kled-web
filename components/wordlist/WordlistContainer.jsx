import { useEffect, useState, useRef } from "react";

import initSqlJs from "sql.js";
import { createTables } from "../../lib/anki/helper";
import { addToDb, zipDb, closeDb } from "../../lib/anki/helper";

import configJSON from "../../objects/config.json";
import decksJSON from "../../objects/decks.json";
import deckConfigJSON from "../../objects/deckConfig.json";
import modelJSON from "../../objects/model.json";

import WordlistHeader from "./WordlistHeader.jsx";
import WordlistBody from "./WordlistBody.jsx";

export default function WordlistContainer() {
    const [data, setData] = useState([]);
    const initialRender = useRef(false);
    const [db, setDb] = useState(null);
    const [objects] = useState({
        conf: configJSON,
        model: modelJSON,
        decks: decksJSON,
        dconf: deckConfigJSON,
        id: 66458880,
    });

    useEffect(() => {
        if (db === null) {
            /*
                sql.js needs to fetch its wasm file, so we cannot immediately 
                instantiate the database without any configuration, initSqlJs 
                will fetch the wasm files directly from the same path as the js
            */
            initSqlJs({
                locateFile: (file) =>
                    `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.7.0/${file}`,
            }).then((SQL) => setDb(new SQL.Database()));
            initialRender.current = true;
        }
    }, [db]);

    useEffect(() => {
        if (db !== null) {
            try {
                createTables(db, objects);
            } catch (err) {
                console.log(err);
            }
        }
    }, [db, objects]);

    useEffect(() => {
        const keys = Object.keys(sessionStorage);
        const full = keys.map((key) => sessionStorage[key]);
        const filtered = full.filter((element) =>
            JSON.parse(element).hasOwnProperty("item")
        );

        setData(filtered.map((element) => JSON.parse(element)));
    }, [setData]);

    const handleOnClick = async () => {
        if (Object.keys(sessionStorage).length > 0) {
            addToDb(db, objects.id)
                .then(() => zipDb(db))
                .then(() => closeDb(db))
                .then(() => setDb(null));
        } else {
            window.alert("No words added yet.");
        }
    };

    return (
        <div className="wordlist-container">
            <WordlistHeader
                wordNum={data.length}
                handleOnClick={handleOnClick}
            />
            <WordlistBody data={data} setData={setData} />
        </div>
    );
}
