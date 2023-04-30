window.onload = () => {
    
    // ハンバーガーボタンの要素を取得
    var headerHamburgerBtn = document.getElementById('humburger-btn');

    // ハンバーガーボタンがクリックされたときのイベントを設定
    headerHamburgerBtn.addEventListener('click',(event) => {

        // ハンバーガーボタンを横3本と×で切り替え
        headerHamburgerBtn.classList.toggle('active');

        // ハンバーガーメニューの表示を切り替え
        document.getElementById('humburger-menu').classList.toggle('active');

        // ハンバーガーカバーの表示を切り替え
        document.getElementById('humburger-cover').classList.toggle('active');

        // スクロール固定を切り替え
        document.body.classList.toggle('noScroll')

    });
}



(function() {

    const fixedHeader = document.getElementById('header--fixed');
    const humburgerBtn = document.getElementById('humburger-btn');
    
    const isUp = (function() {
        
        const scrollElement = document.scrollingElement;
        let flag, prePoint, scrollPoint;
        
        return function() {
    
            scrollPoint = scrollElement.scrollTop;
            flag = prePoint > scrollPoint ? true : false;
            prePoint = scrollPoint;
            return flag;
    
        }
    
    }());

    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            
            if (isUp()) {
                fixedHeader.classList.remove('is-show');
                humburgerBtn.classList.remove('is-show');
            } else {
                fixedHeader.classList.add('is-show');
                humburgerBtn.classList.add('is-show');
            }

        } else {
            fixedHeader.classList.remove('is-show');
            humburgerBtn.classList.remove('is-show');
        }
    })
}());
