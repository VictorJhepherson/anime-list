import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const Section = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 25px;
    background: transparent;
  `}
`;

export const Content = styled(motion.div)`
  ${() => css`
    width: min(110rem, 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.medium};
  `}
`;

export const SearchContent = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease-in-out;

    button:hover {
      transform: scale(1.2);
    }
  `}
`;

export const Input = styled.input`
  ${() => css`
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.ternary};
    width: 60%;
    background-color: ${theme.colors.white};
  `}
`;
