import { Typography } from "antd";
const { Title } = Typography;
const BusinessNews = () => {
  fetch(
    "https://newsapi.org/v2/everything?q=Apple&from=2024-09-02&sortBy=popularity&apiKey=dfeb161d9cc0446dbdd8525716ae2ab5"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error while fetching data:", error);
    });

  return (
    <>
      <Title level={2} className="font-bold underline underline-offset-8 mb-3">
        Welcome to the BUSINESS news!
      </Title>
      <Typography.Text>
        When developing applications, you often need to get data from an API.
        This lets you deliver dynamic and often-updated content within your
        application.
      </Typography.Text>
      <Typography.Paragraph>
        You'll retrieve this data as you may need to interact with external
        services, communicate with a distant server, or access a database.
      </Typography.Paragraph>
    </>
  );
};
export default BusinessNews;
