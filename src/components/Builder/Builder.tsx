import React from 'react'

import BuilderItem from './BuilderItem'

interface BuilderProps {
  onOpenSearch?: any;
  items?: any[];
}

const Builder: React.FC<BuilderProps> = (props) => {
  const chartList = props.items && props.items.map((item, i) => {
    return (
      <BuilderItem
        onOpenSearch={() => props.onOpenSearch()}
        order={i + 1}
        itemType="rapper"
      />
    )
  })
  return (
    <div className="Builder">
      <h1 className="Builder__title">
        Top 5 Rappers Of All Time
      </h1>
      <ol className="unstyled">
        {chartList}
      </ol>
    </div>
  )
};

export default Builder
