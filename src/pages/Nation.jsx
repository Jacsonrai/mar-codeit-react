import React, { useEffect, useState } from "react";

const Nation = () => {
  const [count, setCount] = useState(null);
  const [secondCount, setSecondCount] = useState(null);

  //mounting
  useEffect(() => {
    console.log("i am mounted");
  }, []);
  console.log(secondCount);

  //update
  useEffect(() => {
    if (count !== null) {
      console.log("i am first update");
    } else if (secondCount !== null) {
      console.log("i am second update");
    }
  }, [count, secondCount]);

  //unmount
  useEffect(() => {
    return () => {
      setSecondCount(null);
      setCount(null);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>First click</button>
      <button onClick={() => setSecondCount(secondCount + 1)}>
        second click
      </button>
    </div>
  );
};

export default Nation;
