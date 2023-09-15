$(function () {//JS開頭

    var WINDOW = $(window).width();//視窗寬度
    var WINDOWH = $(window).height();//視窗高度

    //捲動畫面改變 header 樣式
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) { //若目前的位置距離網頁頂端>...
            $(".gotop").addClass("show");
            $(".js-nav").addClass("up");
        } else {
            $(".gotop").removeClass("show");
            $(".js-nav").removeClass("up");
        }
    });

    //點擊切換active樣式
    $(".js-toggle-btn").click(function () {
        $(this).toggleClass("active");
    });

    //首頁>生活花絮>相簿-開啟輪播視窗
    $(".js-photo-list a").click(function () {
        $(".js-photo-slide").addClass("show");
        return false;
    })
    $(".js-close-photo-slide").click(function () {//關閉輪播視窗
        $(".js-photo-slide").removeClass("show");
        return false;
    })

    //首頁>每日菜單-判斷是否斷行，若為是增加展開功能
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


    // 主選單下拉選單，桌機版設定為hover時出現
    var dropdownToggles = document.querySelectorAll('.js-dropdown-toggle');
    var dropdown = document.querySelectorAll('.js-dropdown');
    var isWideScreen = window.innerWidth > 992; // 檢查當前視窗寬度

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

    window.addEventListener('resize', function () {
        RESIZE();
    });

})//JS尾端	

