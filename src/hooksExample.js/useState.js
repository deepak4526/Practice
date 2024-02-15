import { Button } from "antd";
import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <p> Current count is: {count}</p>
      <Button onClick={countIncrease}>Increase Count</Button>
    </>
  );
};
export default UseState;
