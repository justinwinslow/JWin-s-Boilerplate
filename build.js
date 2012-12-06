({
    baseURL: 'scripts',
    dir: 'scripts.build',

    mainConfigFile: 'scripts/init.js',

    modules: [
        {
            name: 'init',

            include: [
                'text',
                'jquery',
                'underscore',
                'backbone',
                'handlebars',
                'modernizr',
                'excanvas',
                'css',
                'module'
            ],
            exclude: []
        }
    ]
})