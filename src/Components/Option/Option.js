import React from 'react';
import './Option.css'

const Option = ({ option }) => {
    // console.log(option)
    return (
        <div>
            <p className='option'>{option}</p>
        </div>
    );
};

export default Option;