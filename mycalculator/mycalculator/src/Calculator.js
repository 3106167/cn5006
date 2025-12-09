import React, { useState } from "react";
import Button from "./Button";
import './Calculator.css';
// You can replace this URL with a path to your own picture if you upload one to the 'public' folder
import myPicture from "./Mypic.jpeg"; 

function KeyPadComponent(props) {
    const [text1, setText] = useState("");
    const [showImg, setShowImg] = useState(false); // State to toggle image visibility

    const ClickHandle = (e) => {
        const val = e.target.value;

        // --- Logic for Clear ---
        if (val === "C") {
            setText("");
            setShowImg(false); // Hide image on clear
        }
        // --- Logic for Calculate (=) ---
        else if (val === "=") {
            try {
                // Warning: eval is used for simplicity here, but be cautious in real apps!
                setText(eval(text1).toString());
            } catch (err) {
                setText("Error");
            }
        }
        // --- TASK 3: Logic for Square ---
        else if (val === "Square") {
            try {
                // Calculate the number first, then square it
                let result = eval(text1);
                setText((result * result).toString());
            } catch (err) {
                setText("Error");
            }
        }
        // --- TASK 2: Logic for "Show Me" ---
        else if (val === "Show Me") {
            setShowImg(true);
        }
        // --- Logic for all other buttons ---
        else {
            setText(text1 + val);
        }
    };

    return (
        <div className="Calculator">
            {/* Display Screen */}
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>

            {/* TASK 2: Image Area - Only shows if showImg is true */}
            {showImg && (
                <div style={{ textAlign: "center", margin: "10px" }}>
                   {/* Using the default React logo as a placeholder. 
                       Replace 'src' with your image path. */}
                   <img src={myPicture} alt="Me" style={{ width: "100px", borderRadius: "50%" }} />
                </div>
            )}

            {/* Buttons Grid */}
            <div>
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>

            {/* New Row for Assignment Tasks */}
            <div style={{ marginTop: "10px" }}>
                {/* Task 3 Button */}
                <Button label="Square" ClickHandle={ClickHandle} />
                {/* Task 2 Button */}
                <Button label="Show Me" ClickHandle={ClickHandle} />
            </div>
        </div>
    );
}

export default KeyPadComponent;