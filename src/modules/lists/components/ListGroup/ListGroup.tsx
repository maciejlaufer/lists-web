import React, { useState } from 'react';

const ListGroup: React.FC<{ group: any }> = ({ group, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div onClick={() => setIsOpen((isOpen) => !isOpen)}>{group.name}</div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default ListGroup;
