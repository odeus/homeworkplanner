import styled from 'styled-components';

import Input from '../../components/Input';
import AssignmentInfo from '../../components/AssignmentInfo/Wrapper';
import { Wrapper as CardWrapper } from '../../components/Card';

export default styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: min-content 1fr;
  flex-grow: 1;
  
  ${Input} {
    grid-column: 1 / 2;
  }
  
  ${CardWrapper} {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  
  ${AssignmentInfo} {
    grid-column: 2 / 3;
    grid-row: 1 / -1;
  }
`;
