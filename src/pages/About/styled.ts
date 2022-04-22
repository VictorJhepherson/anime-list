import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  ${() => css`
    min-width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: url('/img/bgAnime-1.svg') no-repeat center center fixed;
    background-color: ${theme.colors.white};
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
  `}
`;
