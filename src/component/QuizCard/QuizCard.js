import { toast } from 'react-toastify';
import QUizOption from '../QuizOption/QuizOption';


const QuizCard = ({ quiz }) => {


    const { question, options, correctAnswer } = quiz;



    // Toast!
    const notify = (correctAnswer) => toast.success('Ans: ' + correctAnswer, {
        position: toast.POSITION.TOP_CENTER, autoClose: 5000

    });



    return (
        <div className='m-10 border text-center w-4/6'>

            <div className='grid grid-cols-6'>
                <div className='col-span-5'
                    dangerouslySetInnerHTML={{
                        __html: `<h1>${question}</h1>`
                    }}>

                </div>


                <button onClick={() => notify(correctAnswer)} className='grid-cols-1 bg-lime-300 hover:bg-lime-400'>EYE</button>
            </div>
            <div className={`grid grid-cols-2`}>
                {options.map((option, index) => <QUizOption
                    correctAnswer={correctAnswer}
                    key={index} option={option}></QUizOption>)}
            </div>

        </div>
    );
};

export default QuizCard;