import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import Dashboard from "./features/dashboard";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Dashboard />
      </div>
    </ChakraProvider>
  );
}

export default App;
