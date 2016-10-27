# UI Engineering


## Useful UI snippets for D3 Angular components and more

Mostly [Angular](https://angularjs.org/), [D3](https://d3js.org/) and [ES5](http://kangax.github.io/compat-table/es5/) code, with a dash of Angular Material.

The HTML files are generated from [Pug](https://pugjs.org) files, which I consider a more comfortable way to _write_ & _read_ HTML, go ahead and compare the two files.
CSS files are generated from [Sass](http://sass-lang.com/) files, same reasons apply for using it over plain CSS.

Just `git clone` and open `index.html` in your browser to see the components in action.

Versions for the libraries used:

* Angular: 1.5 ([style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md))
* D3: 4


### fluid-svg

In this folder you'll find the template I use every time I have to create a new D3 component/directive.

It's the easiest way to setup a new SVG element that's fluid and preserves the aspect ratio when resizing the window.

Some important stuff to observe about this is that it's self-sufficient. It includes a mini template that's going to be the container for the visualization (SVG).
It does not need an external template, but it could be added in case you need a more complex layout.
Nevertheless I'd advise against it, since that should be done on the parent elements.

Resize the browser and see how it the aspect ratio is preserved.


### configurable-svg

Here you'll find an example for an Angular component that reacts to changes to its width and height.

This example builds on `fluid-svg`, and shows how to update the SVG element with D3 when the component's attributes are modified.


## Plain version

If you want to see the demos with a minimal look & feel, open the `index.html` file.


## Material Design version with [Angular Material](https://material.angularjs.org/latest/)

If you want to see the demos with a Material Design look & feel, open the `index-md.html` file.
There you can see how the component is reused in a different UI context, with minimal effort.


## Recommendations

When doing web development you should be using something that reloads your browser whenever you change your files.

If you are not, then do yourself a favor and checkout [Browsersync](https://browsersync.io/)

The command I use when implementing these demos is something like this:

```
browser-sync start --server --files '*.html' 'app/**/*.js' 'app/**/*.css' 'fluid-svg/**/*.js' 'fluid-svg/**/*.css' 'configurable-svg/**/*.js' 'configurable-svg/**/*.css'
```

I know, I know, I'll be setting up `gulp` soon.

Enjoy. ;)


## Last but not least

If you have any suggestions (or questions) as to what would you like to see, open an issue and let's discuss.
