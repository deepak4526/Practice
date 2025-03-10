import { ConfigProvider, List, Typography } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
const { Paragraph, Text, Title } = Typography;
const ArrowFunctions = () => {
  const exampleArrowFunction = `// Regular function
function add(a,b){
return a+b;
}

// Arrow Function
const addArrow = (a,b) => a+b;

console.log(addArrow(2, 3)); // Output: 5`;
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
          Arrow Functions (
          <strong>
            <code>=></code>
          </strong>
          )
        </Title>
        <Paragraph>
          <Text>
            Arrow functions (
            <strong>
              <code>=></code>
            </strong>
            ) provide a shorter syntax for writing functions.
          </Text>
        </Paragraph>
        <Paragraph>
          <Title level={5}>Example:</Title>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {exampleArrowFunction}
          </SyntaxHighlighter>
        </Paragraph>
        <Paragraph>
          <Title level={3}>Why use Template Literals?</Title>
          <List
            size="small"
            className="border border-gray-300 rounded-lg bg-white my-2"
          >
            <List.Item>
              <strong>Shorter syntax:</strong> No need for{" "}
              <strong>
                <code>function</code>
              </strong>{" "}
              keyword.
            </List.Item>
            <List.Item>
              <strong>Implicit return:</strong> If the function body is a single
              expression,{" "}
              <strong>
                <code>return</code>
              </strong>{" "}
              is not required.
            </List.Item>
            <List.Item>
              <strong>
                No <code>this</code> binding:
              </strong>{" "}
              Useful in React components.
            </List.Item>
          </List>
        </Paragraph>
      </ConfigProvider>
    </div>
  );
};
export default ArrowFunctions;
