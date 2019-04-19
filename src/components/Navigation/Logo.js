import styled from 'styled-components';

export const img = styled.img.attrs(props => ({
  src: props.link,
  alt: props.alt
}))`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  justify-self: self-start;
`;

export const wrapper = styled.div`
  justify-self: center;
  flex-grow: .1;
`;
