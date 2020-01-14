import { Meteor } from 'meteor/meteor';
import { loadInitialData } from '/server/initial-data';

Meteor.startup(() => {
    // DON'T CHANGE THE NEXT LINE
    loadInitialData();

    // YOU CAN DO WHATEVER YOU WANT HERE
});