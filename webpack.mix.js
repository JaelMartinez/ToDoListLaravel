const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .vue() // Agrega esta línea
    .postCss("resources/css/app.css", "public/css", [
        //
    ]);
