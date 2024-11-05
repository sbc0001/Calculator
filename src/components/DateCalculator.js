import React, { useState } from 'react';
import '../ComponentStyled/DateCalculator.css';

export const DateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState('');

  const calculateDifference = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.abs(end - start);
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    setResult(`${days} 일`);
  };
  
  const toggleBtn=document.querySelectorAll('button');
    const toggleBg=document.querySelectorAll('div');
    const control=()=>{
      const Toggle=()=>{
      toggleBtn.forEach((e)=>{
        if(e.classList.contains('on') === true){
          e.classList.remove('on');
        }else{
          e.classList.add('on');
        };
      })
    }
    const ToggleDiv=()=>{
      toggleBg.forEach((e)=>{
        if(e.classList.contains('on') === true){
          e.classList.remove('on');
        }else{
          e.classList.add('on');
        }
      })
    }
    Toggle();
    ToggleDiv();
    }

  return (
    <div className="date-calculator">
      <h2>날짜 계산기</h2>
      <button onClick={control} className='toggle'> dark </button>
      <div className="input-container">
        <div className="input-group">
          <label>시작 날짜</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>종료 날짜</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <button onClick={calculateDifference}>차이 계산</button>
      <div className="result">{result}</div>
    </div>
  );
};

export default DateCalculator;