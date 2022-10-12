import './Option.css'

const Option = ({ option, correctAnswer, handleClick }) => {

    return (
        <div>
            <button onClick={() => handleClick(option, correctAnswer)} className='option'>{option}</button>
        </div>
    );
};

export default Option;