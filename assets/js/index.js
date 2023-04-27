window.onload = function(){
    
    // ハンバーガーボタンの要素を取得
    var headerHamburgerBtn = document.getElementById('humburger-btn');

    // ハンバーガーボタンがクリックされたときのイベントを設定
    headerHamburgerBtn.addEventListener('click',(event) => {

        // ハンバーガーボタンを横3本と×で切り替え
        headerHamburgerBtn.classList.toggle('active');

        // ハンバーガーメニューの表示を切り替え
        document.getElementById('humburger-menu').classList.toggle('panelactive');

        // スクロール固定を切り替え
        document.body.classList.toggle('noScroll')

    });
}