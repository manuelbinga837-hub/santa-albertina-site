const API_BASE_URL = "https://sistema-escolar-santa-albertina-1.onrender.com/api/v1";

export async function getPublicEvents() {
const response = await fetch("${API_BASE_URL}/public/events");

let result = null;

try {
result = await response.json();
} catch {
result = null;
}

if (!response.ok || !result?.success) {
throw new Error(
result?.message || "Não foi possível carregar os eventos."
);
}

return Array.isArray(result.data) ? result.data : [];
}

export async function getPublicEventById(id) {
const response = await fetch(
"${API_BASE_URL}/public/events/${encodeURIComponent(id)}"
);

let result = null;

try {
result = await response.json();
} catch {
result = null;
}

if (!response.ok || !result?.success) {
throw new Error(
result?.message || "Não foi possível carregar o evento."
);
}

return result.data;
}