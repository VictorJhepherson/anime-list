import styled, { css } from 'styled-components';

export const Chopper = styled.img`
  ${() => css`
    animation: is-rotating 1s infinite;
    width: 280px;
    height: 280px;
    margin: auto;
    margin-top: 150px;
    display: block;

    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  `}
`;

export const ChopperMini = styled.img`
  ${() => css`
    animation: is-rotating 1s infinite;
    width: 80px;
    height: 80px;
    margin: auto;
    display: block;

    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  `}
`;
