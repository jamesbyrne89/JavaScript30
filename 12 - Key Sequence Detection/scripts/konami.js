const pressed = [];
const secretCode = 'rufflingfeathers';
const successMessage = 'WINNER WINNER CHICKEN DINNER!';
window.addEventListener('keyup', (e) => {

pressed.push(e.key);
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
if(pressed.join('').includes(secretCode)){
	console.log(successMessage);
	cornify_add();
}
});