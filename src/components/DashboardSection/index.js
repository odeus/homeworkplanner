import React from 'react';

import Section from './Section';
import Heading from '../Heading';

const dashBoardSection = ({ gridRow, title }) => (
    <Section row={gridRow}>
      <Heading.small>{title}</Heading.small>
    </Section>
);

export default dashBoardSection;
