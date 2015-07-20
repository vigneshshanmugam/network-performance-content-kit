# Redirects & Requests

## Reducing HTTP Requests

 Most of the time in the Front End is tied up in downloading all the components in the page: images, stylesheets, scripts etc. Reducing the number of components (Images, CSS, JS, Third part scripts) in turn reduces the number of HTTP requests required to render the page.


## Minimizing No Of Redirects

Redirects on the other hand trigger an addtional HTTP Request-Response cycle and delay the page from rendering. Each direct will trigger an addtional roundtrip time

+ HTTP Request & Response - If the connection is Kept Alive.
+ DNS + TCP Handshake + TLS + HTTP - If the connection is new/closed.

As a result, You should minimize the number of redirects to improve the performance.



