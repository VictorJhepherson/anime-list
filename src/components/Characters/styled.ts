import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `}
`;
