import './Option.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({ option, correctAnswer }) => {

    const handleClick = (option) => {
        if (correctAnswer === option) {
            toast('Right answer!!');

        }
        else {
            toast('Wrong answer!!');
        }
    };



    return (
        <div>
            <ToastContainer autoClose={1500} />
            <button onClick={() => handleClick(option)} className='option'>{option}</button>
        </div>
    );
};

export default Option;