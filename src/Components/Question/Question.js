import './Question.css'
import Option from '../Option/Option';

const Question = ({ qstn }) => {


    const { question, options, correctAnswer } = qstn;
    return (
        <div className='quiz'>
            <h3 className='quiz-question'>Question: {question}</h3>
            <div className='option-section'>
                {
                    options.map((option, idx) => <Option key={idx} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;