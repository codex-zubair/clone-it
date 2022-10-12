
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const QuizPage = () => {

    // Quiz List Data.
    const {data} =  useLoaderData();

  

    //Destructuring from quiz Data
    const {logo,name, questions} = data;


    

    return (
        <div>
            <img className='bg-black' src={logo} alt={logo} />
            <h1>{name}</h1>

            {questions.map(quiz=> <QuizCard key={quiz.id} quiz ={quiz}></QuizCard>)}

        </div>
    );
};

export default QuizPage;