import React, { useState } from "react";
import { NodeIntf, NodeOrNull } from "../utils/node";

interface Props {
  node: NodeIntf;
  parent: NodeOrNull;
  expanded: boolean;
  toggleExpand: (e: React.MouseEvent) => void;
  onNew: (isFolder: boolean) => void;
}

function Folder({ node, parent, expanded, toggleExpand, onNew }: Props) {
  const [isEditable, setIsEditable] = useState(false);

  if (isEditable)
    return (
      <li className="list editList">
        {expanded ? "📂" : "📁"}&nbsp;{node.name}
        <input type="text" />
      </li>
    );
  return (
    <li className="list editList">
      <button onClick={toggleExpand}>
        {expanded ? "📂" : "📁"}&nbsp;{node.name}
      </button>
      <div className="controls">
        <button className="edit">✏️</button>
        <button className="delete"> 🗑️</button>
        <button className="new-folder" onClick={() => onNew(false)}>
          🗂
        </button>
        <button className="new-file" onClick={() => onNew(true)}>
          📄
        </button>
      </div>
    </li>
  );
}

export default Folder;
