import dict from "../data/dict_MostFrequent.json"

export async function getAllIds() {
    // Sort according to frequency
    const ids = dict.map((word) => {
        return {
            params: {
                id: String(word.Id),
            },
        };
    });
    return ids;
}
