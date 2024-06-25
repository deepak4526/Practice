import { Input } from "antd";
import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const handleInput = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
    // setCharCount(text.length);
  };
  useEffect(() => {
    setCharCount(text.length);
  }, [text]);
  return (
    <div className="p-8">
      <p>{text}</p>
      <p>{charCount}</p>
      <Input type="text" onChange={handleInput} />
    </div>
  );
};
export default Home;
