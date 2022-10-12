import './Question.css'
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = ({ qstn, notify }) => {

    const { question, options, correctAnswer } = qstn;

    return (
        <div className='quiz'>
            <div className='eye-icon' onClick={() => notify(correctAnswer)}>
                <FontAwesomeIcon icon={faEye} />

            </div>
            <h3 className='quiz-question'>Question: {question}</h3>
            <div className='option-section'>
                {
                    options.map((option, idx) => <Option key={idx} option={option} correctAnswer={correctAnswer}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;