import React, { useState } from 'react';
import { evaluate, round } from 'mathjs';
import "../ComponentStyled/ScientificCalculator.css";

const ScientificCalculator = () => {
    const [display, setDisplay] = useState('0');
    //const [memory, setMemory] = useState(0);
    const [isRadians, setIsRadians] = useState(true);
  
    const buttons = [
        { label: 'MC', type: 'function' },
        { label: 'MR', type: 'function' },
        { label: 'M+', type: 'function' },
        { label: 'M-', type: 'function' },
        { label: 'MS', type: 'function' },
        { label: 'x²', type: 'function' },
        { label: 'x^y', type: 'function' },
        { label: 'sin', type: 'function' },
        { label: 'cos', type: 'function' },
        { label: 'tan', type: 'function' },
        { label: '√', type: 'function' },
        { label: '10^x', type: 'function' },
        { label: 'log', type: 'function' },
        { label: 'Exp', type: 'function' },
        { label: 'Mod', type: 'function' },
        { label: '↑', type: 'function' },
        { label: 'CE', type: 'function' },
        { label: 'C', type: 'function' },
        { label: '⌫', type: 'function' },
        { label: '÷', type: 'operator' },
        { label: 'π', type: 'function' },
        { label: '7', type: 'number' },
        { label: '8', type: 'number' },
        { label: '9', type: 'number' },
        { label: '×', type: 'operator' },
        { label: 'n!', type: 'function' },
        { label: '4', type: 'number' },
        { label: '5', type: 'number' },
        { label: '6', type: 'number' },
        { label: '-', type: 'operator' },
        { label: '±', type: 'function' },
        { label: '1', type: 'number' },
        { label: '2', type: 'number' },
        { label: '3', type: 'number' },
        { label: '+', type: 'operator' },
        { label: '(', type: 'function' },
        { label: ')', type: 'function' },
        { label: '0', type: 'number' },
        { label: '.', type: 'number' },
        { label: '=', type: 'equal' },
      ];
  
    const handleButtonClick = (value) => {
      switch (value) {
        case 'AC':
          setDisplay('0');
          break;
        case 'C':
          setDisplay(display.length > 1 ? display.slice(0, -1) : '0'); // 마지막 문자 삭제
          break;
        case 'CE':
          setDisplay('0'); // 현재 입력 초기화
          break;
        case '=':
          if (display && display !== '0') { // display가 비어있지 않으면
            try {
              // 공백 제거 후 수식 평가
              const cleanedDisplay = display.replace(/\s+/g, '');
              setDisplay(round(evaluate(cleanedDisplay), 8).toString());
            } catch (error) {
              setDisplay('Error');
            }
          }
          break;
        case 'sin':
        case 'cos':
        case 'tan':
          setDisplay(`${value}(${isRadians ? '' : 'deg'}${display})`);
          break;
        case 'log':
          setDisplay(`log10(${display})`);
          break;
        case 'ln':
          setDisplay(`log(${display})`);
          break;
        case '√':
          setDisplay(`sqrt(${display})`);
          break;
        case 'π':
          setDisplay(display === '0' ? 'pi' : display + 'pi');
          break;
        case 'e':
          setDisplay(display === '0' ? 'e' : display + 'e');
          break;
        case 'x^y':
          setDisplay(display + '^');
          break;
        case 'n!':
          setDisplay(`factorial(${display})`);
          break;
        case 'Rad':
          setIsRadians(true);
          break;
        case 'Deg':
          setIsRadians(false);
          break;
        default:
          setDisplay(display === '0' ? value : display + value);
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
      <div className="scientific-calculator">
        <div className="calculator-header">
          <h2 className="calculator-title">공학용</h2>
        </div>
        <button className='toggle' onClick={control}> dark </button>
        <div className="display">{display}</div>
        <div className="keypad">
          <div className="top-row">
            <button className="btn function">DEG</button>
            <button className="btn function">HYP</button>
            <button className="btn function">F-E</button>
          </div>
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(btn.label)}
              className={`btn ${btn.type}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

export default ScientificCalculator;