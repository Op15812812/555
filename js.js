$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            // 滚动距离大于100px时显示按钮
            $('#scrollButton').parent().fadeIn();
        } else {
            // 滚动距离小于等于100px时隐藏按钮
            $('#scrollButton').parent().fadeOut();
        }
    });

    $('#scrollButton').click(function() {
        // 平滑滚动到页面顶部
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            // 滚动距离大于100px时显示按钮
            $('#scrollButton2').parent().fadeIn();
        } else {
            // 滚动距离小于等于100px时隐藏按钮
            $('#scrollButton2').parent().fadeOut();
        }
    });

    $('#scrollButton2').click(function() {
        // 平滑滚动到页面顶部
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            // 滚动距离大于100px时显示按钮
            $('#scrollButton3').parent().fadeIn();
        } else {
            // 滚动距离小于等于100px时隐藏按钮
            $('#scrollButton3').parent().fadeOut();
        }
    });

    $('#scrollButton3').click(function() {
        // 平滑滚动到页面顶部
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
});


$(document).ready(function() {
    const myImage = $('#pic');
    const images = ["images/a.jpg", "images/b.gif","images/c.gif", "images/d.gif"];
    let x = 0;

    myImage.click(function() {
        x = (x + 1) % images.length;
        const ne = images[x];
            const $this = $(this);

            $this.fadeOut(100, function() {
                $this.attr('src', ne).fadeIn(100);
            });
    });
});

$(document).ready(function() {
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

    // 自动播放功能
    setInterval(function() {
        showSlide(currentIndex + 1);
    }, 5000); // 每3秒切换一次
});

$(document).ready(function() {
    $('#places').change(function() {
        $('.info').hide(); // 隐藏所有信息
        var selectedValue = $(this).val();
        if (selectedValue) {
            $('#' + selectedValue).show(); // 显示所选景点的信息
        }
    });
    
    $('#small').click(function() {
        $('.slide > img').css('width','50%');
        $('.slides').css('margin-left','375px');
    });
    
    $('#medium').click(function() {
        $('.slide > img').css('width','75%');
        $('.slides').css('margin-left','225px');
    });
    
    $('#large').click(function() {
        $('.slide > img').css('width','100%');
        $('.slides').css('margin-left','0px');
    });
});



  $(document).ready(function() {
    // 打开弹窗
    $('.cell').click(function() {
        var modalId = $(this).data('target');
        $(modalId).css('display', 'block');
    });

    // 关闭弹窗
    $('.close').click(function() {
        $(this).closest('.modal').css('display', 'none');
    });

    // 点击窗口外部关闭弹窗
    $(window).click(function(event) {
        if ($(event.target).hasClass('modal')) {
            $('.modal').css('display', 'none');
        }
    });
});

$(document).ready(function() {
    $('.cell').hover(
        function() {
            $(this).css('transform', 'translateX(10px)');
        }, function() {
            $(this).css('transform', 'translateX(0)');
        }
    );
});

$(document).ready(function() {
    $('.modal-content>img').hover(
        function() {
            $(this).addClass('zoomed');
        }, function() {
            $(this).removeClass('zoomed');
        }
    );
});
