# Emacs User Manual

## Table of Contents:
	
1. Introduction
1. Installation
1. Basic Concepts
1. Basic Commands
1. Buffers and Windows
1. Search and Replace
1. Editing Modes
1. Customizing Emacs
1. Packages and Extensions
1. Tips and Tricks
1. Troubleshooting
1. Further Resources

---

## Introduction

Emacs is a powerful and extensible text editor designed for efficient text editing. \
It is available for many platforms, including Windows, Linux, macOS, and more. \
Emacs offers numerous features and can be extended using the Emacs Lisp programming language.

## Installation

Depending on your operating system, follow the steps below to install Emacs:

Linux (Debian-based distributions): sudo apt-get install emacs
Linux (Red Hat-based distributions): sudo yum install emacs
macOS (using Homebrew): brew install emacs
Windows: Download the installer from https://www.gnu.org/software/emacs/download.html

## Basic Concepts

Emacs operates primarily using keystrokes and commands. Some essential concepts include:

Commands: Functions that perform various operations
Keybindings: Keyboard shortcuts associated with commands
Buffers: Instances of files or data being edited
Windows: Display areas for buffers

## Basic Commands

C-x C-f: Open a file (Find file)
C-x C-s: Save the current buffer (Save buffer)
C-x C-c: Quit Emacs (Exit)
C-g: Cancel the current command
C-x u: Undo last change (Undo)
Note: "C" denotes the Control key. For example, "C-x" means "press the Control key and the 'x' key simultaneously."

## Buffers and Windows

C-x b: Switch to a different buffer
C-x k: Kill (close) the current buffer
C-x 2: Split the window horizontally
C-x 3: Split the window vertically
C-x 1: Close all windows except the current one
C-x o: Move to the next window

Search and Replace

C-s: Incremental search forward
C-r: Incremental search backward
C-M-%: Query replace (search and replace with prompting)
M-x replace-string: Replace all occurrences of a string without prompting
Note: "M" denotes the Meta (Alt) key. For example, "M-x" means "press the Meta (or Alt) key and the 'x' key simultaneously."

## Editing Modes

Emacs provides various modes for different file types and tasks. Modes can be major (one per buffer) or minor (multiple per buffer). Some popular major modes include:

text-mode: Plain text editing
prog-mode: Programming language editing
org-mode: Notes, planning, and project management
To activate a specific mode, type M-x mode-name (e.g., M-x org-mode).

## Customizing Emacs

To customize Emacs, create an init.el file in your Emacs user directory (typically ~/.emacs.d/). This file contains Emacs Lisp code that is executed when Emacs starts. Some common customizations include:

Set font size: (set-face-attribute 'default nil :height 120)
Enable line numbers: (global-display-line-numbers-mode 1)
Set default indentation width: (setq-default indent-tabs-mode nil) (setq-default tab-width 4)

## Packages and Extensions

Emacs supports packages and extensions to enhance its functionality. Emacs includes a built-in package manager, which can be accessed using M-x list-packages. To install a package, follow these steps:

Open the package list: M-x list-packages
Find the package you want to install
Press i to mark the package for installation
Press x to execute the installation
You can also add external package repositories to your init.el file. For example, to add the MELPA repository:

```elisp
(require 'package)
(add-to-list 'package-archives
             '("melpa" . "https://melpa.org/packages/") t)
(package-initialize)
```

## Tips and Tricks

Learn Emacs Lisp to extend and customize Emacs
Use M-x apropos to search for commands and functions related to a keyword
Familiarize yourself with Emacs' built-in help system (C-h followed by a key or command)
Practice Emacs with interactive tutorials, such as M-x help-with-tutorial

## Troubleshooting

If Emacs behaves unexpectedly, check your init.el file for errors or conflicts
Consult the Emacs documentation (C-h r) or online resources for assistance
Search for or ask questions on forums, such as Stack Overflow or Emacs Reddit community

## Further Resources

Official Emacs website: <https://www.gnu.org/software/emacs/>
Emacs Wiki: <https://www.emacswiki.org/>
Emacs Stack Exchange: <https://emacs.stackexchange.com/>
Emacs Reddit community: <https://www.reddit.com/r/emacs/>
Mastering Emacs (book): <https://www.masteringemacs.org/>
