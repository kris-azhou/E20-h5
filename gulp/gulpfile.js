//导入工具包 require('node_modules里对应模块') -- 配置插件
var gulp = require('gulp'),
    minfycss = require('gulp-minify-css'), //-css压缩
    uglify = require('gulp-uglify'), //-js压缩
    minifyHTML = require("gulp-htmlmin");  //html压缩
    imagemin = require('gulp-imagemin'), // 图片压缩
    pngquant = require('imagemin-pngquant'), // 深度压缩
    //    concat = require("gulp-concat"), // 文件合并
    runSequence = require('run-sequence'), // 顺序执行
    rev = require('gulp-rev'), // 文件名加MD5后缀
    revCollector = require('gulp-rev-collector'), // 路径替换
    browserSync = require("browser-sync").create(), //浏览器自动刷新
    reload = browserSync.reload, //浏览器自动刷新
    ftp = require('gulp-ftp'),
    gutil = require('gulp-util');




//定义路径
var cssSrc = 'src/2017/wx/css/*.css',
    cssDist = 'dist/2017/wx/css',
    jsSrc = 'src/2017/wx/js/*.js',
    jsDist = 'dist/2017/wx/js',
    imgSrc = ['src/2017/wx/image/**/*.{png,jpg,gif,svg}','src/2017/wx/image/*.{png,jpg,gif,svg}'],
    imgDist = 'dist/2017/wx/image',
    htmlSrc = ['src/2017/wx/**/*.json', 'src/2017/wx/*.html'],
    htmlDist = 'dist/2017/wx/',
    phpSrc = 'src/2017/wx/*.php',
    phpDist = 'dist/2017/wx/';
    mediaSrc = 'src/2017/wx/media/*.mp3',
    mediaDist = 'dist/2017/wx/media';


//开发版

//images
gulp.task('images:dev', function () {
    return gulp.src(imgSrc)
        .pipe(reload({
            stream: true
        }))
});

//css
gulp.task('css:dev', function () {
    return gulp.src(cssSrc)
        .pipe(reload({
            stream: true
        }))
});


//js
gulp.task('js:dev', function () {
    return gulp.src(jsSrc)
        .pipe(reload({
            stream: true
        }))
});

//php
gulp.task('php:dev', function () {
    return gulp.src(phpSrc)
        .pipe(reload({
            stream: true
        }))
});


//media
gulp.task('media:dev', function () {
    return gulp.src(mediaSrc)
        .pipe(reload({
            stream: true
        }))
});

//html
gulp.task('html:dev', function () {
    return gulp.src(htmlSrc)
        .pipe(reload({
            stream: true
        }))
});

//开发构建
gulp.task('dev', ['images:dev','css:dev', 'js:dev', 'html:dev'], function () {
    browserSync.init({
        server: {
            baseDir: "src/2017/wx/" ,// 设置服务器的根目录为dist目录
            index: "login.html"
        },
        notify: false // 开启静默模式
    })

    // 我们使用gulp的文件监听功能，来实时编译修改过后的文件
    gulp.watch('src/2017/wx/css/*.css', ['css:dev'])
    gulp.watch(['src/2017/wx/image/**/*.{png,jpg,gif,svg}','src/2017/wx/image/*.{png,jpg,gif,svg}'], ['images:dev'])
    gulp.watch('src/2017/wx/js/*.js', ['js:dev'])
    gulp.watch(['src/2017/wx/**/*.json', 'src/2017/wx/*.html'], ['html:dev'])
    gulp.watch('src/2017/wx/media/*.mp3', ['media:dev'])
    gulp.watch('src/2017/wx/*.php', ['php:dev'])
})


//定义任务 - 上线版 加入生成文件hash编码

//输出压缩文件路径
var imgEnd = 'src/2017/wx/image/',
    cssEnd = 'src/2017/wx/css/',
    jsEnd = 'src/2017/wx/js/';

//images
gulp.task('images', function () {
    return gulp.src(imgSrc)
        .pipe(imagemin({
            progressive: true, // 无损压缩JPG图片
            svgoPlugins: [{
                removeViewBox: false
            }], // 不移除svg的viewbox属性
            use: [pngquant()] // 使用pngquant插件进行深度压缩
        }))
        .pipe(rev())
        .pipe(gulp.dest(imgDist)) // 输出路径
        .pipe(rev.manifest())
        .pipe(gulp.dest(imgEnd))
});

//css
gulp.task('css', function () {
    return gulp.src(cssSrc)
        .pipe(minfycss())
        .pipe(rev())
        .pipe(gulp.dest(cssDist))
        .pipe(rev.manifest())
        .pipe(gulp.dest(cssEnd))
})

//js
gulp.task('js', function () {
    return gulp.src(jsSrc)
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(rev())
        .pipe(gulp.dest(jsDist))
        .pipe(rev.manifest())
        .pipe(gulp.dest(jsEnd))
})

//php
gulp.task('php',function(){
    return gulp.src(phpSrc)
        .pipe(gulp.dest(phpDist))
    })

//media
gulp.task('media',function(){
    return gulp.src(mediaSrc)
        .pipe(gulp.dest(mediaDist))
    })

//html
gulp.task('html', function () {
    var options = {
        removeComments: true,  //清除HTML注释
        collapseWhitespace: true,  //压缩HTML
        collapseBooleanAttributes: true,  //省略布尔属性的值 <input checked="true"/> ==> <input checked />
        removeEmptyAttributes: true,  //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,  //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,  //删除<style>和<link>的type="text/css"
        minifyJS: true,  //压缩页面JS
        minifyCSS: true  //压缩页面CSS
    };
    return gulp.src(htmlSrc)
        .pipe(revCollector())
        .pipe(minifyHTML(options))  
        .pipe(gulp.dest(htmlDist))
})


//ftp
gulp.task('upload', function () {
  return gulp.src('dist/2017/wx/**')
  .pipe(ftp({
    host: '127.0.0.1',  // 远程主机ip
    user: 'admin',  // 帐号
    pass: 'admin',  // 密码
    remotePath: '/meeting/2016/2017/train'  // 上传路径，不存在则新建
  }))
  .pipe(gutil.noop())
})


//上线配置

gulp.task('build', function (done) {
    condition = false;
    runSequence(
        ['images'],['css'], ['js'], ['php'],['media'], ['html'],
        done);
});


// gulp.task('build', function (done) {
//     condition = false;
//     runSequence(
//         ['images'],['css'], ['js'], ['php'],['media'], ['html'], ['upload'],
//         done);
// });