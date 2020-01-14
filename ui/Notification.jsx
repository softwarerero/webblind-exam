import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Store } from '/ui/Store.js'

const Msg = (props) => {
    const { msg, type } = props.notification
    return <div className={type}>{msg}</div>
}

export const Notification = 
    withTracker(() => {
        return { notification: Store.notification.get() }
    })(Msg)
