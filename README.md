<p align="center"><img src="https://i.ibb.co/XVWwd0T/wss-Protocol.png" height="200"></p>
<h1 align="center">wssProtocol</h1>
Works similar to [the wisp protocol](https://wisp.mercurywork.shop), but made more to work for production, mass-deployment, customizability, simplicity and handling websocket connections established by the [wssProtocol client](https://github.com/yotsubabeat), aswell as a proof-of-concept(s).

<h1 align="center">Dependencies</h1>
Requires the NodeJS javascript framework to run.

<h1 align="center">Benefits</h1>
With the use of [wssProtocol client](https://github.com/yotsubabeat), the protocol can be runned with the use of a plain HTML document runned on any browser,
You will not need to install/download anything else but the [wssProtocol client](https://github.com/yotsubabeat), and a proper web browser.

The `consepts/` folder provides alternative PHP documents which can be runned by the HTTP server, including a real-time request analytics for administrative management, and more.

<h1 align="center">Configuration</h1>
Navigate to `uv.config.cjs` for configuration of the bare server and service prefix.

For configuration of the websocket and HTTP server port, please declare `PORT=<YOUR_PREFERED_PORT>` in the environment variables (`.env`).

For configuration of the file location of the HTML document runned by the HTTP server, please declare `HTTP='<FILE_PATH>'` in the environment variables (`.env`).
