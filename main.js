const btnToggle = document.getElementById('opened');
const btnClose = document.getElementById('closed');
const btns = document.getElementById('btns');
const nav = document.getElementById('nav');
const arrowUp = document.querySelector('.arrow-1');
const arrowDown = document.querySelector('.arrow-2');

const siteNav = document.getElementById('primary-navigation');

const navBtns = document.querySelector('.nav__btns');

console.log((document.body.style.backgroundColor = '#ccc'));

//Functionality with data attribute and aria-expanded open and close our navigation
//This using instead of classes and things like that

btnToggle.addEventListener('click', (_) => {
	const isOpened = btnToggle.getAttribute('aria-expanded') === 'true';
	if (isOpened ? closeMenu() : openMenu());

	hamburgerMenuCloseOpen();
});

arrowUp.addEventListener('mousedown', (_) => {
	changeIconArrow();
});
arrowDown.addEventListener('mousedown', (_) => {
	changeIconArrow();
});

const openMenu = function () {
	btnToggle.setAttribute('aria-expanded', true);
	siteNav.setAttribute('data-state', 'opened');
	document.body.style.backgroundColor = '#242424a3';
};
const closeMenu = function () {
	btnToggle.setAttribute('aria-expanded', false);
	siteNav.setAttribute('data-state', 'closing');

	let backCrl = document.body.style.backgroundColor = 'var(--neutral-100)'
	

	if (backCrl === 'var(--neutral-100)') {
		document.body.style.backgroundColor = ""
	}

	
};

 document.body.style.backgroundColor = '';

const hamburgerMenuCloseOpen = function () {
	let img = document.querySelector('.open');
	const src = img.getAttribute('src');

	if (src === 'images/icon-menu.svg') {
		img.setAttribute('src', 'images/icon-close-menu.svg');
	} else {
		img.setAttribute('src', 'images/icon-menu.svg');
	}
};

const changeIconArrow = function () {
	const src = arrowUp.getAttribute('src');

	if (src === 'images/icon-arrow-up.svg') {
		arrowUp.setAttribute('src', 'images/icon-arrow-down.svg');
		arrowDown.setAttribute('src', 'images/icon-arrow-down.svg');
	}
	if (src === 'images/icon-arrow-down.svg') {
		arrowUp.setAttribute('src', 'images/icon-arrow-up.svg');
		arrowDown.setAttribute('src', 'images/icon-arrow-up.svg');
	}
};
