import React from 'react'
import styles from './EntityList.scss'

const EntityList = ({ entityIds, onListScroll, entity }) => {
  const Entity = entity

  return (
    <section className={styles['list']} onScroll={onListScroll}>
      {entityIds.map(entityId => <Entity key={entityId} entityId={entityId}/>)}
    </section>
  )
}

export default EntityList