import { ConfigProvider, List, Typography } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Paragraph, Text, Title } = Typography;
const TemplateLiterals = () => {
  const useTemplateLiterals = `let name = "Alice";
let  age = 30;
    
// Old way (before ES6)
let message1 = "Hello, my name is " + name + "and I am " + age + "years old";
console.log(message1);
    
// ES6+ way (using Template Literals)
let message2 = \`Hello, my name is \${name} and I am \${age} years old.\`
console.log(message2)`;
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
          Template Literals (String Interpolation)
        </Title>
        <Paragraph>
          <Text className="text-lg">
            Template literals allow you to embed variables and expressions
            inside strings using backticks(
            <strong>
              <code>`</code>
            </strong>
            ) instead of quotes(
            <strong>
              <code>""</code>
            </strong>{" "}
            or{" "}
            <strong>
              <code>''</code>
            </strong>
            ).
          </Text>
          <Title level={5}>Example:</Title>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {useTemplateLiterals}
          </SyntaxHighlighter>
        </Paragraph>
        <Paragraph>
          <Title level={3}>Why use Template Literals?</Title>
          <List
            size="small"
            className="border border-gray-300 rounded-lg bg-white my-2"
          >
            <List.Item>Easier to read and write.</List.Item>
            <List.Item>
              Supports multi-line strings without needing{" "}
              <strong>
                <code>\n</code>
              </strong>
            </List.Item>
          </List>
        </Paragraph>
      </ConfigProvider>
    </div>
  );
};
export default TemplateLiterals;
