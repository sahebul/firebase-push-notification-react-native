import React from 'react';
import PushNotification from 'react-native-push-notification'

export const LocalNotification = () => {
      PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('LOCAL NOTIFICATION ==>', notification)
      },

      popInitialNotification: true,
      requestPermissions: true
    })
  PushNotification.localNotification({
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    title: 'Local Notification Title',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["Yes", "No"]'
  })
}
