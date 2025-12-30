// const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL = "http://localhost:3000"


export async function createPaste(data) {
  const res = await fetch(`${BASE_URL}/api/pastes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function fetchPaste(id) {
  const res = await fetch(`${BASE_URL}/api/pastes/${id}`);
  if (!res.ok) {
    throw new Error("Paste not found");
  }
  return res.json();
}
