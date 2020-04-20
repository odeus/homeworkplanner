import styled from 'styled-components';

import TextareaAutosize from 'react-textarea-autosize';

export default styled(TextareaAutosize)`
    border: none;
    outline: none;
    resize: none;
    background-color: transparent;
    padding: 1rem .5rem;
    font-size: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.lightAccent};
    width: 90%;
`;
