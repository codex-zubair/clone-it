import { useState } from "react";
import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const QUizOption = ({option,setAnswer,correctAnswer}) => {


    const [buttonState,setButtonState] = useState(null);


    // Toast!
    const notify = (answer) => toast(answer, {
        position: toast.POSITION.TOP_CENTER, autoClose: 500 
            
      });





    const checkAnswer= ()=> 
    {
        if(option === correctAnswer)
        {
            console.log(true);
            setButtonState(true);
            notify('Correct Answer!');
        
        }

        else
        {
            console.log(false);
            setButtonState(false);
            notify('Wrong Answer!');
        }
    }






    
    return (
        <button onClick={()=> checkAnswer()}  className={` m-2 p-2  hover:bg-slate-200 bg-slate-100 ${buttonState? 'bg-lime-200': ''}`}>
            {option}
   
        </button>


    );
};

export default QUizOption;