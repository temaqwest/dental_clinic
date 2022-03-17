# "Dental Clinic" Website ***(markup)***

### Деплой
* `npm install` > (установка зависимостей) 

### Команды
* `npm run dev` - режим разработки с локальным сервером на 3000 порту, наблюдателем и пр.
* `npm run build` - простой режим сборки.
* `npm run zip` - режим сборки и упаковки решения в ZIP архив.

### Стек
* Imagemin - сжатие png, jpeg, gif, svg;
* Autoprefixer - префиксер для кроссбраузерности;
* CleanCSS - CSS minify;
* FileInclude - инклюдим группы в один файл, также используем для переиспользования html модулей;
* BrowserSync - для лайв-релоуд;
* gulp-rename - для ренейма ¯\_(ツ)_/¯;
* gulp-replace - string replace plugin;
* gulp-notify - для вызова нативных уведомлений в системе при ошибках;
* gulp-zip - для создания архивов;
* gulp-newer - плагин Gulp для передачи только тех src файлов, которые новее соответствующих файлов в dest;
* gulp-group-css-media-queries - группировка медиа-запросов в конечном файле;
* gulp-plumber - избегаем краши при ошибках в работе плагинов;
* gulp-version-number - для избегания проблем с кэшем при просмотре контента;
* webpack, webpack-stream - сборка модулей JS;
* Сборка на [Gulp](http://gulpjs.com) (v4.0.2);
* SCSS для написания CSS [SCSS](https://sass-scss.ru/)


### Файловая структура проекта
* dist - *собранный проект*
* gulp - *папка с разбитым на модули конфигом*
* **gulpfile.js** - *конфиг. файл сборки*
* src
  * assets
    * fonts - *используемые шрифты*
    * files - *любые файлы*
    * js 
      * modules - *модули js*
      * **app.js** - *главный файл*
    * scss
        * modules - подключаемые в корневом scss модули
        * **main.scss** - *файл, для подключения всех стилей в единый*
    * media - *любые фото, картинки*
  * markup_modules - компоненты html
  * **\*.html** - основные страницы