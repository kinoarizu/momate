import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1 className="Title">Hello World</h1>
      </div>
    </ChakraProvider>
  );
}

export default App;