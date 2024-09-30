import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "4rem",
            color: "#fff",
            letterSpacing: "1.5px",
            marginBottom: "1.5rem",
          }}
        >
          404 - Page Not Found
        </h1>
        <p style={{ fontSize: "1.4rem", marginBottom: "2rem" }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          style={{
            padding: "1rem 2rem",
            textTransform: "uppercase",
            letterSpacing: "1.2px",
            border: "none",
          }}
          onClick={() => navigate("/")}
        >
          Take me Back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
