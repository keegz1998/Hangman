import React from 'react'
// Notification component to display at bottom of screen to tell user they entered a repeat letter
const Notification = ({showNotification}) => {
    return (       
    <div className={`notification-container ${showNotification ? 'show' : ''}`} >
      <p>You have already entered this letter</p>
    </div>
    )
}

export default Notification
