import styled from 'styled-components';
import { lighten } from 'polished/lib/index';

export default styled.div`
  display: flex;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  background-color: white;
  font-size: 1.4rem;
  text-transform: uppercase;
  padding: 1rem;
  border-right: 1px solid ${props => props.theme.lightAccent};
  border-bottom: 2px solid ${props => lighten(.1, props.theme.lightAccent)};
`;
