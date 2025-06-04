const startCameraBtn = document.getElementById('startCameraBtn');
const videoElement = document.getElementById('camera');

startCameraBtn.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
  } catch (err) {
    console.error('Error accessing camera:', err);
    alert('Could not access camera. Please allow permission.');
  }
});
