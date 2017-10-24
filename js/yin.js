



$('body').append('<div class="pf"><ul><li class="a-1"></li><a target="_blank" href="http://weibo.com/aixinmusic/profile?s=6cm7D0&is_hot=1"><li class="a-2"></li></a><li class="a-3"><div class="a-3-1"><img src="img/android.png" alt=""/><p>爱新聚福微信公众号</p><p>打开微信扫一扫，时刻关注爱新聚福最新优惠活动</p></div></li><li class="a-4"><div class="a-4-1"><img src="img/android.png" alt=""/><p>扫码在线下载。</p><p>扫描二维码访问爱新聚福移动版</p></div></li><li class="a-5"></li></ul></div>')

$(function(){
    $('.a-1').on('click',$('.a-1'),function(){
        var qq_chat = true;
        if (qq_chat) {

            popwin = window.location.href = 'tencent://message/?uin=81461951&Site=在线咨询&Menu=yes'

        }

    })
    $('.a-5').click(function(){
        var asd=   setInterval(function(){
            if($(document).scrollTop()<20){
                clearInterval(asd)
            }
            $(document).scrollTop($(document).scrollTop()/3)
        },10)

    })
})
