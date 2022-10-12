import React, { useState } from 'react';
import './Option.css'



const Option = ({ option, correctAnswer }) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current)
    };

    // console.log(correctAnswer)
    return (
        <div>
            <button style={{
                backgroundColor: isActive ? 'burlywood' : undefined
            }}
                onClick={handleClick} className='option'>{option}</button>
        </div>
    );
};

export default Option;