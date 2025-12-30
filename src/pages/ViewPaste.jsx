import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPaste } from "../api";


export default function ViewPaste() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPaste(id)
      .then((data) => {
        setContent(data.content);
      })
      .catch(() => {
        setError("Paste not found or expired");
      });
  }, [id]);

  if (error) {
    return (
      <div className="viewPaste errorPage">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="viewPaste">
      <div className="pasteCard">
        <h1>Paste</h1>
        <pre>{content}</pre>
      </div>
    </div>
  );
}
