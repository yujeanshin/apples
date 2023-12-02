import React, { useState, useEffect } from 'react'
import "../styles/Block.css"

// i don't know
function handleEvent(event, type) {
    if (type === "mousedown") {
        console.log("Mouse Down");
        // this.setState({ message: "Mouse Down" });
    } else if (type === "mousemove") {
        // this.setState({ message: "Mouse Move" });
        console.log("Mouse Move");
    } else {
        // this.setState({ message: "Mouse Up" });
        console.log("Mouse Up");
    }
}

function SelectionBox() {
    const [mouseDown, setMouseDown] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [mouseDownPos, setMouseDownPos] = useState({ x: 0, y: 0 });
    const [selectionBox, setSelectionBox] = useState({width: 0, height: 0});


    useEffect(() => {
        document.addEventListener("mousedown", (_event) => {
            setMouseDown(true);
            setMouseDownPos(mousePos);
            console.log("down");
        });
        document.addEventListener("mouseup", (_event) => {
            setMouseDown(false);
            setSelectionBox({width: 0, height: 0});
            console.log("up");
        });
        document.addEventListener("mousemove", (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
            if (mouseDown) {
                setSelectionBox({
                    width: (mousePos.x - mouseDownPos.x),
                    height: (mousePos.y - mouseDownPos.y)
                });
            } else {
                setSelectionBox({width: 0, height: 0});
            }
        });
        return () => {
            document.removeEventListener("mousedown", handleEvent);
            document.removeEventListener("mouseup", handleEvent);
            document.removeEventListener("mousemove", handleEvent);
        };
    }, [mouseDown, mousePos]);

    let boxStyle = {
        left: mouseDownPos.x,
        top: mouseDownPos.y,
        width: selectionBox.width,
        height: selectionBox.height
    };

    return (
        <div className="selection-box" style={boxStyle}></div>
    );
}

export default SelectionBox