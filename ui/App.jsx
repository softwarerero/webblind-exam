import React from 'react'
import { Notification } from '/ui/Notification.jsx'
import { LogIn } from '/ui/LogIn.jsx'
import { Admin } from '/ui/Admin.jsx'
import { Guest } from '/ui/Guest.jsx'

export const App = () => (
  <div>
    <Notification/>
    <h1>WebBlind - Audio Broadcasting with Meteor.js</h1>
    <LogIn/>
    <Admin/>
    <Guest/>
  </div>
)
