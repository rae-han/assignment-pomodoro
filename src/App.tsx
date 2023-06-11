import './styles/reset.scss';
import './styles/global.scss';

import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';

import Home from './pages/Home.tsx';

const GlobalStyle = createGlobalStyle`  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: linear-gradient(180deg, #747bff, #535bf2);
    color: var(--c-text);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Home />
      </RecoilRoot>
    </>
  );
}

export default App;
