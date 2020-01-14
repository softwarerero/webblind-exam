import { Meteor } from 'meteor/meteor'
import { AudioStreams } from '/collections/AudioStreams.js'

const USERS = [
    { username: 'Test', email: 'test@webblinds.com', password: 'test', verified: true },
]
const AUDIO_STREAMS = [
    { file: 'https://www.computerhope.com/jargon/m/example.mp3', startDate: '2020-01-14', startTime: '01:01' },
]

export const loadInitialData = () => {
    Meteor.users.remove({})
    AudioStreams.remove({})
    if (!Meteor.users.find().count()) {
        USERS.forEach(user => Accounts.createUser(user))
        AUDIO_STREAMS.forEach(stream => AudioStreams.insert(stream))
    }
}