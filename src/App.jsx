import { useState } from "react";

function App() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div
      style={{
        backgroundColor: "#bcc2cc",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        paddingTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Conditional Rendering Example</h1>

      <button
        onClick={toggleContent}
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        {showContent ? "Hide Content" : "Show Content"}
      </button>

      {showContent && (
        <div
          style={{
            border: "1px solid #322727",
            padding: "15px",
            margin: "20px auto",
            width: "300px",
            fontSize: "18px",
          }}>
          This content is displayed conditionally.
        </div>
      )}
    </div>
  );
}

export default App;