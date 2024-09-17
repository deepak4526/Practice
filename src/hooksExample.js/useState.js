import { Button } from "antd";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Typography } from "antd";

const { Title } = Typography;
const UseState = () => {
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    setCount(count + 1);
    console.log(count);
  };

  const importUseState = `import { useState } from "react";`;

  const codeBlock = `const App = () => {
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    setCount(count + 1);
    // console.log(count);
  };
  return (
    <>
    <p> Current count is: {count}</p>
      <Button onClick={countIncrease}>Increase Count</Button>
    </>
  )
}`;

  return (
    <div className="bg-gray-200 m-4 p-8 rounded-lg">
      <Title level={2} className="font-bold underline underline-offset-8 mb-3">
        Use State in React Hooks
      </Title>
      <p className="text-lg">
        The useState hook in React lets you add state to functional components.
        It returns an array with two values: the current state and a function to
        update it. The Hook takes an initial state value as an argument and
        returns an updated state value whenever the setter function is called.
      </p>
      <h2 className="text-2xl font-semibold">Set Counter using `useState`</h2>
      <p className="text-xl mt-4 mb-3">First import useState form react</p>
      <SyntaxHighlighter language="jsx" style={dracula}>
        {importUseState}
      </SyntaxHighlighter>
      <p className="text-xl mt-4 mb-3">Example</p>
      <SyntaxHighlighter language="jsx" style={dracula} wrapLines={true}>
        {codeBlock}
      </SyntaxHighlighter>
      <p className="text-lg">
        In this example, useState hook is used to create a state variable
        "count". The initial value of the count is "0". And setCount function is
        used to update the value of the count.
        <br />
        When someone clicks "Increase Count" button, setCount function is called
        with the value "count+1".
      </p>
      <p className="text-xl mt-4 mb-3">See Demo:</p>
      <div className="text-center flex flex-col gap-4 bg-white p-8 rounded-lg">
        <p> Current count is: {count}</p>
        <div className="flex gap-4 justify-center">
          <Button
            className="w-fit bg-orange-500 text-gray-100"
            onClick={countIncrease}
          >
            Increase Count
          </Button>
          <Button
            className="w-fit border border-orange-500 text-orange-500"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset Count
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UseState;
