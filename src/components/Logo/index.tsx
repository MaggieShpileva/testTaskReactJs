import styles from "./index.module.scss";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>логотип</p>
      </div>
      <div className={styles.icon}></div>
    </div>
  );
};
