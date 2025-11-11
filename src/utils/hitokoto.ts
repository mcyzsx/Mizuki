// src/utils/hitokoto.ts
const HITOKOTO_API = "https://60s.viki.moe/v2/hitokoto";

export interface HitokotoResponse {
	code: number;
	message: string;
	data: {
		index: number;
		hitokoto: string;
	};
}

export async function fetchHitokoto(): Promise<HitokotoResponse["data"]> {
	const res = await fetch(HITOKOTO_API);
	if (!res.ok) throw new Error("Network error");
	const json: HitokotoResponse = await res.json();
	if (json.code !== 200) throw new Error(json.message);
	return json.data;
}