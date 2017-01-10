console.log("scripts loaded.");
const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = (window.innerWidth - 40);
canvas.height = (window.innerHeight - 200);
context.strokeStyle = 'hotpink';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 20;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
	if (!isDrawing) return; //Stops function running when not clicked
	context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	context.beginPath();
	// Starting point
	context.moveTo(lastX, lastY);
	// Move to
	context.lineTo(e.offsetX, e.offsetY);
	context.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;
	if (hue >=360) {
		hue = 0;
	}
}

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

      // bind event handler to clear button
      document.getElementById('clear').addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }, false);