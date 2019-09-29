import React from 'react'
import classes from './MenuToggle.css'

const MenuToggle = props => {

    const cls = [
        classes.MenuToggle,
        'burger',
        'fa'
    ]


    if(props.isOpen) {
        cls.push('fa-times')
        cls.push('open')
    } else {
        cls.push('fa-bars')
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )

}

export default MenuToggle