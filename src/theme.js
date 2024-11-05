import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    background: 'rgba(243, 243, 243, 0.8)',
    primary: '#0067C0',
    secondary: '#CCE4F7',
    text: '#000000',
    buttonText: '#FFFFFF',
  },
  fonts: {
    body: '"Segoe UI", sans-serif',
  },
  borderRadius: '8px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.background};
    margin: 0;
    padding: 0;
  }
`;