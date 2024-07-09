import { PiCalculatorFill } from "react-icons/pi";
import { BiPound } from "react-icons/bi";
import { VscPercentage } from "react-icons/vsc";
import { useState } from "react";
import {} from 'prop-types';

const Calculator = ({getData}) => {
  const [isMortAmt, setMortAmt] = useState();
  const [isIntRate, setIntRate] = useState();
  const [isTerm, setTerm] = useState();
  const [isType, setType] = useState();

  const details = [isMortAmt, isTerm, isIntRate, isType];
  console.log(details);
  const clearDetails = () =>{
    setMortAmt("");
    setIntRate("");
    setTerm("");
    setType();
  }


  return (
    <>
      <div className="calculator">
        <div className="title">
          <p>Mortgage Calculator</p>
          <button onClick={clearDetails}>Clear All</button>
        </div>
        <form className="form" method="GET">
          <div className="form-box">
            <p>Mortgage Amount</p>
            <div className="inp-box">
              <span><BiPound /></span>
              <input type="number" className="inp-int" required onChange={(e) => {setMortAmt(e.target.value)}} value={isMortAmt}/>
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-sm">
              <p>Mortgage Term</p>
              <div className="inp-box">
                <input type="number" className="inp-int" required onChange={(e) => {setTerm(e.target.value)}} value={isTerm}/>
                <span>years</span>
              </div>
            </div>
            <div className="form-box-sm">
              <p>Interest Rate</p>
              <div className="inp-box">
                <input type="number" className="inp-int" required onChange={(e) => {setIntRate(e.target.value)}} value={isIntRate}/>
                <span><VscPercentage /></span>
              </div>
            </div>
          </div>
          <div className="form-box">
            <p>Mortgage Type</p>
            <div className="radio-box">
              <input type="radio" name="morttype" id="typerepay" required onChange={(e) => {setType(e.target.value)}} defaultValue="Repayment" value={isType}/>
              <label htmlFor="typerepay">Repayment</label>
            </div>
            <div className="radio-box">
              <input type="radio" name="morttype" id="typeint" required onChange={(e) => {setType(e.target.value)}} defaultValue="Interest Only" value={isType}/>
              <label htmlFor="typeint">Interest Only</label>
            </div>

          </div>
        </form>
        <div className="btn-wraper">
          <button onClick={() => {getData(isMortAmt, isType, isIntRate, isTerm)}}><PiCalculatorFill />  Calculate Repayments</button>
        </div>
      </div>
    </>
  )
}

Calculator.propTypes = {
  getData : Calculator.func,
}


export default Calculator