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

	//滑鼠移入下拉選單

	var dropdownToggles = document.querySelectorAll('.js-dropdown-toggle');
	var dropdown = document.querySelectorAll('.js-dropdown');

	// 遍历这些元素，为它们添加事件监听器
	dropdownToggles.forEach(function (toggle) {
		// 监听鼠标悬停事件
		toggle.addEventListener('mouseenter', function () {
			// 创建并模拟一个鼠标点击事件
			var clickEvent = new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window
			});
			toggle.dispatchEvent(clickEvent); // 触发点击事件
		});

	});
	dropdown.forEach(function (toggle) {
		// 监听鼠标移出事件
		toggle.addEventListener('mouseleave', function () {
			// 隐藏下拉菜单
			var clickEvent = new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window
			});
			toggle.dispatchEvent(clickEvent); // 触发点击事件
		});
	});
})//JS尾端	
