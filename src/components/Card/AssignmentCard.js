import React, { useState } from 'react';
import Card from "./Card";
import Checkbox from "./Checkbox";
import * as Information from "./Information";

const assignmentCard = ({ title, description="", margin, onClick, id }) => {
  const [checked, setChecked] = useState(false);

  const onCheckedHandler = (event) => setChecked(event.target.checked);

  return (
    <Card margin={margin} id={id} onClick={onClick}>
      <Checkbox checked={checked} onCheckedHandler={onCheckedHandler}/>
      <div>
        <Information.title>{title ? title : 'Untitled Assignment'}</Information.title>
        <Information.description>{description}</Information.description>
      </div>
    </Card>
  );
};

export default assignmentCard;
