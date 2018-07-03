import gulp from 'gulp';
import concat from 'gulp-concat';
import wrap from 'gulp-wrap';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import gulpif from 'gulp-if';
import sass from 'gulp-sass';
import yargs from 'yargs';
import ngAnnotate from 'gulp-ng-annotate';
import templateCache from 'gulp-angular-templatecache';
import server from 'browser-sync';
import del from 'del';
import path from 'path';

const argv = yargs.argv;
const root = 'src/';
const paths = {
  dist: './dist/',
  scripts: [`${root}/app/**/*.js`, `!${root}/app/**/*.spec.js`],
  tests: `${root}/app/**/*.spec.js`,
  styles: `${root}/sass/style.scss`,
  templates: `${root}/app/**/*.html`,
  modules: [
    'jquery/dist/jquery.js',
    'angular/angular.js',
    'angular-resource/angular-resource.js',
    'angular-sanitize/angular-sanitize.js',
    'angular-ui-router/release/angular-ui-router.js',
    'slick-carousel/slick/slick.js',
    'angular-slick/dist/slick.js',
  ],
  static: [
    `${root}/index.html`,
    `${root}/fonts/**/*`,
    `${root}/img/**/*`
  ]
};

// Cria o servidor com browserSync
server.create();

// Limpa tudo na pasta dist
gulp.task('clean', cb => del(paths.dist + '**/*', cb));

// Gera templates.js
gulp.task('templates', () => {
  return gulp.src(paths.templates)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(templateCache({
      root: 'app',
      standalone: true,
      transformUrl: function (url) {
        return url.replace(path.dirname(url), '.');
      }
    }))
    .pipe(gulp.dest('./'));
});

// Gera vendor.js que carrega o Angular e outros vendors
gulp.task('modules', ['templates'], () => {
  return gulp.src(paths.modules.map(item => 'node_modules/' + item))
    .pipe(concat('vendor.js'))
    .pipe(gulpif(argv.deploy, uglify()))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

// Compila arquivo SASS e gera style.css
gulp.task('styles', () => {
  return gulp.src(paths.styles)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.dist + 'css/'));
});

// Gera bundle.js que carrega os módulos, testes, etc.
gulp.task('scripts', ['modules'], () => {
  return gulp.src([
    `!${root}/app/**/*.spec.js`,
    `${root}/app/**/*.module.js`,
    ...paths.scripts,
    './templates.js'
  ])
    .pipe(wrap('(function(angular){\n\'use strict\';\n<%= contents %>})(window.angular);'))
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(gulpif(argv.deploy, uglify()))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

// Serve os arquivos a partir da pasta dist
gulp.task('serve', () => {
  return server.init({
    files: [`${paths.dist}/**`],
    port: 4000,
    server: {
      baseDir: paths.dist
    }
  });
});

// Gera o diretório dist
gulp.task('copy', ['clean'], () => {
  return gulp.src(paths.static, { base: 'src' })
    .pipe(gulp.dest(paths.dist));
});

// Vigia as mudanças
gulp.task('watch', ['serve', 'scripts'], () => {
  gulp.watch([paths.scripts, paths.templates], ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', [
  'copy',
  'styles',
  'serve',
  'watch'
]);

gulp.task('production', [
  'copy',
  'scripts'
]);