import { Meteor } from 'meteor/meteor'
import React, { useState } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import styled from 'styled-components'


const LogInForm = (props) => {
    const handleLogIn = event => {
        event.preventDefault()
        Meteor.loginWithPassword(email, password, (error, result) => {
          if(error) return warn('Try a better user/password combination like test/test')
        })   
    }
    const handleLogOut = () => Meteor.logout()
    const setValue = setter => event => setter(event.target.value.trim())

    const { userId } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return userId 
        ? <><button onClick={handleLogOut}>Logout</button></> 
        : <Styles>
            <label>Username / Email: <input type="text" onChange={setValue(setEmail)}/></label>
            <label>Password <input type="password" onChange={setValue(setPassword)}/></label>        
            <button onClick={handleLogIn}>Login</button>
        </Styles>
}

export const LogIn =
    withTracker(() => {
        // Meteor.loginWithPassword('test', 'test') // TODO develop
        const userId = Meteor.userId()
        return ({ userId })
    })(LogInForm)

const Styles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`