import batchOne from "../data/dict_FULL_batch_1.json";
import batchSecond from "../data/dict_FULL_batch_2.json";

const data = batchOne.concat(batchSecond);
const sortedIds = data.sort((a, b) => a.Id - b.Id);
console.log(sortedIds)

export async function getAllIds() {
    // Sort according to frequency
    const frequent = data
        .sort((a, b) => {
            return a.Frequency - b.Frequency;
        })
        .slice(0, 5000);

    // Filter for Inflections
    const filtered = frequent.filter((word) => {
        if (word.Inflections === "") {
            return true;
        } else {
            return false;
        }
    });

    // Return array of ids
    const ids = filtered.map((word) => {
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
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log(arr[mid].Id);

        if (arr[mid].Id < x) {
            low = mid + 1;
        } else if (arr[mid].Id > x) {
            high = mid - 1;
        } else return arr[mid];
    }
    return "";
};

// Return requested element
export function getData(id) {
    let word = binarySearch(sortedIds, Number(id));
    return word;
}
