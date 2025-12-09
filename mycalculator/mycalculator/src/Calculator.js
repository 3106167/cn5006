import React, { useState } from "react";
import Button from "./Button";
import './Calculator.css';
import myPicture from "./Mypic.jpeg"; 

function KeyPadComponent(props) {
    const [text1, setText] = useState("");
    const [showImg, setShowImg] = useState(false);

    const ClickHandle = (e) => {
        const val = e.target.value;

        if (val === "C") {
            setText("");
            setShowImg(false); 
        }
        else if (val === "=") {
            try {
                setText(eval(text1).toString());
            } catch (err) {
                setText("Error");
            }
        }
        else if (val === "Square") {
            try {
                let result = eval(text1);
                setText((result * result).toString());
            } catch (err) {
                setText("Error");
            }
        }
        else if (val === "Show Me") {
            setShowImg(true);
        }
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

            <div className="keypad-row bottom-row" style={{ marginTop: "10px" }}>
                {/* Task 3 Button */}
                <Button label="Square" ClickHandle={ClickHandle} />
                {/* Task 2 Button */}
                <Button label="Show Me" ClickHandle={ClickHandle} />
            </div>
            {showImg && (
                <div style={{ textAlign: "center", margin: "10px" }}>
                   <img src={myPicture} alt="Me" style={{ width: "100px", borderRadius: "50%" }} />
                </div>
            )}
        </div>
    );
}

export default KeyPadComponent;