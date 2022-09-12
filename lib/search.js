import { env } from "../next.config.js";

export async function fetchSearchData(keyword, matchType) {
    // Fetch data from external database
    const headers = {
        apikey: env.key,
        Authorization: env.auth,
        "Content-Type": "application/json",
    };

    const data = JSON.stringify({ term: keyword });

    return fetch(
        `https://wedfhdkwmzdpwjclumxq.supabase.co/rest/v1/rpc/search_${matchType}`,
        { method: "POST", headers: headers, body: data }
    ).then((res) => {
        return res.json();
    });
}