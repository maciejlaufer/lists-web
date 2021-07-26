import List from '../../components/List/List';
import React, { useState } from 'react';

const LIST = {
  groups: [
    {
      id: 1,
      name: 'Group1',
      tasks: [
        {
          id: 1,
          name: 'Test1',
        },
        {
          id: 2,
          name: 'Test2',
        },
      ],
    },
    {
      id: 2,
      name: 'Group2',
      tasks: [
        {
          id: 3,
          name: 'Test3',
        },
        {
          id: 4,
          name: 'Test4',
        },
      ],
    },
    {
      id: 3,
      name: 'Group3',
      tasks: [
        {
          id: 5,
          name: 'Test5',
        },
        {
          id: 6,
          name: 'Test6',
        },
      ],
    },
  ],
};

const ListView: React.FC = () => {
  const [list] = useState(LIST);
  return <List list={list} />;
};

export default ListView;
