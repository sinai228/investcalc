import { useState } from 'react' 
import TradingViewWidget from './components/Banner'
import './App.css'

 


function App() {
  // const [count, setCount] = useState(0);
  const [rate, setRate] = useState('');
  const [investment, setInvestment] = useState('');
  const [income, setIncome] = useState('');
  const [toggleMsg, setToggleMsg] = useState(false);
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [toggleErrorMsg, setToggleErrorMsg] = useState(true);

  
  // const areAllStatesFilled = rate && investment && income; 
  // const noStatesFilled = !rate && !investment && !income;  
  const twoStatesFilled = () => {
    const filledStates = [rate, investment, income].filter(state => state !== ''); 
    return filledStates.length === 2
  };
  
  const onClickHander = () =>{ 
    // {areAllStatesFilled && setToggleErrorMsg(!toggleErrorMsg)}
    // {areAllStatesFilled && setErrorMsg('Please only fill two fields.') }
    // {noStatesFilled && setErrorMsg('Please fill two fields to calculate') }
    {!twoStatesFilled() && setErrorMsg('Please fill exactly two fields in order to calculate.') }
    {!twoStatesFilled() && toggleErrorMsg && setToggleErrorMsg(!toggleErrorMsg)} 
    {twoStatesFilled() && !toggleMsg && setToggleMsg(!toggleMsg);}

    if (!rate ) {   
      setMsg('Your yield rate must be ' + (String(+income/+investment*100)) + '%' )
    }
    else if (!investment ) {  
      setMsg( 'Your initial investment must be $' + String(+income/(+rate/100)))
    }
    else {
      setMsg( 'Your monthly passive income is $' + String(+investment*(+rate/100)))
    }

  }

  return (
    <>
    <div className='fixed-header'>
      <TradingViewWidget/>
    </div>
     
      <h1>Investment Calculator</h1>
      <div className='inputs'>
        <p>Enter any 2 fields below</p> 
        <div>
         <label className='title'>Yield</label>
         <input
         type = "number"
         value = {rate}
         placeholder='0.0%'
         onChange={(e) => setRate(e.target.value)}></input>  
         <label className='subtitle'> Please enter yield in estimated percentage</label> 
         </div>
         <div>
         <label className='title'>  Investment Amount</label>
         <input 
         type='number'
         value = {investment}
         placeholder='$10000'
         onChange={(e) => setInvestment(e.target.value)}></input>  
         <label className='subtitle'>Enter initial investment</label>  
         </div>
         <div> 
         <label className='title'> Passive Income (Monthly)</label>
         <input
        //  type = "number"
         value = {income}
         placeholder='$100'
         onChange={(e) => setIncome(e.target.value)}></input>  
         <label className='subtitle'> Monthly passive income in dollars</label>  
         </div> 
      </div>


      {!toggleErrorMsg &&   
       <p className='errormsg'> Error: {errorMsg} </p>
        }
 
     
        <button onClick={() => onClickHander()}>
        {/* <button onClick={() => setToggleMsg(!setToggleMsg)}> */}
        {/* {!toggleMsg ? "Calculate" : "Reset"  } */}
        Calculate
        </button> 
      <div className='message'> 
        {toggleMsg && //!toggleErrorMsg &&
          <div className='message'>    
          {msg}
          {/* {!income && <p>Your monthly passive income is {income}   </p>} 
          {!rate  && <p>  Your yield must be {rate}. </p>      }
          {!investment && <p>  Your initial investment must be {investment}.  </p> } */}
        </div> 

      }
 </div> 
      <div className="card"> 
        <p>
          Click <a href='https://www.tradingview.com/screener/'>Tradeview</a> to learn more 
        </p>
      </div>
 
    </>
  )
}

export default App
