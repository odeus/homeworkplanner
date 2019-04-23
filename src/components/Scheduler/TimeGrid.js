import styled from 'styled-components';
import { TOOLBAR_HEIGHT } from "./Toolbar";

export default styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: .8fr repeat(7, 1fr);
  grid-template-rows: repeat(26, minmax(min-content, 6rem));
  max-height: calc(100vh - ${TOOLBAR_HEIGHT});
  overflow-y: scroll;
`;
