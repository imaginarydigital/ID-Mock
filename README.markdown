# Front-end Boilerplate

A starter kit for projects where MCD delivers only front-end code.

+ [Project Structure](#project-structure)
+ [Assemble](#assemble)
+ [Grunt](#grunt)
+ [Bootstrap](#bootstrap)

## Project Structure

```
repo\
  app\                 # Working folder
    _data\             # JSON Data for Handlebars
    _includes\         # Handlebars Page Fragments
    _layouts\          # Handlebars Page Layouts
    _mock\             # Fake Project Assets
    assets\            # Project Assets
      css\             # 3rd Party CSS - Minified
      fonts\           # Fonts
      images\          # Images
      js\              # JS Source Code
        vendor\        # 3rd Party JS - Minified
      scss\            # SASS Source Code
  node_modules\        # Node Modules (Git Ignored)
  www\                 # Publish Folder - Server Web Root
  .gitignore           # Git Ignore File
  Gruntfile.js         # Grunt Script
  README.markdown      # This document
  package.json         # NPM Config File
```

### Understanding the Project Structure

There are two main folders in the project's repo: `app` and `www`. 

> `app` is where we work
>
> `www` is where we build to

`app` contains not only the simple assets we wish to deploy such as images and third party JavaScript files, it also includes source files that need additional processing such as handlebars templates and scss markup.

We should **never** place a file in `www` manually. Any file that needs to be deployed to the `www` folder should instead be placed in the `app` folder and deployed to the `www` using Grunt. In some cases, a simple copy task is all that is needed. In other cases, such as with images, the files should processed using the imagemin Grunt task.

## Assemble

We use [Assemble](http://assemble.io) to build static HTML files from [Handlebars](http://handlebarsjs.com/) templates. By using Handlebars, we are able to [separate content from presentation](http://en.wikipedia.org/wiki/Separation_of_presentation_and_content). 

## Grunt

We use [Grunt](http://gruntjs.com/), the JavaScript task runner to run Assemble as well as other utilities for compiling SASS, losslessly compressing images, optimizing JavaScript and more. Grunt requires [Node.js](http://nodejs.org/) to run.

To compile the project:

```bash
npm install
grunt
```

When working on the project, you can run a watch to monitor file changes and automatically run the right tasks for you.

```bash
grunt watch
```

## Bootstrap

We currently use [Bootstrap](http://getbootstrap.com) primarily for the responsive grid, but may at some point take advantage of other components.


