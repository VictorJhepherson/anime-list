import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  `}
`;

export const ListAnime = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;
