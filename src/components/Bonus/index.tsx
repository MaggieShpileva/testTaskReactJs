import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Clients, Ibonus } from "../../Requests/ProfileRequests";
import styles from "./index.module.scss";
import dayjs from "dayjs";
import { ResultT } from "../../types";
import { Loader } from "../Loader/index";

export const Bonus = () => {
  const [result, setResult] = useState<ResultT>();

  useEffect(() => {
    (async () => {
      const access_token = await Clients();
      const result = await Ibonus(access_token);

      setResult(result);
    })();
  }, []);

  return (
    <div className={styles.container}>
      {result ? (
        <>
          <div className={styles.headline}>
            <h1 data-testid="active_bonuses">
              {result?.data?.currentQuantity} бонусов
            </h1>
          </div>
          <div className={styles.subhead}>
            <p>{dayjs(result?.data.dateBurning).format("D.MM")} сгорит</p>
            <p>{result?.data.forBurningQuantity} бонусов</p>
          </div>
          <button></button>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
