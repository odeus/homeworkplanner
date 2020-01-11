import React from 'react';

import Section from './Section';
import Heading from '../Heading';

const dashBoardSection = ({ gridRow, title, children }) => (
    <Section row={gridRow}>
        <Heading.small>{title}</Heading.small>
        {children}
    </Section>
);

export default dashBoardSection;
