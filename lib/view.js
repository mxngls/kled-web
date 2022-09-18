import dict from "../data/dict_MostFrequent.json";
import { env } from "../next.config";

export async function getMostFrequent() {
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

export async function fetchViewData(id) {
    // Fetch data from external database
    const headers = {
        apikey: env.key,
        Authorization: env.auth,
        "Content-Type": "application/json",
    };

    const data = JSON.stringify({ view_id: id });

    const res = fetch(
        "https://wedfhdkwmzdpwjclumxq.supabase.co/rest/v1/rpc/view",
        {
            method: "POST",
            headers: headers,
            body: data,
        }
    );

    return res
}
