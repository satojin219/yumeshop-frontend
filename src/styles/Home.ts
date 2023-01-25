import styled from 'styled-components';
import { colors } from './Tokens';

export const TokenTest = styled.div`
  background: ${colors.YumeGreen};
`;

export const Container = styled.div`
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
  @media (min-width: 1152px) {
    padding: 0 64px;
  }
`;

export const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;
