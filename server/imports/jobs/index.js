import {Meteor} from 'meteor/meteor'
import {SyncedCron} from 'meteor/percolate:synced-cron'

Meteor.startup(function () {
  SyncedCron.start()
})

SyncedCron.config({
  log: false
})
