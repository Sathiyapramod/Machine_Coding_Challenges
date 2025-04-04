import React, { useRef, useState } from "react";
import { NodeIntf, NodeOrNull } from "../utils/node";
import Folder from "./Folder";

interface Props {
  node: NodeIntf;
  parent: NodeOrNull;
}

function Tree({ node, parent }: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isNew, setIsNew] = useState<boolean>(false);
  const isFolderRef = useRef(false);

  // handling edit option
  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  const onNew = (isFolder: boolean) => {
    isFolderRef.current = isFolder;
    setIsNew(!isNew);
    setExpanded(true);
  };

  return (
    <div>
      <Folder
        node={node}
        parent={parent}
        toggleExpand={toggleExpand}
        expanded={expanded}
        onNew={onNew}
      />
      {expanded && (
        <div className="indent">
          {node.nodes.map((childNode) =>
            childNode.isFolder ? (
              <Tree node={childNode} key={childNode.id} parent={node} />
            ) : (
              <div key={childNode.id}></div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Tree;
