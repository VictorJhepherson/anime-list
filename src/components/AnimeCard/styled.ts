import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0.3rem;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Card = styled.div`
  ${() => css`
    position: relative;
    width: 400px;
    height: 215px;
    border: 1px solid ${theme.colors.darkBlue};
    background: ${theme.colors.white};
    display: flex;
  `}
`;

export const CardType = styled.span`
  ${() => css`
    width: 4rem;
    color: #333;
    text-align: center;
    padding: 0.3rem;
    font-weight: 700;
    position: absolute;
    border-radius: 10px 0 0 0;
    bottom: 30px;
    right: 0;

    &.anime {
      background-color: ${theme.typeColors.anime};
    }
    &.movie {
      background-color: ${theme.typeColors.movie};
    }
  `}
`;

export const CardId = styled.span`
  ${() => css`
    width: 3.7rem;
    color: ${theme.colors.gray};
    transform: rotate(5deg);
    padding: 0.3rem;
    font-weight: 700;
    position: absolute;
    border-radius: 0 0 10px 0;
    top: 0;
    right: 0;
  `}
`;

export const CardStatus = styled.span`
  ${() => css`
    width: 6rem;
    color: #333;
    text-align: center;
    padding: 0.1rem;
    font-weight: 700;
    position: absolute;
    border-radius: 10px 0 0 0;
    bottom: 0;
    right: 0;

    &.finished {
      background-color: ${theme.colors.success};
    }
    &.current {
      background-color: ${theme.colors.warning};
    }
  `}
`;

export const CardImg = styled.img`
  ${() => css`
    width: 30%;
    height: 100%;
  `}
`;

export const CardInfo = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 160px;
    padding: 15px;
  `}
`;

export const CardName = styled.h1`
  ${() => css`
    padding: 1rem;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
    width: 250px;
    color: ${theme.colors.darkBlue};
  `}
`;

export const CardDetails = styled.span`
  ${() => css`
    margin-top: 20px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    color: ${theme.colors.gray};
  `}
`;
