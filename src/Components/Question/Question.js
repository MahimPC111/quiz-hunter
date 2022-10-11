import React from 'react';
import './Question.css'

const Question = ({ qstn }) => {
    console.log(qstn)
    const { question, options, correctAnswer } = qstn;
    return (
        <div>
            <h3>{question}</h3>
            <p>{options.length}</p>
            <p>{correctAnswer}</p>
        </div>
    );
};

export default Question;