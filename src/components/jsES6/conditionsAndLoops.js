import { ConfigProvider, List, Typography } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Title, Text, Paragraph } = Typography;
const ConditionAndLoops = () => {
  const ifElse = ` let age = 18;
 if (age >= 18) {
   console.log("You are an adult.");
 } else {
   console.log("You are a minor.");
 }

 // else if
 let score = 75;
 if (score >= 90) {
   console.log("Grade A");
 } else if (score >= 75) {
   console.log("Grade B");
 } else {
   console.log("Grade C");
 }
`;
  const ternary = ` let isAdult = age >= 18 ? true : false;`;
  const switchStatement = ` let day = 3;
 switch (day) {
   case 1:
     console.log("Monday");
     break;
   case 2:
     console.log("Tuesday");
     break;
   case 3:
     console.log("Wednesday");
     break;
   default:
     console.log("Invalid day");
 }`;

  const loopExamples = `
 // for loop
 for (let i = 0; i < 5; i++) {
   console.log(i);
 }

 // while loop
 let i = 0;
 while (i < 5) {
   console.log(i);
   i++;
 }

 // do-while loop: it runs at least once, even if condition is false
 let j = 0;
 do {
   console.log(j);
   j++;
 } while (j < 5);

 // for...in loop (best for objects keys)
 let person = { name: "John", age: 30 };
 for (let key in person) {
   console.log(key + ": " + person[key]);
 }

 // for...of loop (best for arrays)
 let colors = ["red", "green", "blue"];
 for (let color of colors) {
   console.log(color);

//  Breaking & Skipping
 for (let i = 0; i < 5; i++) {
   if (i === 3) {
     continue;
   }
   if (i === 4) {
     break;
   }
   console.log(i);
 }`;
  return (
    <div className="bg-gray-200 p-2 rounded-lg">
      <ConfigProvider
        theme={{
          components: {
            Typography: {
              titleMarginTop: 0,
              // titleMarginBottom: 0,
            },
          },
        }}
      >
        <Title
          level={2}
          className="font-bold underline underline-offset-8 mb-3"
        >
          Conditionals
        </Title>
        <Paragraph>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {ifElse}
          </SyntaxHighlighter>
          <Title level={3}>Ternary Operator</Title>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {ternary}
          </SyntaxHighlighter>
          <Title level={3}>Switch Statement</Title>
          <Text>
            The switch statement is used to perform different actions based on
            different conditions.
          </Text>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {switchStatement}
          </SyntaxHighlighter>
          <Title level={3}>Loops</Title>
          <List
            size="small"
            className="border border-gray-300 rounded-lg bg-white my-2"
          >
            <List.Item>
              <Text>
                Use{" "}
                <strong>
                  <code>for</code>
                </strong>{" "}
                loop when you know how many times you want to loop.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Use{" "}
                <strong>
                  <code>while</code>
                </strong>{" "}
                loop when you don't know how many times you want to loop.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Use{" "}
                <strong>
                  <code>do-while</code>
                </strong>{" "}
                loop when you want to loop at least once.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Use{" "}
                <strong>
                  <code>for...in</code>
                </strong>{" "}
                loop when you want to loop through the properties of an object.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Use{" "}
                <strong>
                  <code>for...of</code>
                </strong>{" "}
                for arrays
              </Text>
            </List.Item>
          </List>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {loopExamples}
          </SyntaxHighlighter>
        </Paragraph>
      </ConfigProvider>
    </div>
  );
};

export default ConditionAndLoops;
