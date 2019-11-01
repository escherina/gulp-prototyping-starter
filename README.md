⚠ This project is now archived. The dependencies are very out-of-date - proceed with caution! ⚠

# gulp-prototyping-starter

Quick-start project for rapid prototyping in the browser, using node, gulp, and Ruby (for Sass compilation).

I wanted to create a starting point for new web projects. It makes designing in the browser a lot smoother by watching my source files and automatically reloading the browser when they change. Sass files are compiled into CSS (it includes my preferred normalize/reset CSS as a partial) and JavaScript files are concatenated to minimise browser requests. Both CSS and JS files are linted to avoid errors and keep code consistent and clean. Finally and optionally, it'll generate an optimised version of the site with minimised CSS and JS, and optimised image files.

## Features
- Generates CSS from Sass files, with sourcemaps and linting
- Concatenates JavaScript files, with sourcemaps and linting
- Watches files for changes and automatically reloads the browser
- Uses modular gulp tasks with config file for easy customisation of the build process
- Optionally, get the site ready for deployment with CSS and JS minification and image optimisation

# Installation

## 1. Install these:
- [Ruby](https://www.ruby-lang.org/). Tested with version 2.2.4. I suggest using [RubyInstaller](http://rubyinstaller.org/) on Windows (make sure to check the option to add Ruby executables to your PATH).
- [Node.js](https://nodejs.org) Tested with version 0.12.5. On Windows, make sure you choose the option to add to PATH.
- [LiveReload browser extension](http://livereload.com/extensions/) for Chrome, Firefox and Safari

### Check everything's working:
Open a new command line window and enter the following:
```
ruby -v
node -v
npm -v
```
If Ruby, Node and the node package manager are installed correctly, you'll get version numbers for each.

## 2. Open a command line and run these:
On Windows, do this as an administrator. I also recommend [ConEmu](https://conemu.github.io/) as a much-improved upgrade from the built-in cmd.

- `gem install bundler` - installs [Bundler](http://bundler.io/), which lets you manage Ruby gems
- `bundle install` - uses Bundler to quickly install all of the Ruby dependencies as defined in the `Gemfile` - here, the `sass` and `scss_lint` gems
- `npm install gulp -g` - uses the node package manager to globally install gulp on your machine - a requirement for running gulp locally
- `npm install` - uses the node package manager to install all of our gulp project dependencies, as defined in `package.json`

# Using gulp-prototyping-starter

## Run the main gulp task

Type `gulp` into your command line.

This is the default development task. It will do the following:
- delete the existing `build/development` directory
- start watching files in the `src` directory for changes
- start Browsersync
- copy html/htm/xml/json/txt files anywhere in `src` to `build/development`
- compile Sass files in `src/scss` into `build/development/css/main.css`, add vendor prefixes for older browsers, generate a source map, and lint
- concatenate JavaScript files in `src/js` into `build/development/js/scripts.js`, generate a source map, and lint
- copy image files anywhere in `src` into `build/development`
- launch a new browser window and serve `index.html` at `http://localhost:9999`

Now that it's watching your `src` directory, any changes to files therein will automatically reload your browser window, which is ideal for efficient development.

To quit the process and stop watching files, hit `CTRL-C` (`CMD-C` on a Mac) twice.

## Run the publish command

Type `gulp publish` into your command line.

This is the publish task. It will do the following:
- delete the existing `build/production` directory
- copy any html/htm/xml/json/txt files from `src` to `build/production`
- compile Sass files in `src/scss` into `build/production/css/main.css`, add vendor prefixes for older browsers, generate a source map, and minify
- concatenate JavaScript files in `src/js` into `build/production/js/scripts.js`, generate a source map, and minify
- copy image files anywhere in `src` into `build/production` and optimise them for web

The process will then end and you will be left with an optimised site in `build/production`. It doesn't watch files or lint your CSS/JS, as I assume this is done during the development process.
