# Render Blocking CSS & JS 

To optimize the critical rendering path and to reduce the first render time, We need to elimate and minimze the number of critical resources, reduce the number of bytes downloaded on the page. 

### Blocking CSS

The Critical rendering path requires both DOM & CSSOM(CSS Object Model) to construct the render tree. By default, Downloading CSS resources are blocking in nature which means the browser will hold rendering until the CSSOM is constructed. 

MDN with CSS

![image](https://raw.githubusercontent.com/vigneshshanmugam/network-performance-content-kit/gh-pages/static/mdn_with_css.png)

MDN without CSS - FOUC

![image](https://raw.githubusercontent.com/vigneshshanmugam/network-performance-content-kit/gh-pages/static/mdn_without_css.png)

The above example showing the MDN website with and without CSS, demonstrates why rendering is blocked until CSS is available - without CSS the page is effectively unusable. The experience without the CSS is often referred to as FOUC(Flash of unstyled content).

**CSS is a render blocking resource, get it down to the client as soon and as quickly as possible to optimize the time to first render!**

##### CSS document in the Head

Put all the external Style Sheets as early as possible in the head tags so that the browse can discover the <link> tags and dispatch the request for CSS as soon as possible.

```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="example.css" rel="stylesheet" type="text/css">
</head>
<body></body>
</html>
```

##### Inline Critical CSS

Split your CSS in to two parts: inline part which is used to style Above The Fold(ATF) content and remaining part that can be downloaded later.

Inlining the ATF CSS in the HTML will reduce one round trip time required to fetch the resource and improves the time to first render of our pages. Make sure you are not inlining large CSS which will increase the size of the HTML.
The CSS for below the fold content can be downloaded when the page is ready.

```html
<!DOCTYPE html>
<html>
<head>
    <style type="text/css">
        <!-- Your inline CSS -->
        body{
            padding: 0;
            margin: 0 auto;
        }
    </style>
    <script type="text/javascript">
        (function(d){
            var l = d.createElement("link"), 
                el = d.getElementsByTagName("script")[0];
            l.rel = "stylesheet";
            l.href = "async.css";
            el.parentNode.insertBefore(l, el);
        })(window.document)
    </script>
</head>
<body>
</body>
</html>
```

 + Check out Addy Osmani's [critical](https://github.com/addyosmani/critical) package on extracting and inlining the Critical CSS. 

 + For More information on loading CSS asynchronously check [loadCSS](https://github.com/filamentgroup/loadCSS) by Filament Group.

### Blocking JS

JavaScript resources blocks the browser from parsing the page unless marked as async, defer or added via a special JavaScript snippet. They force the browser to block DOM construction, fetch the script, and execute it before the browser can continue processing the rest of the page which reduces the first render time.

##### Scripts at the Bottom

Moving the scripts at the bottom of the page will make sure the users don't have to wait for a script to finish downloading before they see something in your application.

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <!-- Your Content Goes Here -->
    <script type="text/javascript" src="main.js"></script>
</body>
</html>
```

This will still be requested synchronously which means the script will be downloaded before *domContentLoaded* and *onLoad* Event.

##### Async Loading

There are two ways to download scripts without blocking the browser from DOM construction. 

    1. Using async attribute.
    2. Through JavaScript snippet.




##### Using defer attribute

On the other hand, you can inform the browser to continue downloading and parsing the document instead of blocking on the script using [defer](https://msdn.microsoft.com/library/ms533719(v=vs.85).aspx) attribute. Defer is useful in the older IE browsers(5.5-9) that does not support async attribute.

Deffered scripts are guarenteed to be executed before DOMContentLoaded event in the order they were inserted. Unfortunately, the execution [order implementation is buggy](https://github.com/h5bp/lazyweb-requests/issues/42) and cannot be relied on.

You can combine defer with async to improve the performance.

```html
<!-- Modern browsers will use 'async', older browsers will use 'defer' -->
<script async defer src="main.js" type="text/javascript"></script>
```

Refer the demo [here](https://github.com/vigneshshanmugam/network-performance-content-kit/tree/gh-pages/demos/script-loading)

