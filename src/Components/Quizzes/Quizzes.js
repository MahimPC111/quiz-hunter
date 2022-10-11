import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quizzes.css'

const Quizzes = () => {
    const quizzes = useLoaderData();
    // console.log(quizzes.data.questions)
    const questions = quizzes.data.questions;

    return (
        <div>
            <h2>This is quiz section</h2>
            {
                questions.map(qstn => <Question key={qstn.id} qstn={qstn}></Question>)
            }
        </div>
    );
};

export default Quizzes;
