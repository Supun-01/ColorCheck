import { useState } from "react";

function ColorChecker() {
    const [color, setColor] = useState("#ffffff"); // Initial color set to white

    // Function to copy color to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(color);
        alert(`Copied color code: ${color}`);
    };

    return (
        <div
            className="m-10 p-6 rounded-lg text-center"
            style={{ backgroundColor: color }} // Apply background color to this component
        >
            <div>
                <h1 className="flex items-center justify-center">
                    Put Your Color:
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)} // Update color state on change
                        className="ml-2"
                    />
                </h1>
                <p
                    className="mt-4 text-xl font-semibold cursor-pointer"
                    onClick={copyToClipboard}
                    title="Click to copy color code"
                >
                    {color}
                </p>
            </div>
        </div>
    );
}

export default ColorChecker;
