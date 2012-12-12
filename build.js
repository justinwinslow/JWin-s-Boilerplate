({
    baseURL: 'app',
    dir: 'app.build',

    mainConfigFile: 'app/init.js',

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