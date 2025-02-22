import React from "react";
import styles from "./Details.module.css"; // Import module CSS

const Details = () => {
  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.title}>📋 Assignment Details</h2>
      <div className={styles.detailsBox}>
        <p><strong>Name:</strong> Kashif Nadeem Kayani</p>
        <p><strong>CMS:</strong> 456466</p>
        <p><strong>Class:</strong> BE-ME 15 (A)</p>
        <p><strong>Subject:</strong> Statistics and Probability</p>
        <p><strong>Assignment No:</strong> 01</p>
        <p><strong>Submitted To:</strong> Nimra Sher Asghar</p>
      </div>
    </div>
  );
};

export default Details;
