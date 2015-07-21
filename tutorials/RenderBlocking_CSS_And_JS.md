# Render Blocking CSS & JS 

To optimize the critical rendering path and to reduce the first render time, We need to elimate and minimze the number of critical resouces on the page , reduce the number of bytes downloaded. 

### Blocking CSS

Since the browser needs CSS to construct the render tree, CSS resources are synchronous in nature. You should elimate the render blocking CSS

#### Inline Critical CSS


#### CSS document in the Head



#### Avoiding CSS Imports


### Blocking JS


#### Scripts at the Bottom


#### Async Loading


#### Defer Loading


Refer the demo here - 

