const API_BASE_URL = "https://sistema-escolar-santa-albertina-1.onrender.com/api/v1";

export async function getPublicVideos() {
const response = await fetch("${API_BASE_URL}/public/videos");

if (!response.ok) {
throw new Error("Erro ao carregar vídeos: HTTP ${response.status}");
}

const result = await response.json();

if (!result.success || !Array.isArray(result.data)) {
throw new Error("A resposta da API de vídeos é inválida.");
}

return result.data;
}

export async function getPublicVideoById(id) {
const response = await fetch(
"${API_BASE_URL}/public/videos/${encodeURIComponent(id)}"
);

if (!response.ok) {
throw new Error("Erro ao carregar vídeo: HTTP ${response.status}");
}

const result = await response.json();

if (!result.success || !result.data) {
throw new Error("O vídeo não foi encontrado.");
}

return result.data;
}