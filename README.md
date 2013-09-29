# better-dom [![Build Status](https://api.travis-ci.org/chemerisuk/better-dom.png?branch=master)](http://travis-ci.org/chemerisuk/better-dom)
> Sandbox for living DOM extensions

[API DOCUMENTATION](http://chemerisuk.github.io/better-dom/)

## Installation
The simplest way is to use [bower](http://bower.io/):

    bower install better-dom

This will clone the latest version of the __better-dom__ with dependencies into the `bower_components` directory at the root of your project. Then just include scripts below on your web page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <!--[if IE]>
        <link href="bower_components/better-dom/better-dom.htc" rel="htc"/>
        <script src="bower_components/html5shiv/dist/html5shiv.js"></script>
    <![endif]-->
</head>
<body>
    ...
    <script src="bower_components/better-dom/better-dom.js"></script>
</body>
</html>
```

## Features
* [Living extensions](http://chemerisuk.github.io/better-dom/tutorial-extensions.html)
* [Smarter getter and setter](http://chemerisuk.github.io/better-dom/tutorial-setter.html)
* [Event handling best practices](http://chemerisuk.github.io/better-dom/tutorial-handling.html)
* [Microtemplating via emmet](http://chemerisuk.github.io/better-dom/tutorial-Microtemplating.html)
* [Easy localization](http://chemerisuk.github.io/better-dom/tutorial-Localization.html)
* compact size (~22kb minified and ~5kb gzipped)

## Usage examples
* [better-placeholder-polyfill](https://github.com/chemerisuk/better-placeholder-polyfill) - Placeholder attribute polyfill
* [better-elastic-textarea](https://github.com/chemerisuk/better-elastic-textarea) - Make textarea to expand on user input
* [better-dateinput-polyfill](https://github.com/chemerisuk/better-dateinput-polyfill) - input[type=date] polyfill
* [better-form-validation](https://github.com/chemerisuk/better-form-validation) - Form validation polyfill
* [better-prettydate](https://github.com/chemerisuk/better-prettydate) - Enhances time element to update text in realtime
* [better-ajaxify](https://github.com/chemerisuk/better-ajaxify) - Ajax websites engine

## Notes about old IEs
For IE8-9 support you have to incude conditional comment above into head. The excellent __html5shiv__ library is used to fix lack of support of new HTML5 elements in legacy browsers and htc file is used for implementing live extensions support.

#### Verify content-type header
HTC behaviors have to serve up with a content-type header of "text/x-component", otherwise IE will simply ignore the behavior. Many web servers are preconfigured to serve the correct content-type, but others are not.

    AddType text/x-component .htc

#### Same domain limitation
IE requires that the HTC behavior file must be in the same domain as the HTML page which uses it. If you try to load the behavior from a different domain, you will get an "Access Denied" error.

## Browser support
* Chrome
* Safari 5.2.2+
* Firefox 16+
* Opera 12.10+
* IE8+
