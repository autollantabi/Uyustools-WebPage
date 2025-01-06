import React from "react";
import { colores } from "./colors";

const UnderConstruction = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "50px",
      fontFamily: "Arial, sans-serif",
      height: "100%",
      minWidth:"350px"
    },
    header: {
      backgroundColor: colores.terciario,
      color: "white",
      padding: "20px",
    },
    logo: {
      maxWidth: "200px",
    },
    message: {
      marginTop: "50px",
      fontSize: "24px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="/LogoUyustools.png"
          alt="Logo Uyustools"
          style={styles.logo}
        />
      </header>
      <main>
        <h1 style={styles.message}>¡Página en Construcción!</h1>
        <p style={{ fontSize: "18px", color: "#777" }}>
          Estamos trabajando para traerte algo increíble. Vuelve pronto.
        </p>
      </main>
    </div>
  );
};

export default UnderConstruction;
