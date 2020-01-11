/* eslint jsx-a11y/label-has-associated-control: "off" */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Checkmark } from '../../assets/checkmark.svg';


const opacityAnimation = () => keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const StyledCheckBox = styled.div`
  width: 2rem;
  height: 2rem;
  border: 2px solid ${(props) => props.theme.textColor};
  cursor: pointer;
  transition: all .2s;
  margin-right: 1.5rem;
  position: relative;
`;

const Check = styled(Checkmark)`
  position: absolute;
  width: 100%;
  height: 100%;
  fill: white;
  animation: ${(props) => opacityAnimation(props)} .2s ease-out forwards;
  background-color: ${(props) => props.theme.textColor};
  display: ${(props) => (props.checked ? 'block' : 'none')};
`;

const NativeCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;


const checkbox = ({ checked, onCheckedHandler }) => (
    <div>
        <label>
            <NativeCheckbox checked={checked} onChange={onCheckedHandler} />
            <StyledCheckBox checked={checked}>
                <Check checked={checked} />
            </StyledCheckBox>
        </label>
    </div>
);

export default checkbox;
