import {
  Col,
  ConfigProvider,
  Flex,
  Image,
  Row,
  Typography,
  Spin,
  Button,
} from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

const BusinessNews = () => {
  const [state, setState] = useState([]);
  const [visibleItems, setVisibleItems] = useState(5); // Number of items initially visible
  const [loading, setLoading] = useState(false); // Track loading status
  const [hasMore, setHasMore] = useState(true); // Track if there are more items to load

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dfeb161d9cc0446dbdd8525716ae2ab5"
    )
      .then((response) => response.json())
      .then((data) => {
        // Initialize state with data and check if more items can be loaded
        setState(data.articles);
        if (data.articles.length < 1) {
          setHasMore(false); // No more items to load
        }
      })
      .catch((error) => {
        console.error("Error while fetching data:", error);
      });
  }, []);

  // Load more items as the user scrolls to the bottom
  const handleScroll = () => {
    if (
      !loading &&
      hasMore &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
    ) {
      setLoading(true); // Set loading to true
      setTimeout(() => {
        // Simulate loading more items
        setVisibleItems((prev) => {
          const newVisibleItems = prev + 5;
          // Check if we reached the end of the data
          if (newVisibleItems >= state.length) {
            setHasMore(false); // No more items to load
          }
          setLoading(false); // Reset loading status
          return newVisibleItems;
        });
      }, 1000); // 1-second delay for simulation
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup scroll listener
  }, [loading, hasMore, state.length]); // Dependency on loading, hasMore, and state length

  return (
    <>
      <Title level={2} className="font-bold underline underline-offset-8 mb-3">
        Welcome to the BUSINESS news!
      </Title>
      {state.slice(0, visibleItems).map((item, index) => (
        <Row className="mb-4" key={index}>
          <Col span={8} className="p-5 bg-white rounded-s-lg">
            <Image src={item.urlToImage} alt="Image" preview={false} />
          </Col>
          <Col span={16} className="p-5 bg-white rounded-e-lg">
            <ConfigProvider
              theme={{
                components: {
                  Typography: {
                    titleMarginTop: 0,
                  },
                },
              }}
            >
              <Title level={4}>{item.title}</Title>
              <Flex justify="space-between">
                <Text>
                  <strong>Author: </strong>
                  {item.author || "Unknown"}
                </Text>
                <Text className="min-w-fit">
                  <strong>Published Date: </strong>
                  {new Date(item.publishedAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </Text>
              </Flex>
              <Text>{item.description}</Text>
              <br />
              <Link to={item.url}>
                <Button className="mt-4 bg-slate-400 text-white">
                  READ MORE
                </Button>
              </Link>
              <div className="mt-4 text-right">
                <Text>
                  <strong>Source: </strong>
                  {item.source.name}
                </Text>
              </div>
            </ConfigProvider>
          </Col>
        </Row>
      ))}
      {loading && (
        <Flex justify="center" align="center" className="mt-4">
          <Spin size="large" /> {/* Ant Design spinner */}
        </Flex>
      )}
      {!hasMore && !loading && (
        <Flex justify="center" align="center" className="mt-4">
          <Text>No more items to load</Text>
        </Flex>
      )}
    </>
  );
};

export default BusinessNews;
