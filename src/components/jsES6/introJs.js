import { ConfigProvider, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

const JSIntro = () => {
  return (
    <div className="bg-gray-200 m-4 p-8 rounded-lg">
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
          level={1}
          className="font-bold underline underline-offset-8 mb-3"
        >
          JavaScript (ES6+) - Detailed Explanation
        </Title>
        <Paragraph>
          <Text className="text-lg">
            React is built on JavaScript, so a strong understanding of modern
            JavaScript (ES6+) is essential. In this chapter, we will explore key
            JavaScript concepts that you must master before diving into React.
          </Text>
        </Paragraph>
        <Paragraph>
          <Text className="text-lg">
            Please follow the sidebar menu for further topics:
          </Text>
        </Paragraph>
        <Paragraph>
          <Text className="text-lg">JS has 8 Data Types:</Text>
          <div className="flex flex-col ps-4">
            <Text>String</Text>
            <Text>Number</Text>
            <Text>BigInt</Text>
            <Text>Boolean</Text>
            <Text>Undefined</Text>
            <Text>Null</Text>
            <Text>Symbol</Text>
            <Text>Object</Text>
          </div>
        </Paragraph>
      </ConfigProvider>
    </div>
  );
};
export default JSIntro;
