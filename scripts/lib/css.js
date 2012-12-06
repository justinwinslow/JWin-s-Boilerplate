define(['text'], {
    load: function (name, require, load, config) {
        require(['text!' + name], function (css) {
            if (typeof window !== "undefined" && window.document){
                var head = document.getElementsByTagName('head')[0],
                    style = document.createElement('style');

                style.type = 'text/css';

                if(style.styleSheet){
                    style.styleSheet.cssText = css;
                }else{
                    style.appendChild(document.createTextNode(css));
                }

                head.appendChild(style);
            }
        });

        load();
    }
});