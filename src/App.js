import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StandardCalculator } from './components/StandardCalculator';
import  ScientificCalculator  from './components/ScientificCalculator';
import { DateCalculator } from './components/DateCalculator';
import { CurrencyConverter } from './components/CurrencyConverter';
import  VolumeConverter  from './components/VolumeConverter';
import  LengthConverter  from './components/LengthConverter';
import { WeightConverter } from './components/WeightConverter';
import  TemperatureConverter  from './components/TemperatureConverter';
import { theme, GlobalStyle } from './theme';
import styled from 'styled-components'; 


const NavLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  padding: 10px;
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.borderRadius};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-flow:row wrap;
  margin-bottom: 20px;
`;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <nav className="calculator-app">
        <Nav>
          <NavLink to="/">표준</NavLink>
          <NavLink to="/scientific">공학용</NavLink>
          <NavLink to="/date">날짜 계산</NavLink>
          <NavLink to="/currency">통화 환율</NavLink>
          <NavLink to="/volume">부피</NavLink>
          <NavLink to="/length">길이</NavLink>
          <NavLink to="/weight">무게 및 질량</NavLink>
          <NavLink to="/temperature">온도</NavLink>
        </Nav>
      </nav>
      <Routes>
        <Route exact path="/" element={<StandardCalculator />} />
        <Route path="/scientific" element={<ScientificCalculator />} />
        <Route path="/date" element={<DateCalculator />} />
        <Route path="/currency" element={<CurrencyConverter />} />
        <Route path="/volume" element={<VolumeConverter />} />
        <Route path="/length" element={<LengthConverter />} />
        <Route path="/weight" element={<WeightConverter />} />
        <Route path="/temperature" element={<TemperatureConverter />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
