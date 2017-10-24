/**
 * Created by Administrator on 2017/4/13 0013.
 */

$(function() {



//旋转
    var n = 0, ti = null;

    function xz() {
        ti = setInterval(function () {
            n++
            $('.box1').css({
                '-moz-transform': 'rotate(' + n * 90 + 'deg)',

                '-webkit-transform': 'rotate(' + n * 90 + 'deg)',
                '-o-transform': 'rotate(' + n * 90 + 'deg)',
                '-ms-transform': 'rotate(' + n * 90 + 'deg)',
                'transform': 'rotate(' + n * 90 + 'deg)'

            });
            $('.smile').css({
                '-moz-transform': 'rotate(' + n * -90 + 'deg)',
                '-webkit-transform': 'rotate(' + n * 90 + 'deg)',
                '-o-transform': 'rotate(' + n * 90 + 'deg)',
                '-ms-transform': 'rotate(' + n * 90 + 'deg)',
                'transform': 'rotate(' + n * -90 + 'deg)'
            });

        }, 2000);
    }

    xz();
    $('.smile').hover(function () {
        clearInterval(ti);



        if (($(this).offset().top - $('.box').offset().top) > 50) {
            if (($(this).offset().left - $('.box').offset().left) > 200) {
                $('.img3').css('display', 'block')
                $('.img3 p').eq($(this).index()).css('display', 'block')
            } else {
                $('.img2').css('display', 'block')
                $('.img2 p').eq($(this).index()).css('display', 'block')
            }
        } else {
            if (($(this).offset().left - $('.box').offset().left) > 200) {
                $('.img1').css('display', 'block')
                $('.img1 p').eq($(this).index()).css('display', 'block')
            } else {
                $('.img').css('display', 'block')
                $('.img p').eq($(this).index()).css('display', 'block')
            }

        }
    }, function () {
        xz()
        $('.img1').css('display', 'none');
        $('.img').css('display', 'none');
        $('.img2').css('display', 'none');
        $('.img3').css('display', 'none');
        $('.box>div>p').css('display', 'none')
    })
    //
    $(document).ready(function () {
        $('.banner').animate({'transform': 'rotate()'})
    });
    $('#anniu').click(function () {
        location.href = 'case.html'
    })
//    单品轮播

    var tim = null, tii = null;

    function run() {
        tim = setInterval(function () {
            $('.danpin-one .danpin-two:first').appendTo('.danpin-one');

        }, 3000)
    }

    run();
    $('.danpin-one').hover(function () {
        clearInterval(tim)
    }, function () {
        run()
    })
////中标工程轮播

            tii = setInterval(function () {
                $('.zb>div:first').appendTo('.zb')
            }, 3000)


        $('.zb').hover(function () {
            clearInterval(tii)
        }, function () {
            tii = setInterval(function () {
                $('.zb>div:first').appendTo('.zb')
            }, 3000)
        })
    })

