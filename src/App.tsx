import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Tokyo", "New York", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <div className="alert alert-primary">
        <Alert>Hello World</Alert>
      </div> */}
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>Hello !</Alert>
      )}
      {/* <Alert>Test</Alert> */}
      <Button color="primary" onClick={() => setVisibility(true)}>
        Button!
      </Button>
    </div>
  );
}

export default App;
