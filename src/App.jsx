

import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator/Calculator'
import Result from './components/Result/Result'

function App() {
  const [isAmt, setAmt] = useState();
  const [isType, setType] = useState();
  const [isIntRate, setIntRate] = useState();
  const [isTerm, setTerm] = useState();

  const getData = (amt, type, inr, trm) =>{
    setAmt(amt);
    setType(type);
    setIntRate(inr);
    setTerm(trm);
  }

  const MortData = [isAmt, isIntRate, isTerm, isType];


  return (
    <>
      <div className="container">
        <div className="wraper">
          <Calculator getData={getData}/>
          <Result mortData ={MortData}/>
        </div>
      </div>
    </>
  )
}

export default App
