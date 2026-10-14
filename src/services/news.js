const API_BASE_URL = "http://localhost:3000/api/v1";


export async function getPublicNews() {
  const response = await fetch(`${API_BASE_URL}/public/news`);

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok || !data?.success) {
    throw new Error(
      data?.message || "Não foi possível carregar as notícias."
    );
  }

  return Array.isArray(data.data) ? data.data : [];
}

export async function getPublicNewsById(id) {
  const response = await fetch(
    `${API_BASE_URL}/public/news/${encodeURIComponent(id)}`
  );

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok || !data?.success) {
    throw new Error(
      data?.message || "Não foi possível carregar a notícia."
    );
  }

  return data.data;
}
