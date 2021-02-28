import React from 'react';

interface BuilderItemProps {
  order: number;
  itemType: string;
  onOpenSearch?: any;
}

const BuilderItem: React.FC<BuilderItemProps> = (props) => (
  <li className="BuilderItem" onClick={() => props.onOpenSearch() }>
    <i className="BuilderItem__order">
      {props.order}
    </i>
    <div className="BuilderItem__wrap">
      Choose {props.itemType}
    </div>
  </li>
);

export default BuilderItem;
