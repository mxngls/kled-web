import batchOne from "../data/dict_FULL_batch_1.json";
import batchSecond from "../data/dict_FULL_batch_2.json";

const data = batchOne.concat(batchSecond);

export async function getAllIds() {
    // Sort according to frequency
    const frequent = data
        .sort((a, b) => {
            return a.Frequency - b.Frequency;
        })
        .slice(0, 10000);

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
