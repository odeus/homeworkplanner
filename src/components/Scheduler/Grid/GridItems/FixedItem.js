import styled from 'styled-components';
import EmptyItem from './EmptyItem';

const FixedItem = styled(EmptyItem)`
  position: sticky;
  z-index: 100;
  top: ${(props) => (!props.allDay ? 0 : '6rem')};
`;

export const FixedSide = styled(FixedItem)`
  align-items: flex-start;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.background};
  border-bottom: none;
`;

export default FixedItem;
