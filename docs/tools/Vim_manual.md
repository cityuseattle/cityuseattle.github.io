# VIM User Manual

## Table of Contents

- [VIM User Manual](#vim-user-manual)
	- [Table of Contents](#table-of-contents)
	- [Further Resources](#further-resources)
	- [Introduction](#introduction)
	- [Installation](#installation)
	- [Modes](#modes)
	- [Basic Commands](#basic-commands)
	- [Advanced Commands](#advanced-commands)
	- [Configuring VIM](#configuring-vim)
	- [Plugins](#plugins)
	- [Tips and Tricks](#tips-and-tricks)
	- [Troubleshooting](#troubleshooting)

## Further Resources

[R1] - Vim Website \
[R2] - Vim Wiki \
[R3] - Adventures \
[R4] - Casts \
[R5] - Cheat Sheet \
[R6] - Reddit

---

## Introduction

`VIM` **(Vi IMproved)** is a highly configurable and powerful text editor designed for efficient text editing. \
It is an enhanced version of the classic `vi` editor, originally developed for *Unix* systems. \
VIM is available for many platforms, including *Windows*, *Linux*, *macOS*, and more.

## Installation

Depending on your operating system, follow the steps below to install VIM:

- Linux (Debian-based distributions): `sudo apt-get install vim`
- Linux (Red Hat-based distributions): `sudo yum install vim`
- macOS (using Homebrew): `brew install vim`
- Windows: Download the installer from <https://www.vim.org/download.php>

## Modes

VIM operates in several modes, primarily:

- **Normal mode (default)**: navigation and manipulation of text
- **Insert mode**: insertion of new text
- **Visual mode**: selection of text
- **Command-line mode**: execution of VIM commands

## Basic Commands

|CMD|Purpose|
|---|---|
|`i:` |Enter Insert mode before the current cursor position|
|`a:` |Enter Insert mode after the current cursor position|
|`v:` |Enter Visual mode to select text|
|`::` |Enter Command-line mode|
|`Esc:`| Return to Normal mode|
|`:w:` |Save changes (write to disk)|
|`:q:` |Quit VIM (will not quit if there are unsaved changes)|
|`:wq` |or `:x:` Save changes and quit VIM|
|`:q!:`| Quit VIM without saving changes (force quit)|

## Advanced Commands

|Cmd|Purpose|
|---|---|
|`u:`|Undo last change|
|`Ctrl+r:`|Redo last undone change|
|`yy:`|Yank (copy) the current line|
|`dd:`|Delete the current line|
|`p:`|Put (paste) the yanked or deleted text after the cursor|
|`P:`|Put (paste) the yanked or deleted text before the cursor|
|`/pattern:`| Search for a pattern in the text|
|`n:`|Repeat the last search (find next occurrence)|
|`N:`|Repeat the last search in the opposite direction|

## Configuring VIM

To customize VIM, create a `.vimrc` file in your home directory. \
This file contains VIM commands and settings that are executed when VIM starts. \
Some common customizations include:

|Customization|CMD|
|---|---|
|**Enable syntax highlighting**|`syntax on`|
|**Set tabs to spaces**|`set expandtab`|
|**Set tab width**|`set tabstop=4`|
|**Enable line numbers**|`set number`|

## Plugins

VIM supports plugins to extend its functionality. \
Popular plugin managers include **Vundle**, **Pathogen**, and **Vim-Plug**. \
To install a plugin, follow the instructions provided by the plugin's author or the plugin manager documentation.

## Tips and Tricks

- Learn touch typing to improve VIM efficiency
- Use `.vimrc` to customize VIM to your preferences
- Learn and use VIM's built-in help system (:help)
- Practice VIM with tutorials and exercises, such as **vimtutor**

## Troubleshooting

If VIM behaves unexpectedly, check your `.vimrc` for errors
Consult the VIM documentation `(:help)` or online resources for assistance
Search for or ask questions on forums, such as Stack Overflow

<!--Links referenced at the top of the document-->

[R1]: <https://www.vim.org/> "Official VIM Website"
[R2]: <https://vim.fandom.com/wiki/Vim_Tips_Wiki> "VIM Wiki"
[R3]: <https://vim-adventures.com/> "VIM Adventures - a game to learn VIM commands"
[R4]: <http://vimcasts.org/> "Vim Casts - screencasts about VIM features and plugins"
[R5]: <https://vim.rtorr.com/> "VIM Cheat Sheet - a quick reference for VIM commands"
[R6]: <https://www.reddit.com/r/vim/> "VIM Reddit community"
