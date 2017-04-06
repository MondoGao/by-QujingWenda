import React from 'react'
import styles from './EntityList.scss'
import QuestionItemContainer from 'containers/QuestionItemContainer'

const EntityList = ({ entityIds = [], onListScroll, entity =  QuestionItemContainer }) => {
  const Entity = entity

  return (
    <section className={styles['list']} onScroll={onListScroll}>
      {entityIds.map(entityId => <Entity key={entityId} entityId={entityId}/>)}
    </section>
  )
}

export default EntityList