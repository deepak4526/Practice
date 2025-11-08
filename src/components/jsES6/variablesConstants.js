import { ConfigProvider, List, Typography } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Text, Title, Paragraph } = Typography;
const VariablesConstants = () => {
  const variableDeclaration = ` let name = "Deepak"; //Can be reassigned
 const age = 30 //Cannot be reassigned
     
 name = "Deepu"; //This is allowed
 age = 35; // ❌ Error! You cannot reassign a const variable`;

  const testVar = ` // Example 1: VAR
 function testVar(){
   var x =10;
   if(true){
     var x = 20; // same variable!
     console.log(x); // 20
   }
     console.log(x); // 20
  }
 testVar();`;
  const testLet = ` // Example 2: LET
 function testLet(){
   let x =10;
   if(true){
     let x = 20; // different variable!
     console.log(x); // 20
   }
     console.log(x); // 10
  }
 testLet();`;
  const testConst = ` // Example 3: CONST
 function testConst(){
   const x = 10;
   console.log(x); // 10

   // x = 20; // Error: Assignment to constant variable
 }
 `;
  const testConst2 = `  // Example 4: CONST with objects
 cosnt person = {name: "Deepak"};
 person.name = "Naveen"; // allowed!
 console.log(person); // {name: "Naveen"}

 //  but if you use Object.freeze, it's properties cannot be modified
 const user = {user: "Deepak"}
 Object.freeze(user);
 user.name = "Naveen";
 console.log(user); // {name: "Deepak"}
 `;
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
                (older, avoid using, and also it is{" "}
                <strong>function-scoped</strong>)
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <strong>
                  <code>let</code>
                </strong>{" "}
                (used for variables that can change,{" "}
                <strong>block-scoped</strong>)
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <strong>
                  <code>const</code>
                </strong>{" "}
                (used for variables that should not change,{" "}
                <strong>block-scoped</strong>, cannot be reassigned)
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
                (which can lead to errors). It also have the{" "}
                <strong>'hoisting'</strong> behavior which means that it is
                accessible throughout the scope of the function, regardless of
                where it has been declared.
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
                are declared in. And these were introduced in ECMAScript 6
                (ES6). These also have concept of the temporal dead zone which
                means they are not accessible before they are declared.
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
          <Title level={5}>Example:</Title>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {testVar}
          </SyntaxHighlighter>
          <List
            size="small"
            className="border border-gray-300 rounded-lg bg-white my-2"
          >
            <List.Item>
              <Text>
                In this example,
                <strong>
                  <code>var</code>
                </strong>
                is <strong>function-scoped</strong>, so{" "}
                <strong>
                  <code>x</code>
                </strong>{" "}
                inside the{" "}
                <strong>
                  <code>if</code>
                </strong>{" "}
                block overwrites the outer{" "}
                <strong>
                  <code>x</code>
                </strong>
                .
              </Text>
            </List.Item>
          </List>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {testLet}
          </SyntaxHighlighter>
          <List
            size="small"
            className="border border-gray-300 rounded-lg bg-white my-2"
          >
            <List.Item>
              <Text>
                <strong>
                  <code>let</code>
                </strong>{" "}
                is <strong>block-scoped</strong>, so the inner{" "}
                <strong>
                  <code>x</code>
                </strong>{" "}
                does not affect the outer{" "}
                <strong>
                  <code>x</code>
                </strong>
                .
              </Text>
            </List.Item>
          </List>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {testConst}
          </SyntaxHighlighter>
          <List
            size="small"
            className="border border-gray-300 rounded-lg bg-white my-2"
          >
            <List.Item>
              <strong>
                <code>const</code>
              </strong>{" "}
              cannot be reassigned, but note <strong>objects and arrays</strong>{" "}
              can still have their contents mutated(see below example).
            </List.Item>
          </List>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {testConst2}
          </SyntaxHighlighter>
        </Paragraph>
      </ConfigProvider>
    </div>
  );
};
export default VariablesConstants;
