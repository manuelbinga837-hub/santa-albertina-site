const API_BASE_URL = "http://localhost:3000/api/v1";

export async function getPublicAlbums() {
  const response = await fetch(`${API_BASE_URL}/public/albums`);

  let result = null;

  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok || !result?.success) {
    throw new Error(
      result?.message || "Não foi possível carregar os álbuns."
    );
  }

  return Array.isArray(result.data) ? result.data : [];
}

export async function getPublicAlbumById(id) {
  const response = await fetch(
    `${API_BASE_URL}/public/albums/${encodeURIComponent(id)}`
  );

  let result = null;

  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok || !result?.success) {
    throw new Error(
      result?.message || "Não foi possível carregar o álbum."
    );
  }

  return result.data;
}

export async function getPublicAlbumPhotos(id) {
  const response = await fetch(
    `${API_BASE_URL}/public/albums/${encodeURIComponent(id)}/photos`
  );

  let result = null;

  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok || !result?.success) {
    throw new Error(
      result?.message || "Não foi possível carregar as fotografias."
    );
  }

  return Array.isArray(result.data) ? result.data : [];
}
