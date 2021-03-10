import React from 'react'
import styles from '../../index.scss'

export default function Scene(props) {
    const { width, sceneSrc, lazy } = props
    return (
        <div
            className={styles.scene}
            style={{ width }}
        >
            <img src={sceneSrc} alt="" loading = { lazy ? 'lazy' : 'eager'} />
        </div>
    )
}