# PolyglotCoder API 🚀

PolyglotCoder API is a versatile service for executing code written in various programming languages. Developers can integrate this API into their applications to enable real-time code execution and feedback.


Arcticle about this project [read](https://www.linkedin.com/pulse/simplifying-code-execution-across-platforms-arsen-matevosyan-ub8fe)

## Usage 📝

### API Endpoints

- **POST /execute**: Submit code snippets for execution. Payload parameters:
  - `"code"`: The script to execute.
  - `"language"`: Programming language (e.g., java, py, cpp).
  - `"input"` (optional): Input data for the script.

- **GET /list**: returns supported languages and infos for them like versions and commands

### Response

Receive real-time feedback on code execution, including output, errors, and status information.

## Features 🔑

- **Multi-Language Support**: Execute code in Java, Python, C++, C, GoLang, C#, NodeJS, and more.
- **Real-Time Execution**: Immediate feedback for rapid iteration and debugging.
- **Scalable Infrastructure**: Handles high volumes of requests smoothly.
- **Secure Environment**: Executes code in a sandboxed environment for safety.

## Get Started 🚀
npm i
npm run start

with docker
```bash
docker build --no-cache -t execute-code .

docker run -p 3000:3000 execute-code
```

## Support 💬

For questions or support requests, [open an issue](https://github.com/Arsen-go/execute-code/issues).

## Stay Updated 📩

Follow me on [Linkedin](https://www.linkedin.com/in/arsen-matevosyan-592b071b4/) .

Integrate PolyglotCoder API into your applications for seamless code execution and rapid development! 🌟

## Source Code 📁

Check out the source code on [GitHub](https://github.com/Arsen-go/execute-code)!

