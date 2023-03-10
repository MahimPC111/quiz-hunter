import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quizzes.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizzes = () => {
    const quizzes = useLoaderData();
    const questions = quizzes.data.questions;
    const name = quizzes.data.name;

    const notify = (correctAnswer) => toast(`${correctAnswer}`);

    const handleClick = (correctAnswer, option) => {
        if (correctAnswer === option) {
            toast('Right answer!!');
        }
        else {
            toast('Wrong answer!!')
        }
    };

    return (
        <div className='quizzes'>
            <h2>Quiz of {name}</h2>
            <div className='quiz-section'>
                <ToastContainer autoClose={1500} />
                {
                    questions.map(qstn => <Question key={qstn.id} qstn={qstn} notify={notify} handleClick={handleClick}></Question>)
                }
            </div>
        </div>
    );
};

export default Quizzes;
