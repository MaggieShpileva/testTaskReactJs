import { Bonus } from "../Bonus";
import { Logo } from "../Logo";
import styles from "./index.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Bonus />
      <div className={styles.bg}></div>
    </div>
  );
};
