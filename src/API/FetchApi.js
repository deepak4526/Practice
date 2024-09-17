import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ConfigProvider, List, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;
const getApi = `fetch("URL")      //Makes a GET request to the specified URL
.then((response) => response.json())     //Converts the response into JSON format
.then((data) => console.log(data))     //Logs the JSON data to the console
.catch((error) => console.error(error));      //Optionally handles any errors`;

const displayExample = `fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    // Assuming 'data' is an array of objects
    const listElement = document.getElementById('dataList'); // Get an HTML element to insert the data
    
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.name;  // Assuming each item has a 'name' property
      listElement.appendChild(listItem);
    });
  })
  .catch((error) => console.error('Error:', error));
`;

const processExample = `fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    const filteredData = data.filter(item => item.isActive);  // Only include active items
    console.log(filteredData);
  })
  .catch((error) => console.error('Error:', error));
`;

const storeExample = `fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem('apiData', JSON.stringify(data));  // Store data in local storage
  })
  .catch((error) => console.error('Error:', error));
`;

const furtherActionExample = `fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem('apiData', JSON.stringify(data));  // Store data in local storage
  })
  .catch((error) => console.error('Error:', error));
`;

const anotherApiRequestExample = `fetch("https://api.example.com/user")
    .then((response) => response.json())
    .then((userData) => {
      return fetch("https://api.example.com/user/\${userData.id}/details");  // Fetch user details
    })
    .then((detailsResponse) => detailsResponse.json())
    .then((details) => console.log(details))  // Log user details
    .catch((error) => console.error('Error:', error));
`;
const FetchApi = () => {
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
        <Paragraph>
          <Title
            level={2}
            className="font-bold underline underline-offset-8 mb-3"
          >
            Fetch data from an API
          </Title>
          <Text>
            When developing applications, you often need to get data from an
            API. This lets you deliver dynamic and often-updated content within
            your application. You'll retrieve this data as you may need to
            interact with external services, communicate with a distant server,
            or access a database.
          </Text>
        </Paragraph>
        <Paragraph>
          <Title level={4}>Code Reference</Title>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            showLineNumbers={false}
            wrapLines={true}
          >
            {getApi}
          </SyntaxHighlighter>
          <Title level={4}>Explaination</Title>
          <List
            size="small"
            className="border border-gray-300 rounded-lg bg-white"
          >
            <List.Item>
              <Text>
                1.{" "}
                <strong>
                  <code>fetch("URL")</code>
                </strong>
                : Initiates an HTTP request to the specified URL. By default,{" "}
                <strong>
                  <code>fetch</code>
                </strong>{" "}
                makes a{" "}
                <strong>
                  <code>GET</code>
                </strong>{" "}
                request.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                2.{" "}
                <strong>
                  <code>.then((response) => response.json())</code>
                </strong>{" "}
                : Once the server responds, the response is passed to the next{" "}
                <strong>
                  <code>.then()</code>
                </strong>{" "}
                function where it is converted into a JSON object using{" "}
                <strong>
                  <code>response.json()</code>
                </strong>{" "}
                .
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                3.{" "}
                <strong>
                  <code>.then((data) => console.log(data))</code>
                </strong>{" "}
                : The JSON data is logged to the console.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                4.{" "}
                <strong>
                  <code>.catch((error) => console.error(error))</code>
                </strong>{" "}
                : This will handle any errors that occur during the request or
                parsing (optional but recommended).
              </Text>
            </List.Item>
          </List>
        </Paragraph>
        <Paragraph className="mt-10">
          <Text>
            After successfully fetching and logging the data using{" "}
            <strong>
              <code>fetch()</code>
            </strong>{" "}
            , the next step depends on what you want to do with the data. Here
            are common steps you might take:
          </Text>
          {/* display example */}
          <Paragraph>
            <Title level={4}>1. Display Data in the UI</Title>
            <Text className="m-0">
              You can update the HTML to display the fetched data data. For
              example, display it in a table or list.
            </Text>
            <Title level={5}>Example:</Title>
            <SyntaxHighlighter
              language="jsx"
              style={dracula}
              showLineNumbers={false}
              wrapLines={true}
            >
              {displayExample}
            </SyntaxHighlighter>
          </Paragraph>
          {/* Process the data */}
          <Paragraph>
            <Title level={4}>2. Process the Data</Title>
            <Text className="m-0">
              You might want to process or manipulate the data in some way, such
              as filtering, sorting, or transforming the data before using it.
            </Text>
            <Title level={5}>Example:</Title>
            <SyntaxHighlighter
              language="jsx"
              style={dracula}
              showLineNumbers={false}
              wrapLines={true}
            >
              {processExample}
            </SyntaxHighlighter>
          </Paragraph>
          {/* Store data locally */}
          <Paragraph>
            <Title level={4}>3. Store Data Locally</Title>
            <Text className="m-0">
              If the data needs to be stored temporarily for use later, you can
              store it in local variables, session storage, or local storage.
            </Text>
            <Title level={5}>Example (Local Storage):</Title>
            <SyntaxHighlighter
              language="jsx"
              style={dracula}
              showLineNumbers={false}
              wrapLines={true}
            >
              {storeExample}
            </SyntaxHighlighter>
          </Paragraph>
          {/* Handle the response for further actions */}
          <Paragraph>
            <Title level={4}>4. Handle the Response for Further Actions</Title>
            <Text className="m-0">
              You can trigger additional actions based on the fetched data, like
              updating a chart, redirecting the user, or sending another
              request.
            </Text>
            <Title level={5}>Example (Update Chart):</Title>
            <SyntaxHighlighter
              language="jsx"
              style={dracula}
              showLineNumbers={false}
              wrapLines={true}
            >
              {furtherActionExample}
            </SyntaxHighlighter>
          </Paragraph>
          {/* Send another request based on data */}
          <Paragraph>
            <Title level={4}>5. Send Another Request Based on Data</Title>
            <Text className="m-0">
              You might want to chain multiple API requests, depending on the
              data returned by the first request.
            </Text>
            <Title level={5}>Example:</Title>
            <SyntaxHighlighter
              language="jsx"
              style={dracula}
              showLineNumbers={false}
              wrapLines={true}
            >
              {anotherApiRequestExample}
            </SyntaxHighlighter>
          </Paragraph>
          <Paragraph>
            <Title level={4}>Next Steps Summary:</Title>
            <Text className="m-0">
              <List
                size="small"
                className="border border-gray-300 rounded-lg bg-white"
              >
                <List.Item>
                  <strong>Display the data:</strong> Show it in your HTML/UI.
                </List.Item>
                <List.Item>
                  <strong>Process the data:</strong> Filter, sort, or transform
                  it.
                </List.Item>
                <List.Item>
                  <strong>Store the data:</strong> Save it locally for future
                  use.
                </List.Item>
                <List.Item>
                  <strong>Trigger further actions:</strong> Use the data for
                  further requests, updates, or interactions.
                </List.Item>
              </List>
            </Text>
          </Paragraph>
        </Paragraph>
      </ConfigProvider>
    </div>
  );
};
export default FetchApi;
