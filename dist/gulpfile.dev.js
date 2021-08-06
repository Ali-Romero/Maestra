"use strict";

var _require = require('gulp'),
    task = _require.task,
    series = _require.series,
    parallel = _require.parallel;

var clean = require('./tasks/clean');

var logger = require('./tasks/logger');

var server = require('./tasks/server');

var stylus = require('./tasks/stylus');

var stylusWatch = require('./tasks/stylusWatch');

var pug = require('./tasks/pug');

var pugWatch = require('./tasks/pugWatch');

var images = require('./tasks/images');

var imagesWatch = require('./tasks/imagesWatch');

var icons = require('./tasks/icons');

var iconsWatch = require('./tasks/iconsWatch');

var assets = require('./tasks/assets');

var assetsWatch = require('./tasks/assetsWatch');

var js = require('./tasks/js');

var jsWatch = require('./tasks/jsWatch');

var svgSprite = require('./tasks/svgSprite');

var svgSpriteWatch = require('./tasks/svgSpriteWatch');

task('clean', clean);
task('logger', logger);
task('server', server);
task('stylus', stylus);
task('stylus:watch', stylusWatch);
task('pug', pug);
task('pug:watch', pugWatch);
task('images', images);
task('images:watch', imagesWatch);
task('icons', icons);
task('icons:watch', iconsWatch);
task('assets', assets);
task('assets:watch', assetsWatch);
task('js', js);
task('js:watch', jsWatch);
task('svgSprite', svgSprite);
task('svgSprite:watch', svgSpriteWatch);

function dev() {
  return series('clean', parallel('stylus', 'pug', 'images', 'icons', 'assets', 'js', 'svgSprite'), parallel('stylus:watch', 'pug:watch', 'images:watch', 'icons:watch', 'assets:watch', 'js:watch', 'svgSprite:watch'), 'logger', 'server');
}

function prod() {
  return series('clean', parallel('stylus', 'pug', 'images', 'icons', 'assets', 'js', 'svgSprite'));
}

exports["default"] = process.env.NODE_ENV === 'development' ? dev() : prod();