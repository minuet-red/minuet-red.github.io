let a_idx = 0;

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        let a = new Array("❤琪亚娜❤", "❤芽衣❤", "❤布洛妮娅❤", "❤爱莉希雅❤", "❤幽兰黛尔❤", "❤希儿❤");
        let $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        let x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": `rgb(${getRandom(255,0)},${getRandom(255,0)},${getRandom(255,0)})`,
            "user-select": 'none',
            "cursor": 'default'
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $i.remove();
            });
    });
});