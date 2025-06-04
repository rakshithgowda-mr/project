function markAllRead() {
  const notifications = document.querySelectorAll('.notification.unread');
  notifications.forEach(notification => {
    notification.classList.remove('unread');
    notification.setAttribute('aria-read', 'true'); // accessibility attribute
    notification.style.backgroundColor = '#f0f0f0'; // visual cue via JS
    notification.style.fontWeight = 'normal';       // make it appear read
  });
}

function clearNotifications() {
  if (confirm('Are you sure you want to clear all notifications?')) {
    const list = document.getElementById('notification-list');
    list.innerHTML = '';
    const emptyItem = document.createElement('li');
    emptyItem.textContent = 'No notifications.';
    emptyItem.style.color = '#888';
    emptyItem.style.fontStyle = 'italic';
    list.appendChild(emptyItem);
  }
}
