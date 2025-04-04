import React, { useState } from "react";
import Tree from "./components/Tree";
import "./App.css";
import { NodeIntf, NodeOrNull } from "./utils/node";
import { fileExplorerData } from "../src/utils/data";

function App() {
  const [data, setData] = useState<NodeIntf>(fileExplorerData as NodeIntf);
  return (
    <div>
      <Tree node={data} parent={null} />
    </div>
  );
}

export default App;
