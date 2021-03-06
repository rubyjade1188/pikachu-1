const string = `.skin * {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.skin *::before,
.skin *::after {
	box-sizing: border-box;
}

.skin {
    min-height: 50vh;
    background: #ffe600;
	position: relative;
}

.nose {
	width: 0px;
	height: 0px;
	border: 12px solid black;
	border-color: black transparent transparent;
	border-radius: 11px;
	position: absolute;
	left: 50%;
	top: 145px;
	margin-left: -12px;
	z-index: 10;
}

@keyframes wave {
	0% {
		transform: rotate(0deg);
	}
	33% {
		transform: rotate(6deg);
	}
	66% {
		transform: rotate(-6deg);
	}
	100% {
		transform: rotate(0deg);
	}
}

.nose:hover {
	transform-origin: 50% 100%;
	animation: wave 250ms infinite linear;
}

.eye {
	border: 2px solid #000;
	width: 64px;
	height: 64px;
	position: absolute;
	left: 50%;
	top: 100px;
	margin-left: -32px;
	background: #2e2e2e;
	border-radius: 50%;
}

.eye::before {
	content: "";
	display: block;
	border: 3px solid #000;
	width: 27.5px;
	height: 27.5px;
	background: #fff;
	border-radius: 50%;
	position: relative;
	left: 7px;
	top: 3px;
}

.eye.left {
	transform: translateX(-100px);
}

.eye.right {
	transform: translateX(100px);
}

.mouth {
	height: 200px;
	width: 200px;
	position: absolute;
	left: 50%;
	top: 170px;
	margin-left: -100px;
}

.mouth .upper {
	position: relative;
	top: -20px;
	z-index: 1;
}

.mouth .upper .lip {
	background: #ffe600;
	border: 3px solid black;
	height: 30px;
	width: 100px;
	border-top-color: transparent;
	border-right-color: transparent;
	position: relative;
	left: 50%;
	margin-left: -50px;
}

.mouth .upper .lip::before {
	content: "";
	display: block;
	width: 7px;
	height: 30px;
	position: absolute;
	bottom: 0;
	background: #ffe600;
}

.mouth .upper .lip.left {
	border-radius: 0 0 0 50px;
	transform: rotate(-15deg) translateX(-53px);
	position: absolute;
}

.mouth .upper .lip.left::before {
	right: -6px;
}

.mouth .upper .lip.right {
	border-radius: 0 0 50px 0;
	transform: rotate(15deg) translateX(53px);
}

.mouth .upper .lip.right::before {
	left: -6px;
}

.mouth .lower {
	height: 180px;
	position: absolute;
	top: 5px;
	width: 100%;
	overflow: hidden;
}

.mouth .lower .yuan1 {
	border: 3px solid black;
	width: 150px;
	height: 1000px;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: 75px/300px;
	left: 50%;
	margin-left: -75px;
	background: #9b000a;
	overflow: hidden;
}

.mouth .lower .yuan1 .yuan2 {
	background: #ff485f;
	width: 200px;
	height: 300px;
	position: absolute;
	bottom: -158px;
	left: 50%;
	margin-left: -100px;
	border-radius: 100px;
}

.cheek {
	position: absolute;
	left: 50%;
	border: 3px solid black;
	width: 88px;
	height: 88px;
	top: 200px;
	margin-left: -44px;
	z-index: 3;
}

.cheek > img {
	position: absolute;
	top: 50%;
	left: 50%;
}

.cheek.left {
	transform: translateX(-180px);
	background: #ff0000;
	border-radius: 50%;
}

.cheek.left > img {
	transform: rotateY(180deg);
	transform-origin: 0 0;
}

.cheek.right {
	transform: translateX(180px);
	background: #ff0000;
	border-radius: 50%;
}
`;

export default string;
