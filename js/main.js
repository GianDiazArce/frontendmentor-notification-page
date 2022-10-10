let notificationCount = document.getElementById("notifications-count");
let notificationWithoutRead = document.getElementsByClassName(
  "notifications__item--unread"
);

const changeNotificationCount = () => {
  notificationCount.innerHTML = notificationWithoutRead.length;
};

changeNotificationCount();


const notificationRead = (div) => {
  if (div.classList.contains("notifications__item--unread")) {
    div.classList.remove("notifications__item--unread");
    changeNotificationCount();
  }
};

const notificationClose = (e) => {
  let notification = e.target.closest(".notifications__item");
  if (notification) {
    notification.remove();
    changeNotificationCount();
  }
};

const notificationReadAll = () => {
  if (notificationWithoutRead.length) {
    document.querySelectorAll(".notifications__item--unread").forEach((el) => {
      el.classList.remove("notifications__item--unread");
    });
    changeNotificationCount();
  }
};
