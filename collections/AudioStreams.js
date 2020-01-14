import { Mongo } from 'meteor/mongo'

export const AudioStreams = new Mongo.Collection('audioStreams')

if (Meteor.isServer) {
    Meteor.publish('AudioStreams.all', function() {
        return AudioStreams.find()
    })
}

AudioStreams.allow({
    insert: () => Meteor.userId(),
    update: () => Meteor.userId(),
    remove: () => Meteor.userId(),
})