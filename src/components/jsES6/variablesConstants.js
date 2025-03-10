import { ConfigProvider, List, Typography } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Text, Title, Paragraph } = Typography;
const VariablesConstants = () => {
  const variableDeclaration = ` let name = "Deepak"; //Can be reassigned
 const age = 30 //Cannot be reassigned
     
 name = "Deepu"; //This is allowed
 age = 35; // ❌ Error! You cannot reassign a const variable`;
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
          Variables & Constants (<code>let</code>, <code>const</code>)
        </Title>
        <Paragraph>
          <Text>JavaScript has three ways to declare variables:</Text>
          <List
            size="small"
            className="border border-gray-300 rounded-lg bg-white my-2"
          >
            <List.Item>
              <Text>
                <strong>
                  <code>var</code>
                </strong>{" "}
                (older, avoid using)
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <strong>
                  <code>let</code>
                </strong>{" "}
                (used for variables that can change)
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <strong>
                  <code>const</code>
                </strong>{" "}
                (used for variables that should not change)
              </Text>
            </List.Item>
          </List>
          <Title level={5}>Example:</Title>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {variableDeclaration}
          </SyntaxHighlighter>
          <Title level={3} className="mt-4">
            Why{" "}
            <strong>
              <code>let</code>
            </strong>{" "}
            and{" "}
            <strong>
              <code>const</code>
            </strong>
            instead of{" "}
            <strong>
              <code>var</code>
            </strong>
            ?
          </Title>
          <List
            size="small"
            className="border border-gray-300 rounded-lg bg-white my-2"
          >
            <List.Item>
              <Text>
                <strong>
                  <code>var</code>
                </strong>{" "}
                is function-scoped, meaning it can be accessed outside a block
                (which can lead to errors).
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <strong>
                  <code>let</code>
                </strong>{" "}
                and{" "}
                <strong>
                  <code>const</code>
                </strong>
                are block-scoped, meaning they only exist within the block they
                are declared in.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <strong>
                  <code>const</code>
                </strong>{" "}
                prevents accidental reassignment.
              </Text>
            </List.Item>
          </List>
        </Paragraph>
      </ConfigProvider>
    </div>
  );
};
export default VariablesConstants;
