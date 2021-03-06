module.exports = function(grunt) {

  // Report elapsed execution time of grunt tasks.
  require('time-grunt')(grunt);

  grunt.initConfig({

    config: {
      src: 'app',
      dev: 'www'
    },

    // manifests
    //--------------------------------------------------------------
    // Contains data to populate the meta banner with

    pkg: grunt.file.readJSON('package.json'),

    // meta
    //--------------------------------------------------------------
    // Generates a banner to be placed on the top of all JS and CSS

    meta: {
      banner: '/*\n * <%= pkg.title %> - r<%= pkg.version %>\n' +
          ' * <%= grunt.template.today("yyyy-mm-dd") %> */' +
          grunt.util.linefeed + grunt.util.linefeed,
    },

    // watch
    //--------------------------------------------------------------
    // Watches for changed files and runs appropriate tasks

    watch: {
      markup: {
        files: ['<%= config.src %>/**/*.{hbs,json}'],
        tasks: ['assemble:dev']
      },
      styles: {
        files: ['<%= config.src %>/assets/scss/*.scss'],
        tasks: ['compass:dev']
      },
      images: {
        files: ['<%= config.src %>/assets/images/**/*.{png,jpg,gif}'],
        tasks: ['newer:imagemin']
      },
      scripts: {
        files: ['<%= config.src %>/assets/js/**/*.js'],
        tasks: ['jshint', 'concat:dev']
      },
      statics: {
        files: ['<%= config.src %>/assets/**/*.{png,jpg,jpeg,gif,webp,js}'],
        tasks: ['newer:copy:statics']
      }
    },

    // clean
    //--------------------------------------------------------------
    // Empties folders to start fresh

    clean: {
      all: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dev %>/*',
            '!<%= config.dev %>/video',

          ]
        }]
      }
    },

    // jshint
    //--------------------------------------------------------------
    // Make sure code styles are up to par and there are no obvious mistakes

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.src %>/assets/js/**/*.js',
        '!<%= config.src %>/assets/js/vendor/*'
      ]
    },

    // concat
    //--------------------------------------------------------------
    // Joins files together

    concat: {
      options: {
        banner: '<%= meta.banner %>',
        separator: grunt.util.linefeed + grunt.util.linefeed
      },
      dev: {
        src: [  // common files
          '<%= config.src %>/assets/js/app.js',
          '<%= config.src %>/assets/js/routes.js',
          '<%= config.src %>/assets/js/controller.js',
          '<%= config.src %>/assets/js/modal-trigger.js'
        ],
        dest: '<%= config.dev %>/js/main.js'
      },
      vendor: {
        src: [  // vendor files
          '<%= config.src %>/assets/js/vendor/jquery-2.1.1.min.js',
          '<%= config.src %>/assets/js/vendor/angular.min.js',
          '<%= config.src %>/assets/js/vendor/angular-route.min.js',
          '<%= config.src %>/assets/js/vendor/angular-animate.min.js',
          '<%= config.src %>/assets/js/vendor/angular-messages.min.js',
          '<%= config.src %>/assets/js/vendor/materialize.min.js'
          // '<%= config.src %>/assets/js/vendor/bootstrap.min.js'
        ],
        dest: '<%= config.dev %>/js/vendor.js'
      }
    },

    // assemble
    //--------------------------------------------------------------
    // Compiles Handlebars templates to static HTML

    assemble: {
      options: {

        site: {
          title: 'Sample Blog',
          email: 'your-email@yourdomain.com',
          description: 'Write your site description here. It will be used as your sites meta description as well!',
          baseurl: '',
          url: 'http://example.com',
          twitter: 'TwitterHandle',
          github:  'githubuser',
          facebook:  'FacebookUser'
        },

        today: '<%= grunt.template.today() %>',
        assets: '/',
        helpers: ['helper-prettify'],
        partials: ['<%= config.src %>/_includes/{,*/}*.hbs', '<%= config.src %>/_layouts/{,*/}*.hbs'],
        layoutdir: '<%= config.src %>/_layouts/',
        layout: false,
        data: ['<%= config.src %>/_data/**/*.{json,yml}'],
        prettify: {
          indent: 2,
          condense: true,
          padcomments: true
        }
      },
      dev: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/',
            src: ['*.hbs'],
            dest: '<%= config.dev %>'
          },
          {
            expand: true,
            cwd: '<%= config.src %>/views',
            src: ['*.hbs'],
            dest: '<%= config.dev %>/views/'
          },
          {
            expand: true,
            cwd: '<%= config.src %>/includes',
            src: ['*.hbs'],
            dest: '<%= config.dev %>/includes/'
          }
        ]
      }
    },

    // imagemin
    //--------------------------------------------------------------
    // Minify images using OptiPNG, pngquant, jpegtran and gifsicle.
    // Images will be cached and only minified again if they change.

    // Optimizes images for web
    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/images/',
          src: ['**/*.{jpg,png}'],
          dest: '<%= config.dev %>/images/'
        }]
      }
    },

    // compass
    //--------------------------------------------------------------

    compass: {
      options: {
        sassDir: '<%= config.src %>/assets/scss',
        cssDir: '<%= config.dev %>/css',
        imagesDir: 'images',
        javascriptDir: 'js',
        fontsDir: 'css/fonts',
        httpImagesPath: 'images',
        httpFontsPath: 'fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        outputStyle: 'expanded',
        noLineComments: false
      },
      dev: {}
    },

    // copy
    //--------------------------------------------------------------
    // Put files not handled in other tasks here

    copy: {
      statics: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/assets/includes',
            src: ['**'],
            dest: '<%= config.dev %>/includes'
          },
          {
            expand: true,
            cwd: '<%= config.src %>/assets/fonts/',
            src: ['**'],
            dest: '<%= config.dev %>/fonts'
          },
          // {
          //   expand: true,
          //   cwd: '<%= config.src %>/assets/css/vendor/',
          //   src: 'bootstrap.min.css',
          //   dest: '<%= config.dev %>/css/vendor'
          // },
          {
            expand: true,
            cwd: '<%= config.src %>/assets/css/vendor/',
            src: 'font-awesome.min.css',
            dest: '<%= config.dev %>/css/vendor'
          },
          {
            expand: true,
            cwd: '<%= config.src %>/assets/css/vendor/',
            src: 'magnific-popup.css',
            dest: '<%= config.dev %>/css/vendor'
          }
        ]
      }
    }
  });

  // Load plugins to provide the necessary tasks
  grunt.loadNpmTasks('assemble');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', [
    'clean',
    'jshint',
    'copy:statics',
    'assemble',
    'compass',
    'concat:dev',
    'concat:vendor',
    'imagemin'
  ]);

};