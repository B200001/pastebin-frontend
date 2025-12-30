import { useEffect, useState } from "react";
import {
  cleanupExpiredPastes,
  getPastes,
  removePaste
} from "../utils/pasteStorage";

function formatTime(ms) {
  if (ms <= 0) return "Expired";
  const sec = Math.floor(ms / 1000);
  return `${sec}s`;
}

export default function PasteList() {
  const [pastes, setPastes] = useState([]);

  useEffect(() => {
    const update = () => {
      const cleaned = cleanupExpiredPastes();
      setPastes(cleaned);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="viewPaste">
      <div className="pasteCard">
        <h1>Your Pastes</h1>

        {pastes.length === 0 && <p>No active pastes</p>}

        {pastes.map(p => {
          const remaining =
            p.expiresAt ? p.expiresAt - Date.now() : null;

          return (
            <div key={p.id} style={{ marginBottom: "1.2rem" }}>
              <a href={p.url} target="_blank">{p.url}</a>

              <div>
                TTL:{" "}
                {p.expiresAt ? formatTime(remaining) : "∞"}
              </div>

              <button
                style={{ marginTop: "0.5rem" }}
                onClick={() => {
                  removePaste(p.id);
                  setPastes(getPastes());
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
