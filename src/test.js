import string from "./css.js";

let n = 1;
demo1.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);

let interval = 50;

const run = () => {
	n += 1;
	if (n > string.length) {
		window.clearInterval(id);
		return;
	}
	console.log(id);
	demo1.innerText = string.substring(0, n);
	demo2.innerHTML = string.substring(0, n);
	demo1.scrollTop = demo1.scrollHeight;
};

const start = () => {
	return setInterval(run, interval);
};

const destroy = () => {
	window.clearInterval(id);
};

const slow = () => {
	destroy();
	interval = 200;
	id = start();
};

const normal = () => {
	destroy();
	interval = 80;
	id = start();
};

const fast = () => {
	destroy();
	interval = 0;
	id = start();
};

let id = start();

btnPause.onclick = () => {
	destroy();
};

btnPlay.onclick = () => {
	destroy();
	id = start();
};

btnSlow.onclick = slow;

btnNormal.onclick = normal;

btnFast.onclick = fast;
