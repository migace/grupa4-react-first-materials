import { useState } from "react";
import styles from "./counter.module.css";

export const Counter = () => {
  const [counter, setCounter] = useState(100);

  const decreaseCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={decreaseCounter}>-</button>
      <p>{counter}</p>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
};
