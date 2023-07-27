---
layout: default
title: Nano Tutorial
parent: Tools
---

# Basic **nano** Tutorial
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

 1. TOC
{:toc}


**`nano`** is a simple, easy-to-use text editor in Unix based systems like Linux and MacOS. This tutorial will guide you through the basic use of **`nano`**. Using **nano** is fairly straightforward, but there are a few key points to remember. Note that in **`nano`**'s documentation and prompts, the `Ctrl` and `Alt` keys are sometimes referred to as `^` and `M`, respectively.

## Opening and creating files

To open or create a file, use the **`nano`** command followed by the name of the file:|

   ```bash
   nano filename.txt
   ```

## Writing and editing text

Once you've opened a file, you can simply start typing to write or edit text.

### Always save your changes

It's important to remember to save your work frequently, especially if you're making lots of changes.

To save your changes, press `Ctrl+O` (writeOut). **`nano`** will ask you to confirm the filename. Press Enter to confirm.

### Know how to exit

To exit **`nano`**, press `Ctrl+X` (eXit). If you want to quit **`nano`** and you've made changes, the program will ask you if you want to save your changes. Press `Y` for yes or `N` for no.

## Basic navigation

Here are some specific shortcuts for navigating through your text:

| Command       | Description                        |
| ------------- | ---------------------------------- |
| `Ctrl+A`      | Move to the beginning of the line. |
| `Ctrl+E`      | Move to the end of the line.       |
| `Ctrl+Y`      | Page up.                           |
| `Ctrl+V`      | Page down.                         |
| `Alt+/ (M+/)` | Move to the end of the file.       |
| `Alt+\ (M+\)` | Move to the beginning of the file. |

## Keyboard Shortcuts

Here are the keyboard shortcuts you can use in **nano** for various operations:

| Command  | Description                           |
| -------- | ------------------------------------- |
| `Ctrl+A` | Move to the beginning of the line.    |
| `Ctrl+E` | Move to the end of the line.          |
| `Ctrl+Y` | Page up.                              |
| `Ctrl+V` | Page down.                            |
| `Ctrl+K` | Cut the current line or marked text.  |
| `Alt+6`  | Copy the current line or marked text. |
| `Ctrl+U` | Paste text.                           |
| `Ctrl+W` | Search for text.                      |
| `Ctrl+O` | Save your changes.                    |
| `Ctrl+X` | Exit **nano**.                        |
| `Alt+U`  | Undo the last operation.              |
| `Alt+E`  | Redo the last undone operation.       |
| `Ctrl+G` | Open the Help screen.                 |

### Cutting and pasting text

To cut text, move to the start of the text you want to cut, then press `Ctrl+K` (cut). `Alt+6` to copy text. You can then paste the cut text with `Ctrl+U` (uncut).

### Searching text

Press `Ctrl+W` (whereIs) to search for text in your file. Type in the text you want to search for and press Enter.

### GetHelp

Remember, you can always press `Ctrl+G` (getHelp) to display the help text in **`nano`**.

## Advanced Features

There are more advanced features and shortcuts in **`nano`** that can further improve your productivity.

### Undo and Redo

**`nano`** allows for undoing and redoing actions with

- `Alt+U` (undo)
- `Alt+E` (redo)

Remembering these shortcuts can save you a lot of time.

### Moving around your file

- Navigating around your file can be done more efficiently with keyboard shortcuts.
- These include
- `Ctrl+A` (beginning of the line)
- `Ctrl+E` (end of the line)
- `Ctrl+Y` (previous page)
- `Ctrl+V` (next page)
- `Alt+/` (end of file)
- `Alt+\` (beginning of file)

### Cutting, copying, and pasting

**nano** has a built-in capability to cut/copy lines or sections of text and paste them.

- `Ctrl+K` (cut)
- `Alt+6` (copy)
- `Ctrl+U` (paste).

### Searching

If you need to find a specific piece of text within your file, you can use the search function.

- `Ctrl+W` (search)

### Spell check

**nano** has a built-in spell checker you can use by pressing `Alt+T`.
**NOTE** that the spell checker may need additional configuration or packages to work on some systems.

### Enable soft wrapping

By default, **nano** does not wrap long lines.
This can be changed by starting **nano** with the `-w` flag or by using `Alt+L` in the program.

### Access Help

If you're stuck or can't remember a command, press `Ctrl+G` to open the Help screen in **nano**.

Overall, while **nano** is a basic text editor, it has a lot of powerful features that can help you quickly and efficiently edit text and code. As with any tool, the best way to get good at using **nano** is to practice. Over time, you'll get a sense of which commands and features you find most helpful.

## All Commands

| Command    | Alternate Cmd   | Description                                                    |
| ---------- | --------------- | -------------------------------------------------------------- |
| `Ctrl-G`   | (`F1`)          | Display this help text                                         |
| `Ctrl-X`   | (`F2`)          | Close the current buffer / Exit from **nano**                  |
| `Ctrl-O`   | (`F3`)          | Write the current buffer (or the marked region) to disk        |
| `Ctrl-R`   | (`Ins`)         | Insert another file into current buffer (or into new buffer)   |
| `Ctrl-W`   | (`F6`)          | Search forward for a string or a regular expression            |
| `Ctrl-\`   | (`Alt-R`)       | Replace a string or a regular expression                       |
| `Ctrl-K`   | (`F9`)          | Cut current line (or marked region) and store it in cutbuffer  |
| `Ctrl-U`   | (`F10`)         | Paste the contents of cutbuffer at current cursor position     |
| `Ctrl-T`   |                 | Execute a function or an external command                      |
| `Ctrl-J`   | (`F4`)          | Justify the current paragraph                                  |
| `Ctrl-C`   | (`F11`)         | Display the position of the cursor                             |
| `Ctrl-/`   | (`Alt-G`)       | Go to line and column number                                   |
| `Alt-U`    |                 | Undo the last operation                                        |
| `Alt-E`    |                 | Redo the last undone operation                                 |
| `Alt-A`    | (`Ctrl-6`)      | Mark text starting from the cursor position                    |
| `Alt-6`    | (`Alt-^`)       | Copy current line (or marked region) and store it in cutbuffer |
| `Alt-]`    |                 | Go to the matching bracket                                     |
| `Ctrl-Q`   |                 | Search backward for a string or a regular expression           |
| `Alt-Q`    |                 | Search next occurrence backward                                |
| `Alt-W`    |                 | Search next occurrence forward                                 |
| `Ctrl-B`   | (`◂`)           | Go back one character                                          |
| `Ctrl-F`   | (`▸`)           | Go forward one character                                       |
| `Ctrl-◂`   | (`Alt-Space`)   | Go back one word                                               |
| `Ctrl-▸`   | (`Ctrl-Space`)  | Go forward one word                                            |
| `Ctrl-A`   | (`Home`)        | Go to beginning of current line                                |
| `Ctrl-E`   | (`End`)         | Go to end of current line                                      |
| `Ctrl-P`   | (`▴`)           | Go to previous line                                            |
| `Ctrl-N`   | (`▾`)           | Go to next line                                                |
| `Alt-▴`    | (`Alt--`)       | Scroll up one line without moving the cursor textually         |
| `Alt-▾`    | (`Alt-+`)       | Scroll down one line without moving the cursor textually       |
| `Ctrl-▴`   | (`Alt-7`)       | Go to previous block of text                                   |
| `Ctrl-▾`   | (`Alt-8`)       | Go to next block of text                                       |
| `Alt-(`    | (`Alt-9`)       | Go to beginning of paragraph; then of previous paragraph       |
| `Alt-)`    | (`Alt-0`)       | Go just beyond end of paragraph; then of next paragraph        |
| `Ctrl-Y`   | (`PgUp`)        | Go one screenful up                                            |
| `Ctrl-V`   | (`PgDn`)        | Go one screenful down                                          |
| `Alt-\|`   | (`Ctrl-Home`)   | Go to the first line of the file                               |
| `Alt-/`    | (`Ctrl-End`)    | Go to the last line of the file                                |
| `Alt-◂`    | (`Alt-,`)       | Switch to the previous file buffer                             |
| `Alt-▸`    | (`Alt-.`)       | Switch to the next file buffer                                 |
| `Ctrl-I`   | (`Tab`)         | Insert a tab at the cursor position (or indent marked lines)   |
| `Ctrl-M`   | (`Enter`)       | Insert a newline at the cursor position                        |
| `Ctrl-H`   | (`Bsp`)         | Delete the character to the left of the cursor                 |
| `Ctrl-D`   | (`Del`)         | Delete the character under the cursor                          |
| `Alt-Bsp`  | (`Sh-Ctrl-Del`) | Delete backward from cursor to word start                      |
| `Ctrl-Del` |                 | Delete forward from cursor to next word start                  |
| `Alt-T`    |                 | Cut from the cursor position to the end of the file            |
| `Alt-J`    |                 | Justify the entire file                                        |
| `Alt-D`    |                 | Count the number of lines, words, and characters               |
| `Alt-V`    |                 | Insert the next keystroke verbatim                             |
| `Alt-}`    |                 | Indent the current line (or marked lines)                      |
| `Alt-{`    | (`Sh-Tab`)      | Unindent the current line (or marked lines)                    |
| `Alt-3`    |                 | Comment/uncomment the current line (or marked lines)           |
| `Ctrl-]`   |                 | Try and complete the current word                              |
| `Alt-:`    |                 | Start/stop recording a macro                                   |
| `Alt-;`    |                 | Run the last recorded macro                                    |
| `Alt-Del`  |                 | Throw away the current line (or marked region)                 |
| `Alt-Ins`  |                 | Place or remove an anchor at the current line                  |
| `Alt-PgUp` |                 | Jump backward to the nearest anchor                            |
| `Alt-PgDn` |                 | Jump forward to the nearest anchor                             |
| `F12`      |                 | Invoke the spell checker, if available                         |
| `Alt-B`    |                 | Invoke the linter, if available                                |
| `Alt-F`    |                 | Invoke a program to format/arrange/manipulate the buffer       |
|            |                 | Suspend the editor (return to the shell)                       |
| `Ctrl-L`   |                 | Refresh (redraw) the current screen                            |
| `Ctrl-L`   |                 | Center the line where the cursor is                            |
| `Ctrl-S`   |                 | Save file without prompting                                    |
| `Alt-Z`    |                 | Hidden interface enable/disable                                |
| `Alt-X`    |                 | Help mode enable/disable                                       |
| `Alt-C`    |                 | Constant cursor position display enable/disable                |
| `Alt-S`    |                 | Soft wrapping of overlong lines enable/disable                 |
| `Alt-N`    |                 | Line numbering enable/disable                                  |
| `Alt-P`    |                 | Whitespace display enable/disable                              |
| `Alt-Y`    |                 | Color syntax highlighting enable/disable                       |
| `Alt-H`    |                 | Smart home key enable/disable                                  |
| `Alt-I`    |                 | Auto indent enable/disable                                     |
| `Alt-K`    |                 | Cut to end enable/disable                                      |
| `Alt-L`    |                 | Hard wrapping of overlong lines enable/disable                 |
| `Alt-O`    |                 | Conversion of typed tabs to spaces enable/disable              |
| `Alt-M`    |                 | Mouse support enable/disable                                   |
