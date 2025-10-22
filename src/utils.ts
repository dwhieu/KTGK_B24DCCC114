export const uid = () => Math.random().toString(36).slice(2, 10);
export const todayISO = () => new Date().toISOString();
export const formatDate = (iso: string) => new Date(iso).toLocaleDateString();
export const excerpt = (text: string, n = 100) => (text.length > n ? text.slice(0, n).trim() + "…" : text);
