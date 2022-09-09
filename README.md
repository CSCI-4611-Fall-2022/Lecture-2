# Lecture 2: Anatomy of a Graphics Program

Detailed explanation of this code can be found in the lecture [video](https://mediaspace.umn.edu/media/t/1_wpvnlxfz).

You can run the program on [GitHub pages](https://csci-4611-fall-2022.github.io/Lecture-2).

## Prerequisites

To work with this code, you will first need to install [Node.js 16.17.0 LTS](https://nodejs.org/en/) and [Visual Studio Code](https://code.visualstudio.com/). 

I also recommend you install the following useful VS Code extensions:

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (makes source control easier)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (static code analysis tool that can flag errors)
- [JavaScript Debugger](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly) (essential for real-time debugging)
- [WebGL GLSL Editor](https://marketplace.visualstudio.com/items?itemName=raczzalan.webgl-glsl-editor) (used for programming shaders later in the course)

## Topics

- Installation and setup
- Structure of a graphics program
- Introduction to TypeScript
- Drawing basic shapes with GopherGfx
- Event handlers
- Debugging errors
- Submitting assignments using GitHub Classroom

## Running

You will need to set up the initial project by pulling the dependencies from the node package manager with:

```
npm install
```

After that, you can compile and run a server with:

```
npm run start
```

Webpack should launch your program in a web browser automatically.  If not, you can run it by pointing your browser at `http://localhost:8080`.

## Notes

The location of the GopherGfx source code differs from the lecture video.  After class, I added GopherGfx to the `package.json`, so it will automatically pull the latest version from the [GitHub repository](https://github.com/illusioneering/GopherGfx).  If you want to check out the source code, it is located in `node_modules/gophergfx`.

## License

Material for [CSCI 4611 Fall 2022](https://csci-4611-fall-2022.github.io) by [Evan Suma Rosenberg](https://illusioneering.umn.edu/) is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).