import React from "react";
import * as styles from "../style-dictionary-dist/variables";
function Figma() {
  return (
    <div className={styles.ColorBackground} style={{ width: "100%" }}>
      <p className={styles.ColorText}>Hello World!</p>
      <ul style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        <li className={styles.ColorBasePrimary}>Teste</li>
        <li className={styles.ColorBasePrimary}>Teste</li>
        <li className={styles.ColorBasePrimary}>Teste</li>
      </ul>
    </div>
  );
}

export default Figma;
