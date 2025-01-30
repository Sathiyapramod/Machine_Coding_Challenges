import React, { useState } from "react";

function Box(): React.ReactNode {
    const [boxes, setBoxes] = useState<boolean[]>(Array(9).fill(false));

    const handleChecked = (index: number) => {
        const newBoxes = [...boxes];
        // toggle the color
        newBoxes[index] = !newBoxes[index];

        // Check if all boxes are green
        if (newBoxes.every((box) => box)) {
            // If all are green, revert them in reverse order
            setTimeout(() => {
                setBoxes((prev) => prev.map((_, i) => prev[prev.length - 1 - i]));
            }, 500); // Optional delay for visual effect
        } else {
            setBoxes(newBoxes); // Update the state with the new boxes
        }
    };
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap--">
            {boxes.map((item, index) => (
                <ItemBox key={index} isChecked={item} onClick={() => handleChecked(index)} />
            ))}
        </div>
    );
}

export default Box;

function ItemBox({ isChecked, onClick }: { isChecked: boolean; onClick: () => void }) {
    return (
        <div
            className={`w-[100px] h-[100px] border border-black flex flex-row justify-center align-center ${
                isChecked ? "bg-green-500" : "bg-white"
            }`}
            onClick={onClick}
        >
            {isChecked ? "✔" : "❌"}
        </div>
    );
}
