import React from 'react';
import styled from 'styled-components';
import EmptyItem from './EmptyItem';

export const Wrapper = styled(EmptyItem)`
  align-items: flex-start;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.background};
  border-bottom: none;
  position: relative;
  z-index: 51;
`;

export const Span = styled.span`
  position: absolute;
  top: -1rem;
`;

export default ({ hour }) => (
    <Wrapper>
        <Span>{hour}</Span>
    </Wrapper>
);
