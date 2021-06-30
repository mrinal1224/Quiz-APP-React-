
import { useState } from 'react';
import './app.css'



function App() {
  const quesArray=[
    {id:1 , amount:1000} , 
    {id:2 , amount:2000},
    {id:3 , amount:5000},
    {id:4 , amount:10000},
    {id:5 , amount:25000},
    {id:6 , amount:50000},
    {id:7 , amount:100000},
    {id:8, amount:200000},
    {id:9, amount:200000},
    {id:10, amount:200000},
  ]

  


  const[questionNumber , setQuestionNumber] = useState(1)
  return (
    
      <div className='app'>
        <div className="main">
       
        </div>
        <div className="pyramid">
          <ul className='moneylist'>
            {
              quesArray.map((ques) =>(
                  <li className={questionNumber=== ques.id ? "moneylistItem active" :'moneylistItem'}>
                <span className='moneylistnumber'>{ques.id}</span> <span className='moneylistamount'>Rs.{ques.amount}</span>
               </li>

              )).reverse()
            }
          
             
            
          
             
              
          </ul>
        
        </div>

      </div>
    
  );
}

export default App;
