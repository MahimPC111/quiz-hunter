import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quizzes.css'

const Quizzes = () => {
    const quizzes = useLoaderData();
    const questions = quizzes.data.questions;
    const name = quizzes.data.name;


    return (
        <div className='quizzes'>
            <h2>Quiz of {name}</h2>
            <div className='quiz-section'>
                {
                    questions.map(qstn => <Question key={qstn.id} qstn={qstn}></Question>)
                }
            </div>
        </div>
    );
};

export default Quizzes;
