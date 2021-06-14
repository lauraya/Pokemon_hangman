import React from "react";
export function showNotif(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

const Notification = ({ showNotif }) => {
  return (
    <div className={showNotif ? "notif-container show" : "notif-container"}>
      <p>Cette lettre a déjà été entrée</p>
    </div>
  );
};

export default Notification;
