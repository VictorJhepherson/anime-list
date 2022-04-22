import styled, { css } from 'styled-components';

export const FooterStyles = styled.footer`
  ${() => css`
    width: 100%;
    height: 80px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  `}
`;

export const Text = styled.p`
  ${() => css`
    font-size: 14px;
  `}
`;
