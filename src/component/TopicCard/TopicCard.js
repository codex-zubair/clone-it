import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopicCard.css';

const TopicCard = ({topic}) => {

    const navigate = useNavigate();


    // Destructuring Properties From Topic
     const {logo,name,id} = topic;

     const naviGateToQuizPage = (id)=>
     {
        navigate(`/quiz/${id}`);
     }

    return (
        <div>
            <img className='bg-black'  src={logo} alt={logo} />
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <button onClick={()=> naviGateToQuizPage(id)} className='quiz-button'>Take Quiz</button>
        </div>
    );
};

export default TopicCard;