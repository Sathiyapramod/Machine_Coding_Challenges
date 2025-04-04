import React from "react";

interface Props {
  defaultValue?: string;
  onComplete: () => void;
  validateNode: () => void;
}

function Input({ defaultValue }: Props) {
  return (
    <div>
      <input type="text" autoFocus={true} />
    </div>
  );
}

export default Input;
