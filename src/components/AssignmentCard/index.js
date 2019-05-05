import React, { useState } from 'react';

import Card from './Card';
import * as Information from './Information';
import Checkbox from './Checkbox';

const assignmentCard = ({ title, description="" }) => {
  const [checked, setChecked] = useState(false);

  const onCheckedHandler = (event) => setChecked(event.target.checked);

  return (
      <Card>
        <Checkbox checked={checked} onCheckedHandler={onCheckedHandler}/>
        <div>
          <Information.title>{title}</Information.title>
          <Information.description>{description}</Information.description>
        </div>
      </Card>
  );
};

export default assignmentCard;
