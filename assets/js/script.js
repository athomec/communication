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
	var isWideScreen = window.innerWidth > 992; // 檢查當前視窗寬度

	RESIZE();

	function RESIZE() {
		WINDOWH = $(window).height();
		WINDOW = $(window).width();

		// 檢查當前視窗寬度是否大於992像素
		if (WINDOW > 992 && !isWideScreen) {
			isWideScreen = true; // 更新寬屏幕標誌
			dropdownToggles.forEach(function (toggle) {
				toggle.addEventListener('mouseenter', function () {
					// 模擬滑鼠點擊事件
					var clickEvent = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					toggle.dispatchEvent(clickEvent); // 觸發點擊事件
				});
			});
			dropdown.forEach(function (toggle) {
				toggle.addEventListener('mouseleave', function () {
					// 隐藏下拉選單
					var clickEvent = new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
						view: window
					});
					toggle.dispatchEvent(clickEvent); // 觸發點擊事件
				});
			});
		} else if (WINDOW <= 992 && isWideScreen) {
			isWideScreen = false; // 更新寬屏幕標誌
			// 移除事件監聽器
			dropdownToggles.forEach(function (toggle) {
				toggle.removeEventListener('mouseenter');
			});
			dropdown.forEach(function (toggle) {
				toggle.removeEventListener('mouseleave');
			});
		}
	}

	$(window).resize(function () {
		RESIZE();
	});
})//JS尾端	
