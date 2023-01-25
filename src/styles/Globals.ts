import { createGlobalStyle } from 'styled-components';
import { fonts } from './Tokens';
import 'ress';

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.NotoSansJP};
    line-height: 1.5;
    background-color: #eeffee;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  section{
    margin-top: 64px;
  }

  * {
    box-sizing: border-box;
  }
`;
