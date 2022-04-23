import media from 'styled-media-query';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const Header = styled.header`
  ${() => css`
    width: 100%;
    min-height: 650px;
    background: ${theme.colors.white};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 20px;
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
    height: 300px;
    display: flex;
    position: relative;
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
    h2 {
      margin-top: calc(${theme.spacings.xxxlarge} * 9);
    }
  `}
`;

export const PosterImage = styled.img`
  ${() => css`
    position: absolute;
    left: 100px;
    width: 220px;
    height: 300px;
    border: 1px solid ${theme.colors.primary};
  `}
`;

export const AvarageContainer = styled.div`
  ${() => css`
    position: absolute;
    left: 100px;
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`;

export const AvaregeRating = styled.h2`
  ${() => css`
    text-align: center;
    font-size: 32px;

    span:first-child {
      color: ${theme.colors.darkBlue};
    }

    span {
      color: ${theme.colors.empty};
    }
  `}
`;

export const Status = styled.span`
  ${() => css`
    width: 8rem;
    color: #333;
    text-align: center;
    padding: 0.1rem;
    font-weight: 700;
    border-radius: 10px 0 10px 0;
    margin-bottom: 15px;

    &.finished {
      background-color: ${theme.colors.success};
    }
    &.current {
      background-color: ${theme.colors.warning};
    }
  `}
`;

export const Type = styled.span`
  ${() => css`
    width: 8rem;
    color: #333;
    text-align: center;
    padding: 0.1rem;
    font-weight: 700;
    border-radius: 10px 0 10px 0;
    margin-bottom: 15px;

    &.anime {
      background-color: ${theme.typeColors.anime};
    }
    &.movie {
      background-color: ${theme.typeColors.movie};
    }
  `}
`;

export const SubType = styled.span`
  ${() => css`
    width: 8rem;
    color: #333;
    text-align: center;
    padding: 0.1rem;
    font-weight: 700;
    border-radius: 10px 0 10px 0;
    margin-bottom: 15px;

    &.movie {
      background-color: ${theme.typeColors.movie};
    }
    &.music {
      background-color: ${theme.typeColors.music};
    }
    &.special {
      background-color: ${theme.typeColors.special};
    }
    &.ONA {
      background-color: ${theme.typeColors.ONA};
    }
    &.OVA {
      background-color: ${theme.typeColors.OVA};
    }
    &.TV {
      background-color: ${theme.typeColors.TV};
    }
  `}
`;

export const ContainerInfo = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Info = styled.div`
  ${() => css`
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;
  `}
`;

export const Title = styled.h1`
  ${() => css`
    color: ${theme.colors.darkBlue};
  `}
`;

export const TitleJapan = styled.h1`
  ${() => css`
    font-size: 18px;
    color: ${theme.colors.darkBlue};
    margin-top: -10px;
    margin-bottom: 20px;
  `}
`;

export const Description = styled.p`
  ${() => css`
    font-size: 18px;
    color: ${theme.colors.gray};
  `}
`;

export const ContainerTitle = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
  `}
`;

export const ContentTitle = styled.div`
  ${() => css`
    width: 45%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${theme.colors.transparent};

    h2 {
      border-left: calc(5px + 0.1em) solid ${theme.colors.empty};
      color: ${theme.colors.darkBlue};
      font-size: 32px;
      padding: 10px;
    }
  `}
`;

export const Middle = styled.div`
  ${() => css`
    width: 100%;
    background: ${theme.colors.transparent};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  `}
`;

export const ContentCharacters = styled.div`
  ${() => css`
    width: 95.6%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${theme.colors.white};
    padding: 25px;
  `}
`;

export const Footer = styled.div`
  ${() => css`
    width: 100%;
    background: ${theme.colors.transparent};
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  `}
`;

export const ContentAbout = styled.div`
  ${() => css`
    width: 45%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${theme.colors.white};
    padding: 25px;

    dl {
      width: 100%;
    }

    dt {
      width: 100%;
      font-size: 20px;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.darkBlue};
      margin-bottom: 10px;
      padding: 10px;
      border-top: 0.5px solid ${theme.colors.empty};

      &:first-child {
        border-top: 0 solid ${theme.colors.empty};
      }
    }

    dd {
      width: 100%;
      font-size: 16px;
      color: ${theme.colors.gray};
      margin-bottom: 30px;
    }

    dd:last-child {
      margin-bottom: 0;
    }

    span {
      width: 100%;
      font-size: 16px;
      color: ${theme.colors.gray};
      margin-bottom: 30px;
    }
  `}
`;
