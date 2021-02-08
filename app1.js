const wordNum = document.querySelector('input[name="words"]');
const paraNum = document.querySelector('input[name="paras"]');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

btn.addEventListener('click', buttonClicked)

function buttonClicked(e) {
		console.log(e.target);
		e.target.style.background = 'blue';
}

function genParagraphs() {

}
