import batchOne from "../data/dict_FULL_batch_1.json";
import batchSecond from "../data/dict_FULL_batch_2.json";

const data = batchOne.concat(batchSecond);

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

const binarySearch = (arr, x) => {
    let low = 0;
    let high = data.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < x) {
            low = mid + 1;
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else return arr[mid];
    }
    return "";
};

export function getData(id) {
    let wordData = "";
    wordData = binarySearch(data, Number(id), 0, data.length - 1);
    return wordData;
}
