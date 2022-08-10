import data from "../data/dict_Full.json";

export async function getAllIds() {
    const arr = data.filter((word) => {
        if (word.Inflections === "") {
            return true;
        } else {
            return false;
        }
    });
    const ids = arr.map((word) => {
        return {
            params: {
                id: String(word.Id),
            },
        };
    });
    return ids;
}

export function getData(id) {
    let wordData = "";
    for (let i = 0; i < data.length; i++) {
        if (String(data[i].Id) == id) {
            wordData = data[i];
            break;
        }
    }
    return wordData;
}
