// 最简白名单，防 XSS 即可
const defaultAllow = {
	a: ["href", "title", "target", "rel"],
	code: ["class"],
	pre: ["class"],
	br: [],
	em: [],
	strong: [],
	p: [],
	blockquote: [],
	ul: [],
	ol: [],
	li: [],
};

export function sanitizeHtml(html: string, allow = defaultAllow): string {
	return html
		.replace(/<(\w+)\s*([^>]*)>/g, (_, tag, attr) => {
			if (!(tag in allow)) return "";
			const ok = (allow as any)[tag];
			const clean = attr
				.split(/\s+/)
				.map((a: string) => {
					const [k, v] = a.split("=");
					return ok.includes(k) ? `${k}="${v?.replace(/["']/g, "")}"` : "";
				})
				.filter(Boolean)
				.join(" ");
			return `<${tag}${clean ? " " + clean : ""}>`;
		})
		.replace(/<\/(\w+)>/g, (_, tag) => (tag in allow ? `</${tag}>` : ""));
}