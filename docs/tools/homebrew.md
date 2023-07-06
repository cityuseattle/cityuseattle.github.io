---
layout: default
title: Install Homebrew
parent: Tools
---

# Install Homebrew
{: .no_toc }

<p align="center"><img alt="homebrew_logo" src="/assets/images/tools/homebrew/homebrew_logo.png" width="100" height="100"/></p>

## Table of contents
{: .no_toc .text-delta }

 1. TOC
{:toc}

---

[Homebrew](https://brew.sh/) calls itself the missing package manager for macOS and is an essential tool for Mac developers.

# Check if Homebrew is installed

To see if you already have Homebrew installed and to check the installed version, run the following commands in a terminal:

```bash
$ brew --version
# Display the version of Homebrew.
```

If you have Homebrew installed, skip the [Installing](#installing) section.

# Installing

Before you can run Homebrew you need to have the **Command Line Tools for Xcode** installed. It include compilers and other tools that will allow you to build things from source, and if you are missing this it's available through the App Store > Updates. You can also install it from the terminal by running the following:

```bash
$ sudo xcode-select --install
```

To install Homebrew run the following in a terminal:

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This command will download and execute Homebrew's installation script. The script explains what it will do and then pauses before it does it. Please follow the steps on the screen carefully.

> The content of this section mainly comes from [here](https://sourabhbajaj.com/mac-setup/Homebrew/).


![install_brew_output](/assets/images/tools/homebrew/install_brew_output.png)

If you do not manually install Xcode Command Line Tools, the following process may occur during the installation process:

 1. If it asks you to press RETURN to continue, then press the RETURN (Enter key on the keyboard).

    ![installing_brew_output](/assets/images/tools/homebrew/installing_brew_output.png)

 2. Then choose `Install`.

    ![xcode_command](/assets/images/tools/homebrew/xcode_command.png)

# Setting environment variable

If your system is macOS 10.14 Mojave and newer, you can skip this section.

To make the Homebrew-installed programs available in your shell, you need to add your Homebrew installation location to your `$PATH`. For older versions of macOS, do the following:

You change your path by adding `/usr/local/bin` to your PATH environment variable. This can be done on a per-user basis by adjusting PATH in your `~/.bash_profile`. To do this, run:

```bash
$ echo 'PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
$ source ~/.bash_profile
```

> If you're using `zsh`, you should do this for `~/.zshrc` in addition to `~/.bash_profile`.

Alternatively, you can also insert `/usr/local/bin` before the first line of `/etc/paths` to change the global default paths order, for all users and all major shells. An admin password will be required if you modify the file.

Then, to be able to use `brew` you need to start a new terminal session. After that you should make sure everything is working by running:

```bash
$ brew doctor
# Check system for potential problems.
```

If everything is good, you should see no warnings, and a message that you are "ready to brew!".

> The content of this section mainly comes from [here](https://sourabhbajaj.com/mac-setup/Homebrew/).

# Updating

To update all package definitions (formulae) and Homebrew itself, run the following commands in your terminal twice:

```bash
$ brew update
```

# FAQs

If you encounter problems during installation or use, please try to solve the problem by doing your own research first. If you really can't solve it, you can ask your TA for help.

If the problem you're having is a bug with Homebrew itself, please read [Troubleshooting in the official documentation](https://docs.brew.sh/Troubleshooting).

If you have doubts in the process of using Homebrew or do not know what commands to use or how to operate, please read the [FAQ in Homebrew's official documentation](https://docs.brew.sh/FAQ).

> Please do not run Homebrew with administrator privileges (`sudo`/`su`). Homebrew itself is trusted, but scripts that Homebrew runs when installing other packages should not be trusted. Details can be found [here](https://docs.brew.sh/FAQ#why-does-homebrew-say-sudo-is-bad).

# Tips & Cheatsheets

This section is not intended as a complete documented list of all commands and for that you should rather visit the [official `brew` documentation page](https://docs.brew.sh/Manpage).

> The content of this section mainly comes from [here](https://dev.to/code2bits/homebrew---basics--cheatsheet-3a3n).

## Brew Help

It is important to understand how to get help on brew after you have successfully installed it. The following commands intent to provide assistance on how to use the brew command on macOS.

```bash
# Display the version of Homebrew.
$ brew --version
# Print Help Information
$ brew help
# Print Help Info for a brew command
$ brew help <sub-command>
# Check system for potential problems.
$ brew doctor
```

## Brew Update

Part of the power of Homebrew is it makes it easy for you to keep your applications up to date, and others on a specific version. These set of commands are used to update Homebrew itself, and also the applications that was installed with it.

```bash
# Fetch latest version of Homebrew and formula
$ brew update
# Show formulae with an updated version available
$ brew outdated
# Upgrade all outdated and unpinned brews
$ brew upgrade
# Upgrade only the specified brew
$ brew upgrade <formula>
# Prevent the specified formulae from being upgraded
$ brew pin <formula>
# Allow the specified formulae to be upgraded.
$ brew unpin <formula>
```

## Brew Repositories

It is possible to add additional repositories to Homebrew by making use of the `brew tap` command. This allows you to install additional applications that does not form part of the default set of repositories.

```bash
# List all the current tapped repositories (taps)
$ brew tap
# Tap a formula repository from Github using https for tap https://github.com/user/homebrew-repo
$ brew tap <user/repo>
# Tap a formula repository from the specified URL
$ brew tap <user/repo> <URL>
# Remove the given tap from the repository
$ brew untap <user/repo>
```

## Brew Cask

Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.

```bash
# Tap the Cask repository from Github.
$ brew tap homebrew/cask
# List all the installed casks .
$ brew cask list
# Search all known casks based on the substring text.
$ brew search <text>
# Install the given cask.
$ brew cask install <cask>
# Reinstalls the given Cask
$ brew cask reinstall <cask>
# Uninstall the given cask.
$ brew cask uninstall <cask>
```

## Brew Search, Install, Remove

The following commands are used to search, list and install the different applications and tools that are available within the Homebrew repository.

```bash
# List all the installed formulae.
$ brew list
# Display all locally available formulae for brewing.
$ brew search
# Perform a substring search of formulae names for brewing.
$ brew search <text>
# Display information about the formula.
$ brew info <formula>
# Install the formula.
$ brew install <formula>
# Uninstall the formula.
$ brew uninstall <formula>
```

## Brew Cleanup

Remove stale lock files and outdated downloads for formulae and casks, and remove old versions of installed formulae.

```bash
# Remove older versions of installed formulae.
$ brew cleanup
# Remove older versions of specified formula.
$ brew cleanup <formula>
# Display all formula that will be removed (dry run)
$ brew cleanup -n
```
