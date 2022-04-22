import media from 'styled-media-query';
import { motion } from 'framer-motion';
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

export const Header = styled.header`
  ${() => css`
    width: 100%;
    height: 27rem;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;
  `}
`;

export const Content = styled(motion.div)`
  ${() => css`
    width: min(110rem, 100%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.medium};
  `}
`;

export const HeaderContent = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img:first-child {
      margin-top: calc(${theme.spacings.xxxlarge} * 2);
      ${media.lessThan('medium')`
        width : 30rem;
        height : 14.9rem;
        padding:  ${theme.spacings.medium} ${theme.spacings.medium} 0;
      `}
    }
  `}
`;

export const Button = styled.button`
  ${() => css`
    margin-top: 50px;
    width: 24.3rem;
    height: 4.8rem;
    padding: ${theme.spacings.small};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.spacings.small};
    outline: none;
    border: none;
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.medium};
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    &:hover {
      filter: brightness(115%);
      transform: scale(1.02);
    }
    background: linear-gradient(
      30deg,
      ${theme.colors.primary},
      ${theme.colors.secondary}
    );
    color: ${theme.colors.ternary};
  `}
`;
