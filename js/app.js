'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('mesphotos', 'mesphotos.html'),
            new Route('insta', 'insta.html')
        ]);
    }
    init();
}());