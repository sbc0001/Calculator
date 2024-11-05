import React, { useState, useEffect, useMemo } from 'react';
import '../ComponentStyled/WeightConverter.css';

export const WeightConverter = () => {
    const [inputValue, setInputValue] = useState('0');
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('kilograms');
    const [toUnit, setToUnit] = useState('pounds');
    const [result, setResult] = useState('0');

    const conversionRates = useMemo(()=> ({
        kilograms: 1,
        pounds: 2.20462,
        grams: 1000,
        ounces: 35.274,
        tons: 0.001,
    }),[]);

    useEffect(() => {
        const fromRate = conversionRates[fromUnit];
        const toRate = conversionRates[toUnit];
        const convertedAmount = (parseFloat(amount) / fromRate) * toRate;
        setResult(convertedAmount.toFixed(4));
    }, [amount, fromUnit, toUnit, conversionRates]);

    const handleNumberClick = (num) => {
        setAmount(prev => prev === '0' ? num : prev + num);
    };

    const handleClear = () => {
        setAmount('0');
        setResult('0');
    };

    const handleBackspace = () => {
        setAmount(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
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
        <div className="converter weight-converter">
            <h2>무게 및 질량 변환기</h2>
            <button onClick={control} className='toggle'> dark </button>
            <div className="converter-body">
                <div className="input-group">
                    <input type="text" value={amount} readOnly className="converter-input" />
                    <select
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value)}
                        className="converter-select"
                    >
                        <option value="kilograms">킬로그램</option>
                        <option value="pounds">파운드</option>
                        <option value="grams">그램</option>
                        <option value="ounces">온스</option>
                        <option value="tons">톤</option>
                    </select>
                </div>
                <div className="input-group">
                    <input type="text" value={result} readOnly className="converter-input" />
                    <select
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value)}
                        className="converter-select"
                    >
                        <option value="kilograms">킬로그램</option>
                        <option value="pounds">파운드</option>
                        <option value="grams">그램</option>
                        <option value="ounces">온스</option>
                        <option value="tons">톤</option>
                    </select>
                </div>
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

export default WeightConverter;