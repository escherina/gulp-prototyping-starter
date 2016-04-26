var src               = 'src';
var development       = 'build/development';
var production        = 'build/production';

module.exports = {
  browsersync: {
    server: {
      baseDir: [development]
    },
    port: 9999,
    files: [
      development + '/**/*.{html,htm,xml,json,txt}',
      development + '/css/*.css',
      development + '/js/*.js',
      development + '/**/*.{png,jpeg,jpg,gif,svg,ico}'
    ]
  },
  delete: {
    development: {
      src: [development]
    },
    production: {
      src: [production]
    }
  },
  html: {
    src: src + '/**/*.{html,htm,xml,json,txt}',
    dest: development,
    production: {
      src: src + '/**/*.{html,htm,xml,json,txt}',
      dest: production
    }
  },
  sass: {
    src: src + '/scss/*.{sass,scss}',
    dest: development + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: true
    }
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  scripts: {
    src: src + '/js/*.js',
    dest: development + '/js'
  },
  images: {
    src: src + '/**/*.{png,jpeg,jpg,gif,svg,ico}',
    dest: development
  },
  watch: {
    html: src + '/**/*.{html,htm,xml,json,txt}',
    sass: src + '/scss/**/*.{sass,scss}',
    scripts: src + '/js/**/*.js',
    images: src + '/**/*.{png,jpeg,jpg,gif,svg,ico}'
  },
  stylelint: {
    src: [
      src + '/scss/**/*.{sass,scss}',
      '!' + src + '/scss/_generic.normalize.scss'
    ],
    options: {
      failAfterError: false,
      reporters: [
        {formatter: 'string', console: true}
      ]
    }
  },
  jshint: {
    src: src + '/js/*.js'
  },
  optimise: {
    css: {
      src: development + '/css/*.css',
      dest: production + '/css/',
      options: {
        discardComments: true,
        discardEmpty: true,
        mergeLonghand: true,
        safe: true
      }
    },
    js: {
      src: development + '/js/*.js',
      dest: production + '/js/',
      options: {}
    },
    images: {
      src: development + '/**/*.{jpg,jpeg,png,gif,svg,ico}',
      dest: production,
      options: {
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }
    }
  }
};
