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

    //相簿設定
    $(".js-photo-list a").click(function () {
        $(".js-photo-slide").addClass("show");
        return false;
    })
    $(".js-close-photo-slide").click(function () {
        $(".js-photo-slide").removeClass("show");
        return false;
    })

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


    // 選擇所有具有相應類名的元素
    var dropdownToggles = document.querySelectorAll('.js-dropdown-toggle');
    var dropdown = document.querySelectorAll('.js-dropdown');
    var isWideScreen = window.innerWidth > 992; // 檢查當前視窗寬度

    // 初始化
    RESIZE();

    // 檢查視窗大小的函數
    function RESIZE() {
        // 檢查當前視窗寬度是否大於992像素
        var isWideScreen = window.innerWidth > 992;

        if (isWideScreen) {
            // 在滑鼠進入時觸發點擊事件
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

            // 在滑鼠離開時觸發點擊事件
            dropdown.forEach(function (toggle) {
                toggle.addEventListener('mouseleave', function () {
                    // 模擬滑鼠點擊事件
                    var clickEvent = new MouseEvent('click', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });
                    toggle.dispatchEvent(clickEvent); // 觸發點擊事件
                });
            });
        } else {
            // 移除事件監聽器
            dropdownToggles.forEach(function (toggle) {
                toggle.removeEventListener('mouseenter');
            });
            dropdown.forEach(function (toggle) {
                toggle.removeEventListener('mouseleave');
            });
        }
    }

    // 監聽視窗大小改變事件
    window.addEventListener('resize', function () {
        RESIZE();
    });

})//JS尾端	

