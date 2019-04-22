import styled from 'styled-components';

export default styled.div`
  display: flex;
  position: ${props => !props.isFixed ? 'none' : 'sticky'};
  top: ${props => !props.allDay ? 0 : '6rem'};
  background-color: ${props => props.theme.background};
  align-items: ${props => !props.hour ? 'center' : 'flex-start'};
  justify-content: ${props => !props.hour ? 'center' : 'flex-end'};
  font-size: 1.4rem;
  text-transform: uppercase;
  padding: ${props => !props.hour ? '1rem' : '1rem 1rem 1rem 1rem'};
  border-right: ${props => props.hour ? `1px solid ${props.theme.textColor}` : `1px solid ${props.theme.lightAccent}`};
  &:not(:last-child) {
    border-bottom: ${props => !props.hour ? `1px solid ${props.theme.lightAccent}` : 'none'}
  }
`;
