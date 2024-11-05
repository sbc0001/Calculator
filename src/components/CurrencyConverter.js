import React, { useState, useEffect } from 'react';
import '../ComponentStyled/CurrencyConverter.css';

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState('0');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(1.1);
  const [convertedAmount, setConvertedAmount] = useState('0');

  useEffect(() => {
  const exchangeRates = {
    KRW: { USD: 1 / 1357.60, EUR: 1483.30 / 1357.60, JPY: 908.67 / 1357.60, GBP: 1772.83 / 1357.60 },
    USD: { KRW: 1357.60, JPY: 908.67, EUR: 1483.30, GBP: 1772.83 },
    EUR: { USD: 1 / 1483.30, JPY: 908.67 / 1483.30, KRW: 1357.60 / 1483.30, GBP: 1772.83 / 1483.30 },
    JPY: { USD: 1 / 908.67, EUR: 1483.30 / 908.67, KRW: 1357.60 / 908.67, GBP: 1772.83 / 908.67 },
    GBP: { USD: 1 / 1772.83, EUR: 1483.30 / 1772.83, JPY: 908.67 / 1772.83, KRW: 1357.60 / 1772.83 },
  };

    if (fromCurrency && toCurrency) {
      setExchangeRate(exchangeRates[fromCurrency][toCurrency]);
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    const converted = (parseFloat(amount) * exchangeRate).toFixed(2);
    setConvertedAmount(converted);
  }, [amount, exchangeRate]);

  const handleNumberClick = (num) => {
    setAmount(prev => prev === '0' ? num : prev + num);
  };

  const handleClear = () => {
    setAmount('0');
    setConvertedAmount('0');
  };

  const handleBackspace = () => {
    setAmount(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
  };

  const currencies = ['USD', 'KRW', 'JPY', 'EUR', 'GBP'];

  
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
    <div className="currency-converter">
      <h2>통화 변환기</h2>
      <button className='toggle' onClick={control}> dark </button>
      <div className="converter-body">
        <div className="input-group">
          <input type="text" value={amount} readOnly className="converter-input" />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="currency-select"
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <input type="text" value={convertedAmount} readOnly className="converter-input" />
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="currency-select"
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div className="keypad">
          {[7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={handleBackspace}>⌫</button>
          {[ 4, 5, 6].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={() => handleNumberClick('.')}>.</button>
          {[1, 2, 3].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={handleClear}>C</button>
          {[0].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;