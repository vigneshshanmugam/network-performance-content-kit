# Web Performance Guide



### Why?

Delay (milliseconds)      |          Users Reaction
--------------------------|--------------------------------------------
0 - 100                   |           Instant
100-300                   |         Slight perceptile delay
300-1000                  |         Task focus, perceptible delay
1 second+                 |        Mental context switch
10 seconds+               |        I'll come back later...


### Browser's Pipeline

![image](https://raw.githubusercontent.com/vigneshshanmugam/network-performance-content-kit/gh-pages/static/browser_pipeline.png)

### Objectives

In this section, We are going to learn the basic performance problems while creating a web application.

+ [Avoiding Redirects & Reducing Requests](https://github.com/vigneshshanmugam/network-performance-content-kit/blob/gh-pages/tutorials/Redirects_And_Requests.md)
+ [Minification & Gzipping](https://github.com/vigneshshanmugam/network-performance-content-kit/blob/gh-pages/tutorials/Minification_And_Gzipping.md)
+ [Caching HTTP Responses](https://github.com/vigneshshanmugam/network-performance-content-kit/blob/gh-pages/tutorials/HTTP_Caching.md)
+ [Images Optimisation & Compression](https://github.com/vigneshshanmugam/network-performance-content-kit/blob/gh-pages/tutorials/Image_Optimisation_And_Compression.md)
+ [Removing Rendering Blocking CSS & JS](https://github.com/vigneshshanmugam/network-performance-content-kit/blob/gh-pages/tutorials/RenderBlocking_CSS_And_JS.md)
+ [HTTP Pipelining & Domain Sharding](https://github.com/vigneshshanmugam/network-performance-content-kit/blob/gh-pages/tutorials/Pipelining_And_Domain_Sharding.md)

### Tools

+ [WebPagetest](http://www.webpagetest.org)
+ [PageSpeed](https://developers.google.com/speed/pagespeed/insights/)


PS: Most of the above mentioned techniques are applicable only to HTTP/1.1 


