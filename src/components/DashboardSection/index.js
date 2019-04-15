import React from 'react';

import Section from './Section';
import Heading from '../Heading';

const dashBoardSection = ({ classes, title }) => (
    <Section className={classes}>
      <Heading.small>{title}</Heading.small>
    </Section>
);

export default dashBoardSection;
