import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./App.css";

function App() {
  const [review, setReview] = useState(``);
  const [code, setCode] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  });

  const reviewCode = async () => {
    setLoading(true);   // start spinner
    try {
      const result = await axios.post("http://localhost:5000/ai/get-review", { code });
      setReview(result.data);
    } catch (err) {
      setReview("⚠️ Error: Could not fetch review.");
    } finally {
      setLoading(false); // stop spinner
    }
  };

  return (
    <>
      <main>
        
        <div className="left">
          <h1 className="app-title">AI-Code-Reviewer</h1>
          <div className="panel-header">
            
            <p className="hint">
              Left: paste the <b>wrong/original</b> code → click <b>Review</b>
            </p>
          </div>

          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>

          <div
            className="review"
            onClick={!loading ? reviewCode : undefined}
            style={{
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? (
              <>
                Reviewing...
                <span className="spinner"></span>
              </>
            ) : (
              "Review"
            )}
          </div>
        </div>

        <div className="right">
          <div className="panel-header">
            <h2 className="panel-title">Right: AI Review & Corrected Code</h2>
            <p className="hint">Results show explanations and a fixed code block.</p>
          </div>

          {review ? (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          ) : (
            <div className="empty-state">
              Paste code on the left and click <b>Review</b> to see results here.
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
