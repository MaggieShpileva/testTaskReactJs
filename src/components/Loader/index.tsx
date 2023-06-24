import { FC } from "react";
import styles from "./index.module.scss";

export const Loader: FC = () => {
  return (
    <div className={styles.container} data-testid="loader">
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
