$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) { //若目前的位置距離網頁頂端>...
			$(".gotop").addClass("show");
			$(".js-nav").addClass("up");
		} else {
			$(".gotop").removeClass("show");
			$(".js-nav").removeClass("up");
		}
	});

	//字級大小
	$(".js-toggle-btn").click(function () {
		$(this).toggleClass("active");
	});

	//菜單斷行判斷
	function checkLineBreaks() {
		var paragraphContainers = document.querySelectorAll('.js-theme-list-item-body');
		paragraphContainers.forEach(function (container) {
			var paragraph = container.querySelector('p');
			var paragraphHeight = paragraph.clientHeight;
			var contentHeight = paragraph.scrollHeight;

			if (contentHeight > paragraphHeight) {
				container.classList.add("hasbreaks");
			} else {
				container.classList.remove("hasbreaks");
			}
		});
	}

	checkLineBreaks();

	window.addEventListener('resize', function () {
		checkLineBreaks();
	});

})//JS尾端	
