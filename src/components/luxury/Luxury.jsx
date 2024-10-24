import React from "react";
import styles from "./Luxury.module.css";

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Luxury Selection</h2>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top luxury vehicles to roll in style</span>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1560195919-db01654dd115?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1710384933211-ccd12606d21e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className={styles.content}>
            <h3>Maserati</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1579931992775-68a2274ca167?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className={styles.content}>
            <h3>Range Rover</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1649926079421-aa22ed4c5bea?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className={styles.content}>
            <h3>Porsche</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
