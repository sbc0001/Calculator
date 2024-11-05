import React, { useState, useEffect, useMemo } from 'react';
import '../ComponentStyled/LengthConverter.css';

const LengthConverter = () => {
    const [inputValue, setInputValue] = useState('0');
    const [fromUnit, setFromUnit] = useState('미터');
    const [toUnit, setToUnit] = useState('피트');
    const [result, setResult] = useState('0');
  
    const conversionRates = useMemo(()=> ({
      미터: 1,
      피트: 3.28084,
      인치: 39.3701,
      킬로미터: 0.001,
      마일: 0.000621371,
    }),[]);
  
    const units = Object.keys(conversionRates);
  
    useEffect(() => {
      
      const fromRate = conversionRates[fromUnit];
      const toRate = conversionRates[toUnit];
      const convertedAmount = (parseFloat(inputValue) / fromRate) * toRate;
      setResult(convertedAmount.toFixed(6));
    }, [inputValue, fromUnit, toUnit,conversionRates]);
  
    const handleNumberClick = (num) => {
      setInputValue(prev => prev === '0' ? num : prev + num);
    };
  
    const handleClear = () => {
      setInputValue('0');
      setResult('0');
    };
  
    const handleBackspace = () => {
      setInputValue(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
    };
  
    const handleSwapUnits = () => {
      setFromUnit(toUnit);
      setToUnit(fromUnit);
    };

    const handleDecimal = () => {
      if (!inputValue.includes('.')) {
        setInputValue((prev) => prev + '.');
      }
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
      <div className="length-converter">
        <h2>길이 변환기</h2>
        <button onClick={control} className='toggle'> dark </button>
        <div className="converter-body">
          <div className="input-group">
            <input type="text" value={inputValue} readOnly className="converter-input" />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="unit-select"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <input type="text" value={result} readOnly className="converter-input" />
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="unit-select"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
          <button onClick={handleSwapUnits} className="swap-button">단위 교환</button>
          <div className="keypad">
          {[7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>{num}</button>
          ))}
          <button onClick={handleBackspace}>⌫</button>
          {[4, 5, 6].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>{num}</button>
          ))}
          <button onClick={handleDecimal}>.</button>
          {[1, 2, 3,].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>{num}</button>
          ))}
          <button onClick={handleClear}>C</button>
          {[0].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>{num}</button>
          ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default LengthConverter;