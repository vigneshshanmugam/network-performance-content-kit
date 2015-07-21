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

For More information on loading CSS asynchronously check [loadCSS](https://github.com/filamentgroup/loadCSS) by Filament Group.


##### Avoiding CSS Imports


### Blocking JS


##### Scripts at the Bottom


##### Async Loading


##### Defer Loading


Refer the demo [here](https://github.com/vigneshshanmugam/network-performance-content-kit/tree/gh-pages/demos/script-loading)

