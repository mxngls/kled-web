import dict from "../data/dict_Mini.json";
import Fuse from "fuse.js";

function search(keyword, matchType) {
    let mode;
    switch (matchType) {
        case "exact":
            mode = "=";
            break;
        case "include":
            mode = "'";
            break;
        case "fuzzy":
            mode = "";
            break;
        default:
            mode = "=";
            break;
    }

    const options = {
        keys: ["Hangul", "Hanja", "Senses.Translation"],
        location: 0,
        distance: 20,
        threshold: 0.1,
        isCaseSensitive: false,
        findAllMatches: true,
        includeMatches: true,
        includeScore: true,
        useExtendedSearch: true,
    };

    const fuse = new Fuse(dict, options);
    const results = fuse.search(mode + `"${keyword}"`);
    return results;
}

export async function getData(keyword, matchType) {
    const data = search(keyword, matchType);
    return data;
}
