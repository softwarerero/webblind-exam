import { Meteor } from 'meteor/meteor'
import React from 'react' // eslint-disable-line no-unused-vars
import { Store } from '/ui/Store.js'

export const loadingWrapper = (isLoading, fn, msg = 'Loading...') => isLoading ? msg : fn()

const clearMsg = (timeout = 5000) => Meteor.setTimeout(() => Store.notification.set({}), timeout)
export const warn = msg => {
    Store.notification.set({ msg, type: 'warn' })
    clearMsg()
}