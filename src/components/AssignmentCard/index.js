import React, { useState } from 'react';

import Card from './Card';
import * as Information from './Information';
import Checkbox from './Checkbox';
import CardsWrapper from './CardsWrapper';

const assignmentCard = ({ title, description="", margin }) => {
  const [checked, setChecked] = useState(false);

  const onCheckedHandler = (event) => setChecked(event.target.checked);

  return (
      <Card margin={margin}>
        <Checkbox checked={checked} onCheckedHandler={onCheckedHandler}/>
        <div>
          <Information.title>{title}</Information.title>
          <Information.description>{description}</Information.description>
        </div>
      </Card>
  );
};

export default assignmentCard;

export const Wrapper = CardsWrapper;