import { ConfigProvider, Typography } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
const { Paragraph, Title, Text } = Typography;
const Destructuring = () => {
  const objDestructuring = `    const user = { firstName: "Deepak", lastName: "Kumar", age:"30"};
    
    // Without destructuring
    console.log(user.firstName, user.lastName);

    // With destructuring
    const { firstName, lastName } = user;
    console.log(firstName, lastName);`;
  const arrayDestructuring = `    const numbers = [10, 20, 30];
    
    // Without destructuring
    let firstNum = numbers[0];
    let secondNum = numbers[1];
    
    // With destructuring
    const [num1, num2] = numbers;
    console.log(num1, num2)`;
  return (
    <div className="bg-gray-200 p-2 rounded-lg">
      <ConfigProvider
        theme={{
          components: {
            Typography: {
              titleMarginTop: 0,
            },
          },
        }}
      >
        <Title
          level={2}
          className="font-bold underline underline-offset-8 mb-3"
        >
          Destructuring
        </Title>
        <Paragraph>
          <Text>
            Destructuring allows you to extract values from objects and arrays
            into distinct variables.
          </Text>
        </Paragraph>
        <Paragraph>
          <Title level={3} className="mt-4">
            Object Destructuring
          </Title>
          <SyntaxHighlighter language="jsx" style={dracula} wrapLines={true}>
            {objDestructuring}
          </SyntaxHighlighter>
        </Paragraph>
        <Paragraph>
          <Title level={3}>Array Destructuring</Title>
          <SyntaxHighlighter language="jsx" style={dracula} wrapLines={true}>
            {arrayDestructuring}
          </SyntaxHighlighter>
        </Paragraph>
      </ConfigProvider>
    </div>
  );
};
export default Destructuring;
