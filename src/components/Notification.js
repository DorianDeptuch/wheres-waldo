import React, { useEffect } from "react";

function Notification({ message, setShowNotification }) {
  useEffect(() => {
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  }, []);

  return (
    <div className="notification-container">
      <p
        onClick={() => {
          setShowNotification(false);
        }}
      >
        X
      </p>
      <h4>{message}</h4>
    </div>
  );
}

export default Notification;
