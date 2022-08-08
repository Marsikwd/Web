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

var t;
function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (top > 0) {
    window.scrollBy(0, ((top + 100) / -10));
    t = setTimeout('up()', 20);
  } else clearTimeout(t);
  return false;
}
window.addEventListener('scroll', function () {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
