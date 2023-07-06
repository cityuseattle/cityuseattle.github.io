---
layout: default
title: Install Node.js and npm
parent: Environment
nav_order: 3
---

{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

<p align="center"><img alt="nodejs_npm_logo" src="/assets/images/environment/nodejs/nodejs_npm_logo.png"/></p>

# Resources

* Downloading and installing Node.js and npm - <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>
* About Node.js: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications." - <https://nodejs.org/en/about/>
* Node.js on Wikipedia - <https://en.wikipedia.org/wiki/Node.js>
* Node.js website - <https://nodejs.org/>
* npm Documentation - <https://docs.npmjs.com/>

# Section 1: Checking your version of npm and Node.js

 1. To see if you already have Node.js and npm installed and to check the installed version, run the following commands in your Terminal:

    ```bash
    $ node -v
    $ npm -v
    ```

    If your Node.js version is lower than v8, please uninstall your previous Node.js and follow the steps in Section 2.

# Section 2: Using a Node installer to install Node.js and npm

 1. This tutorial explains how to install Node.js and npm through the installer. If you want to install through the package manager, please refer to [this](https://nodejs.org/en/download/package-manager/) tutorial. If you want/need to install multiple versions of Node.js and npm on your computer, do your own research on how to install and use [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm).

 2. If you're using macOS or Windows, use one of the installers from the Node.js download page.  
    Open <https://nodejs.org/en/download/> then download the latest version of the Node.js installable archive file.  
    Be sure to install the version labeled long-term support (**LTS**).  
    (As of Sep 22, 2021, the latest Node.js LTS version is 14.17.6 which includes npm 6.14.15)

    ![nodejs_download_page](/assets/images/environment/nodejs/nodejs_download_page.png)

 3. Install Node.js

    ![installing_win](/assets/images/environment/nodejs/installing_win.png)

    ↑Windows, ↓macOS

    ![installing_mac](/assets/images/environment/nodejs/installing_mac.png)

 4. Please re-execute [Section 1](#section-1-checking-your-version-of-npm-and-nodejs) to verify the installation was successful.

# Section 3: Upgrading npm

Since the npm that comes with the Node.js installation package is not necessarily the latest, please update npm manually.

## 3.1: Upgrading on *nix (OSX, Linux, etc.)

(You may need to prefix these commands with sudo, especially on Linux, or OS X if you installed Node using its default installer.)

You can upgrade to the latest version of npm using:

```bash
$ npm install -g npm@latest
```

## 3.2: Upgrading on Windows

 1. First, ensure that you can execute scripts on your system by running the following command from an elevated PowerShell. To run PowerShell as Administrator, click Start, search for PowerShell, right-click PowerShell and select `Run as Administrator`.

    ```bash
    $ Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
    ```

 2. Then, to install and use this upgrader tool, run the following command (also from an elevated PowerShell or cmd.exe).

    ```bash
    $ npm install --global --production npm-windows-upgrade
    $ npm-windows-upgrade --npm-version latest
    ```

    The tool will show you a list of all the published and available versions of npm (including pre-release and beta versions). Choose the one you want to install and let it do its thing!

 3. For advanced usage of the tool, please read [the tool's documentation](https://github.com/felixrieseberg/npm-windows-upgrade).
