import UseState from "../../hooksExample.js/useState";

const DocsComponents = (props) => {
  const Components = props.componentName;
  console.log("Components", Components);
  return <>{<Components />}</>;
};

export default DocsComponents;
