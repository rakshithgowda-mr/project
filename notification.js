function markAllRead() {
  const notifications = document.querySelectorAll('.notification.unread');
  notifications.forEach(n => n.classList.remove('unread'));
}

function clearNotifications() {
  const list = document.getElementById('notification-list');
  list.innerHTML = '<li>No notifications.</li>';
}
