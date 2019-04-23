import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.div`
  display: flex;
  position: ${props => !props.isFixed ? 'none' : 'sticky'};
  top: ${props => !props.allDay ? 0 : '6rem'};
  z-index: ${props => !props.isFixed ? 0 : 100};
  background-color: ${props => !props.side ? 'white' : props.theme.background};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  align-items: ${props => !props.hour ? 'center' : 'flex-start'};
  justify-content: ${props => !props.hour ? 'center' : 'flex-end'};
  font-size: 1.4rem;
  text-transform: uppercase;
  padding: 1rem;
  border-right: 1px solid ${props => props.theme.lightAccent};
  border-top: ${props => props.day ? `1px solid ${props.theme.lightAccent}` : 'none'};
  border-bottom: ${props => {
    if(props.hour || props.side) return 'none';
    return `2px solid ${lighten(.1, props.theme.lightAccent)}`;
  }}
`;
