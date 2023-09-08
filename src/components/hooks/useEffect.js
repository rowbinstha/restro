import React, { useEffect, useState } from 'react';
import "./style.css";

const UseEffect = () => {

    const [num, setNum] = useState(0);

    useEffect(() => {
        document.title = `Chats(${num})`
    });

    return (
        <>
            <div className="center_div">
                <p>{num}</p>
                <div className="button2" onClick={() => setNum(num + 1)} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increment
                </div>
                {/* <div className="button2" onClick={() => num > 0 ? setNum(num - 1) : setNum(0)} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Decrement
                </div> */}
            </div>
        </>
    );
}

export default UseEffect;