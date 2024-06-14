$(document).ready(function() {
    // 當頁面滾動時顯示或隱藏按鈕
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            // 滾動距離大於100px時顯示按鈕
            $('#scrollButton').parent().fadeIn();
        } else {
            // 滾動距離小於等於100px時隱藏按鈕
            $('#scrollButton').parent().fadeOut();
        }
    });

    // 點擊按鈕時平滑滾動到頁面頂部
    $('#scrollButton').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    // 針對另外一個滾動按鈕的同樣功能
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollButton2').parent().fadeIn();
        } else {
            $('#scrollButton2').parent().fadeOut();
        }
    });

    $('#scrollButton2').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    // 針對第三個滾動按鈕的同樣功能
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollButton3').parent().fadeIn();
        } else {
            $('#scrollButton3').parent().fadeOut();
        }
    });

    $('#scrollButton3').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    // 點擊圖片時切換圖片
    const myImage = $('#pic');
    const images = ["images/a.jpg", "images/b.gif", "images/c.gif", "images/d.gif"];
    let x = 0;

    myImage.click(function() {
        x = (x + 1) % images.length;
        const ne = images[x];
        const $this = $(this);

        $this.fadeOut(100, function() {
            $this.attr('src', ne).fadeIn(100);
        });
    });

    // 幻燈片自動播放功能
    var currentIndex = 0;
    var slides = $('.slide');
    var totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        var offset = -currentIndex * 100 + '%';
        $('.slides').css('transform', 'translateX(' + offset + ')');
    }

    $('#next').click(function() {
        showSlide(currentIndex + 1);
    });

    $('#prev').click(function() {
        showSlide(currentIndex - 1);
    });

    // 每5秒自動切換幻燈片
    setInterval(function() {
        showSlide(currentIndex + 1);
    }, 5000);

    // 選擇景點顯示對應的信息
    $('#places').change(function() {
        $('.info').hide(); // 隱藏所有信息
        var selectedValue = $(this).val();
        if (selectedValue) {
            $('#' + selectedValue).show(); // 顯示所選景點的信息
        }
    });
    
    // 改變幻燈片圖片大小
    $('#small').click(function() {
        $('.slide > img').css('width', '50%');
        $('.slides').css('margin-left', '375px');
    });

    $('#medium').click(function() {
        $('.slide > img').css('width', '75%');
        $('.slides').css('margin-left', '225px');
    });

    $('#large').click(function() {
        $('.slide > img').css('width', '100%');
        $('.slides').css('margin-left', '0px');
    });

    // 點擊單元格顯示彈窗
    $('.cell').click(function() {
        var modalId = $(this).data('target');
        $(modalId).css('display', 'block');
    });

    // 點擊關閉按鈕關閉彈窗
    $('.close').click(function() {
        $(this).closest('.modal').css('display', 'none');
    });

    // 點擊窗口外部關閉彈窗
    $(window).click(function(event) {
        if ($(event.target).hasClass('modal')) {
            $('.modal').css('display', 'none');
        }
    });

    // 移到單元格時改變位置
    $('.cell').hover(
        function() {
            $(this).css('transform', 'translateX(10px)');
        }, function() {
            $(this).css('transform', 'translateX(0)');
        }
    );

    // 移到圖片上時放大圖片
    $('.modal-content>img').hover(
        function() {
            $(this).addClass('zoomed');
        }, function() {
            $(this).removeClass('zoomed');
        }
    );
});