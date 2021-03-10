import React from 'react'
import styles from '../../index.scss'

export default function Control(props) {
    let { type, handler, label,icon } = props
    return (
        <div
            className={`${styles.slideControl} ${styles[type]}`}
            onClick={handler}>
                {label || ''}
            {
                icon && <img src={icon} alt=""/>
            }
        </div>
    )
}