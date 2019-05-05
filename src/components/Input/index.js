import React from 'react';

import Group from './Group';
import Input from './Input';

const input = (props) => (
    <Group>
      <Input {...props} />
    </Group>
);

export default input;
