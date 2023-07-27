---
layout: default
title: emacs User Manual
parent: Tools
---

{: .no_toc }

## Introduction

Emacs is a powerful and extensible text editor designed for efficient text editing.
Emacs is available for many platforms, including Windows, Linux, macOS, and more.
Emacs offers numerous text editing features and can be extended using the Emacs Lisp programming language.

## Installation

Depending on your operating system, follow the steps below to install Emacs:

| Distro                                  |                              cmd |
| --------------------------------------- | -------------------------------: |
| **Linux (Debian-based distributions)**  |     `sudo apt-get install emacs` |
| **Linux (Red Hat-based distributions)** |         `sudo yum install emacs` |
| **macOS (using Homebrew)**              |             `brew install emacs` |
| **Windows**                             | [Download the installer][link-6] |

## Basic Concepts

Emacs operates primarily using keystrokes and commands. Some essential concepts include:

| Concept         | Definition                                  |
| --------------- | ------------------------------------------- |
| **Commands**    | Functions that perform various operations   |
| **Keybindings** | Keyboard shortcuts associated with commands |
| **Buffers**     | Instances of files or data being edited     |
| **Windows**     | Display areas for buffers                   |

## Basic Commands

| Command             | Outcome                               |
| ------------------- | ------------------------------------- |
| `Ctrl-x` + `Ctrl-f` | Open a file (Find file)               |
| `Ctrl-x` + `Ctrl-s` | Save the current buffer (Save buffer) |
| `Ctrl-x` + `Ctrl-c` | Quit Emacs (Exit)                     |
| `Ctrl-g`            | Cancel the current command            |
| `Ctrl-x` + `u`      | Undo last change (Undo)               |

**NOTE** | `Ctrl-x` means "_press the `Ctrl` key and the `x` key simultaneously_."

### Buffers and Windows

| Command        | Outcome                                  |
| -------------- | ---------------------------------------- |
| `Ctrl-x` + `b` | Switch to a different buffer             |
| `Ctrl-x` + `k` | Kill (close) the current buffer          |
| `Ctrl-x` + `2` | Split the window horizontally            |
| `Ctrl-x` + `3` | Split the window vertically              |
| `Ctrl-x` + `1` | Close all windows except the current one |
| `Ctrl-x` + `o` | Move to the next window                  |

### Search and Replace

| Command                    | Outcome                                               |
| -------------------------- | ----------------------------------------------------- |
| `Ctrl-s`                   | Incremental search forward                            |
| `Ctrl-r`                   | Incremental search backward                           |
| `Ctrl-Alt-%`               | Query replace (search and replace with prompting)     |
| `Alt-x` **replace-string** | Replace all occurrences of a string without prompting |

**NOTE**: `Alt-x` means "_press the Meta (or `Alt`) key and the `x` key simultaneously_."

### Editing Modes

Emacs provides various modes for different file types and tasks.

1. Modes can be
   - **major** (one per buffer)
   - **minor** (multiple per buffer).

Some popular major modes include:

| Command     | Outcome                                 |
| ----------- | --------------------------------------- |
| `text-mode` | Plain text editing                      |
| `prog-mode` | Programming language editing            |
| `org-mode`  | Notes, planning, and project management |

**NOTE**: To activate a specific mode, type `Alt-x` **mode-name** (e.g., `Alt-x` _org-mode_).

## Customizing Emacs

To customize Emacs, create an `init.el` file in your Emacs user directory (typically `~/.emacs.d/`). This file contains Emacs Lisp code that is executed when Emacs starts. Some common customizations include:

| Command                           | Outcome                                                            |
| --------------------------------- | ------------------------------------------------------------------ |
| **Set font size**                 | `(set-face-attribute 'default nil: height 120')`                   |
| **Enable line numbers**           | `(global-display-line-numbers-mode 1)`                             |
| **Set default indentation width** | `(setq-default indent-tabs-mode nil)` `(setq-default tab-width 4)` |

## Packages and Extensions

Emacs supports packages and extensions to enhance its functionality. Emacs includes a built-in package manager, which can be accessed using `Alt-x list-packages`. To install a package, follow these steps:

1. Open the package list: `Alt-x` _list-packages_
2. Find the package you want to install
3. Press `i` to mark the package for installation
4. Press `x` to execute the installation
5. You can also add external package repositories to your `init.el` file.

   1. To add the MELPA repository:

   ```elisp
   (require 'package)
   (add-to-list 'package-archives
               '("melpa" . "https://melpa.org/packages/") t)
   (package-initialize)
   ```

## Tips and Tricks

Learn Emacs Lisp to extend and customize Emacs

- Use `Alt-x` `apropos` to search for commands and functions related to a keyword
- Familiarize yourself with Emacs' built-in help system
  - `Ctrl-h` "**followed by a key or command**"
- Practice Emacs with interactive tutorials, such as:
  - `Alt-x` `help-with-tutorial`

### Troubleshooting

1. If Emacs behaves unexpectedly, check your `init.el` file for errors or conflicts
2. Consult the Emacs documentation (`Ctrl-h` + `r`) or online resources for assistance
3. Search for or ask questions on forums, such as Stack Overflow or Emacs Reddit community

## Additional Resources

1. [EMACS website][link-1]
2. [EMACS wiki][link-2]
3. [Stack Exchange][link-3]
4. [Reddit][link-4]
5. [Mastering Emacs][link-5]

<!-- Hyperlinks stored here -->

[link-1]: https://www.gnu.org/software/emacs/ "Official Emacs website"
[link-2]: https://www.emacswiki.org/ "Emacs Wiki"
[link-3]: https://emacs.stackexchange.com/ "Emacs Stack Exchange"
[link-4]: https://www.reddit.com/r/emacs/ "Emacs Reddit community"
[link-5]: https://www.masteringemacs.org/ "Mastering Emacs (book)"
[link-6]: https://www.gnu.org/software/emacs/download.html "Download the installer for Windows"
