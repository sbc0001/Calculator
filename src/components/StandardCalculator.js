import React, { useState } from 'react';
import styled from 'styled-components';
import '../ComponentStyled/StandardCalculator.css';

const CalculatorContainer = styled.div``;

const Display = styled.div``;

const History = styled.div``;

const CurrentValue = styled.div``;

const ButtonGrid = styled.div``;

const Button = styled.button``;

const EqualsButton = styled(Button)``;

export const StandardCalculator = () => {
    const [display, setDisplay] = useState('0');
    const [history, setHistory] = useState('');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [shouldResetDisplay, setShouldResetDisplay] = useState(false);
  
    const handleNumberClick = (number) => {
      if (shouldResetDisplay) {
        setDisplay(number);
        setShouldResetDisplay(false);
      } else {
        setDisplay(display === '0' ? number : display + number);
      }
    };
  
    const handleOperationClick = (op) => {
      if (previousValue !== null) {
        handleEqualClick();
      }
      setPreviousValue(parseFloat(display));
      setOperation(op);
      setHistory(`${display} ${op}`);
      setShouldResetDisplay(true);
    };
  
    const handleEqualClick = () => {
      if (operation === null || previousValue === null) return;
  
      const current = parseFloat(display);
      let result;
      switch (operation) {
        case '+': result = previousValue + current; break;
        case '-': result = previousValue - current; break;
        case '×': result = previousValue * current; break;
        case '÷': result = previousValue / current; break;
        default: return;
      }
  
      setHistory(`${previousValue} ${operation} ${current} =`);
      setDisplay(result.toString());
      setPreviousValue(null);
      setOperation(null);
      setShouldResetDisplay(true);
    };
  
    const handleClearEntry = () => {
      setDisplay('0');
    };
  
    const handleClear = () => {
      setDisplay('0');
      setHistory('');
      setPreviousValue(null);
      setOperation(null);
    };
  
    const handleBackspace = () => {
      setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
    };
  
    const handlePercent = () => {
      const current = parseFloat(display);
      setDisplay((current / 100).toString());
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
    <CalculatorContainer className='CalculatorContainer'>
      <h3>표준 계산기</h3>
      <button onClick={control} className='toggle'> dark </button>
      <Display className='Display'>
        <History className='History'>{history}</History>
        <CurrentValue className='CurrentValue'>{display}</CurrentValue>
      </Display>
      <ButtonGrid className='ButtonGrid'>
        <Button onClick={handlePercent} className='Button'>%</Button>
        <Button onClick={handleClearEntry} className='Button'>CE</Button>
        <Button onClick={handleClear} className='Button'>C</Button>
        <Button onClick={handleBackspace} className='Button'>⌫</Button>

        <Button onClick={() => handleOperationClick('1/x')} className='Button'>1/x</Button>
        <Button onClick={() => handleOperationClick('x²')} className='Button'>x²</Button>
        <Button onClick={() => handleOperationClick('√')} className='Button'>√</Button>
        <Button variant="operator" onClick={() => handleOperationClick('÷')} className='operator'>÷</Button>

        <Button onClick={() => handleNumberClick('7')} className='Button'>7</Button>
        <Button onClick={() => handleNumberClick('8')} className='Button'>8</Button>
        <Button onClick={() => handleNumberClick('9')} className='Button'>9</Button>
        <Button variant="operator" onClick={() => handleOperationClick('×')} className='operator'>×</Button>

        <Button onClick={() => handleNumberClick('4')} className='Button'>4</Button>
        <Button onClick={() => handleNumberClick('5')} className='Button'>5</Button>
        <Button onClick={() => handleNumberClick('6')} className='Button'>6</Button>
        <Button variant="operator" onClick={() => handleOperationClick('-')} className='operator'>-</Button>

        <Button onClick={() => handleNumberClick('1')} className='Button'>1</Button>
        <Button onClick={() => handleNumberClick('2')} className='Button'>2</Button>
        <Button onClick={() => handleNumberClick('3')} className='Button'>3</Button>
        <Button variant="operator" onClick={() => handleOperationClick('+')} className='operator'>+</Button>

        <Button onClick={() => handleOperationClick('+/-')} className='Button'>+/-</Button>
        <Button onClick={() => handleNumberClick('0')} className='Button'>0</Button>
        <Button onClick={() => handleNumberClick('.')} className='Button'>.</Button>
        <EqualsButton onClick={handleEqualClick} className='EqualsButton'>=</EqualsButton>
      </ButtonGrid>
    </CalculatorContainer>
  );
};

export default StandardCalculator;