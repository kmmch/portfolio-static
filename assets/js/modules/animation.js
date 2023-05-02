/*========= タイピング風 ===============*/
// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}



function prepareTextTypingAnime() {
    /*========= タイピング風アニメーションの準備 ===============*/
	//spanタグを追加する
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
}



/*========= ふわっと現れる ===============*/
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');
            // 画面内に入ったらfadeInというクラス名を追記
        }else{
            // $(this).removeClass('fadeUp');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });
    
    //関数でまとめることでこの後に違う動きを追加することが出来ます
    $('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeDown');
            // 画面内に入ったらfadeDownというクラス名を追記
        }else{
            $(this).removeClass('fadeDown');
            // 画面外に出たらfadeDownというクラス名を外す
        }
    });
    
    
}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定



// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {

    // fadeAnime();

});// ここまで画面をスクロールをしたら動かしたい場合の記述



// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {

    fadeAnime();
    prepareTextTypingAnime();
	TextTypingAnime();

});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述