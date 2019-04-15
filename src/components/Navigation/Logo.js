import styled from 'styled-components';

export default styled.img.attrs(props => ({
  src: props.link,
  alt: props.alt
}))`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;
