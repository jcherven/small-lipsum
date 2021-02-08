const wordNum = document.querySelector('input[name="words"]');
const paraNum = document.querySelector('input[name="paras"]');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

const regex = /([^A-Za-z ])/g;
const data = myData.replace(regex, '').toLowerCase();

const myArr = data.split(' ');

btn.addEventListener('click', buttonClicked)

function buttonClicked(e) {
		console.log(e.target);
		e.target.style.background = 'blue';
}

function genParagraphs() {

}
