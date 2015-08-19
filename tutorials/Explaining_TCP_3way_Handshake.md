# TCP Handshake

All the connections to a domain begins with TCP handshake. To establish a connection, there are three steps involved

1. The Client(in our case Browser) picks a random sequence number between 0 to 4,294,967,295 and sends a SYN packet.
2. Server on receiving the SYN packet does two things
    * Increments the SYN packet by 1 (ACK).
    * Picks own random sequence number(SYN) and sends it.
3. Client increments both SYN & ACK by 1 and completes the handshake.


![TCP 3 Way Handshake](https://github.com/vigneshshanmugam/network-performance-content-kit/blob/gh-pages/static/3_way_handshake.png)