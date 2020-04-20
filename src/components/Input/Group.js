import styled from 'styled-components';

export default styled.div`
    padding: ${(props) => (props.padding ? props.padding : '2rem')}
`;
