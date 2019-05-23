import React from 'react';
import Card from "./Card";
import * as Information from "./Information";

const classCard = ({ title, when="", margin }) => {
  return (
      <Card margin={margin}>
        <div>
          <Information.title>{title}</Information.title>
          <Information.description>{when}</Information.description>
        </div>
      </Card>
  );
};

export default classCard;
