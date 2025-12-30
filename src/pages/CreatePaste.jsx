import { useState } from "react";
import { createPaste } from "../api";
import { savePaste } from "../utils/pasteStorage";

export default function CreatePaste() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setResult("");

    try {
      const payload = { content };
      if (ttl) payload.ttl_seconds = Number(ttl);
      if (maxViews) payload.max_views = Number(maxViews);

      const res = await createPaste(payload);

      if (res.error) {
        setError(res.error);
        return;
      }

      const url = `http://localhost:5173/p/${res.id}`;
      setResult(url);

      const createdAt = Date.now();
      const expiresAt = ttl ? createdAt + Number(ttl) * 1000 : null;

      savePaste({
        id: res.id,
        url,
        createdAt,
        ttl: ttl ? Number(ttl) : null,
        expiresAt,
        maxViews: maxViews ? Number(maxViews) : null
      });

    } catch {
      setError("Failed to create paste");
    }
  }

  return (
    <div className="createPaste">
      <div className="card">
        <h1>Create Paste</h1>

        <form className="main_form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your paste here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="TTL (seconds, optional)"
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
            min="1"
          />

          <input
            type="number"
            placeholder="Max Views (optional)"
            value={maxViews}
            onChange={(e) => setMaxViews(e.target.value)}
            min="1"
          />

          <button type="submit">Create Paste</button>
        </form>

        {result && (
          <p className="success">
            Share URL: <a href={result}>{result}</a>
          </p>
        )}

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
