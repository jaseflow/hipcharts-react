import React from 'react'

import BuilderItem from './BuilderItem'

interface BuilderProps {
  onOpenSearch?: any;
}

const Builder: React.FC<BuilderProps> = (props) => (
  <div className="Builder">
    <h1 className="Builder__title">
      Top 5 Rappers Of All Time
    </h1>
    <ol className="unstyled">
      <BuilderItem onOpenSearch={() => props.onOpenSearch()} order={1} itemType="rapper" />
      <BuilderItem onOpenSearch={() => props.onOpenSearch()} order={2} itemType="rapper" />
      <BuilderItem onOpenSearch={() => props.onOpenSearch()} order={3} itemType="rapper" />
      <BuilderItem onOpenSearch={() => props.onOpenSearch()} order={4} itemType="rapper" />
      <BuilderItem onOpenSearch={() => props.onOpenSearch()} order={5} itemType="rapper" />
    </ol>
  </div>
);

export default Builder
