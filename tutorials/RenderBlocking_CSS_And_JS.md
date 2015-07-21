# Render Blocking CSS & JS 

To optimize the critical rendering path and to reduce the first render time, We need to elimate and minimze the number of critical resources, reduce the number of bytes downloaded on the page. 

### Blocking CSS

The Critical rendering path requires both DOM & CSSOM(CSS Object Model) to construct the render tree. By default, Downloading CSS resources are blocking in nature which means the browser will hold rendering until the CSSOM is constructed. 

MDN with CSS

https://raw.githubusercontent.com/vigneshshanmugam/network-performance-content-kit/gh-pages/static/mdn_with_css.png

MDN without CSS - FOUC

https://raw.githubusercontent.com/vigneshshanmugam/network-performance-content-kit/gh-pages/static/mdn_without_css.png

The above example, showing the MDN website with and without CSS, demonstrates why rendering is blocked until CSS is available - without CSS the page is effectively unusable. The experience without the CSS is often referred to as FOUC(Flash of unstyled content).

#### Recommendations




#### Inline Critical CSS



#### CSS document in the Head



#### Avoiding CSS Imports


### Blocking JS


#### Scripts at the Bottom


#### Async Loading


#### Defer Loading


Refer the demo [here](https://github.com/vigneshshanmugam/network-performance-content-kit/tree/gh-pages/demos/script-loading)

