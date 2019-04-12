import React from 'react';
import styles from './DashboardSection.module.scss';

import Heading from '../Heading/Heading';

const dashBoardSection = ({ classes, title }) => (
    <div className={[classes, styles.section].join(" ")}>
        <Heading type="small">{title}</Heading>
    </div>
);

export default dashBoardSection;