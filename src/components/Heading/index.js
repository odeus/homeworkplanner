import styled, { css } from 'styled-components';

// Define mapping for the weight values
const weights = {
  bold: 700,
  thin: 300
};

export const large = styled.h1`
  font-size: 5rem;
  font-family: ${props => props.theme.headerFont}

  ${props => props.weight && css`
    font-weight: ${props.weight};
  `}
`;

export const medium = styled.h2`
  font-size: 3rem;
  font-family: ${props => props.theme.headerFont}
  
  ${props => props.weight && css`
    font-weight: ${weights[props.weight]};  
  `}
`;

export const small = styled.h3`
  font-size: 1.8rem;
  font-family: ${props => props.theme.headerFont}
  
  ${props => props.weight && css`
    font-weight: ${weights[props.weight]};  
  `}
`;

export default { large, small, medium }
