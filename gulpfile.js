var elixir = require('laravel-elixir');
var elixirTypscript = require('elixir-typescript');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.copy('node_modules/angular2', 'public/angular2');
    mix.copy('node_modules/rxjs', 'public/rxjs');
    mix.copy('node_modules/systemjs', 'public/systemjs');
    mix.copy('node_modules/es6-promise', 'public/es6-promise');
    mix.copy('node_modules/es6-shim', 'public/es6-shim');
    mix.copy('node_modules/zone.js', 'public/zone.js');
    mix.copy('resources/assets/bootstrap', 'public/assets/bootstrap');
    mix.copy('resources/assets/dist', 'public/assets/dist');
    mix.copy('resources/assets/plugins', 'public/assets/plugins');
    mix.copy('resources/assets/typescript/includes', 'public/includes');

    mix.typescript(
        [
            'app.component.ts',
            'main.ts',
            'home-graph.component.ts',
            'add-transaction-form.component.ts',
        ],
        'public/',
        {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );

});
