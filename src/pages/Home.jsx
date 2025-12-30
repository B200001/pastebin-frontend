import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="content">
        <h1 className="title">Pastebin Lite</h1>
        <p className="subtitle">
          Create and share text instantly.  
          Simple. Fast. Secure.
        </p>

        <button className="create-btn" onClick={() => navigate("/create")}>
          + Create Paste
        </button>
      </div>
    </div>
  );
}
