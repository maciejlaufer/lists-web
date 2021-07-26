import React from 'react';
import ListGroup from '../ListGroup/ListGroup';

const List: React.FC<{ list: any }> = ({ list }) => {
  return (
    <div>
      <div>List</div>
      {list.groups?.map(({ tasks, ...group }: any) => (
        <ListGroup key={group.id} group={group}>
          {tasks?.map((t: any) => (
            <div key={t.id}>{t.name}</div>
          ))}
        </ListGroup>
      ))}
    </div>
  );
};

export default List;
