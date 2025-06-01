// Open Zoom link in a new tab
function joinZoom() {
  window.open('https://zoom.us/j/your-meeting-id', '_blank'); // Replace with your actual Zoom link
}

// Start local webcam video using WebRTC
function startWebRTC() {
  const video = document.getElementById('localVideo');

  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(error => {
      alert('Could not access your camera/mic: ' + error.message);
    });
}
