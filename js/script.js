var list = document.querySelectorAll('.portfolio__btn');
var itemBox = document.querySelectorAll('.image');
for (let i = 0; i < list.length; i++) {
	list[i].addEventListener('click', function () {
		for (let j = 0; j < list.length; j++) {
			list[j].classList.remove('active')
			itemBox.forEach(img => {
				img.style.display ="flex"
				/* if(img.getAttribute('data-item') == value.toLoewrcase() || value == 'All'){
					img.style.display ="none"
				} */
			})

		}
		this.classList.add('active')
	})


};


arrowTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
};
window.addEventListener('scroll', function() {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

