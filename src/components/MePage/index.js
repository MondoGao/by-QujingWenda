import React from 'react'

import styles from './MePage.scss'

import Button from 'components/Button'
import UserMetaContainer from 'containers/UserMetaContainer'

const MePage = ({ myself }) => (
  <div className={styles['me-container']}>
    <section className={styles.information}>
      <UserMetaContainer myself id={myself.id}/>
      <Button className={styles['btn-upgrade']} disable>成为答主</Button>
    </section>
  </div>
)

export default MePage