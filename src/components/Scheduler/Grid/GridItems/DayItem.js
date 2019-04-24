import React from 'react';
import styled from 'styled-components';
import FixedItem from './FixedItem';

export const Wrapper = styled(FixedItem)`
  border-top: 1px solid ${props => props.theme.lightAccent};
`;

export const Span = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
`;

export default ({ day }) => {
  const dayArray = day.split(' '); // Receives day in for example: 23 tue, so we need to split it
  return (
      <Wrapper>
        <Span>{dayArray[0]}</Span>
        &nbsp;{dayArray[1]}
      </Wrapper>
  )
};
