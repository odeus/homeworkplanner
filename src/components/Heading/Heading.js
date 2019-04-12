import React from 'react';
import styles from './Heading.module.scss';

const heading = ({ children, type = 'large', weight }) => {
  const classes = [styles.header, styles[type]];
  if(weight) classes.push(styles[weight]);

  switch(type) {
    case 'large':
      return <h1 className={classes.join(' ')}>{children}</h1>;
    case 'medium':
      return <h2 className={classes.join(' ')}>{children}</h2>;
    case 'small':
      return <h3 className={classes.join(' ')}>{children}</h3>;
    default:
      return <h1 className={classes.join(' ')}>{children}</h1>;
  }
};

export default heading;