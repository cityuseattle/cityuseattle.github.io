---
layout: default
title: Environment Variable
parent: Common Solutions
---

# Environment Variable
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

 1. TOC
{:toc}

---

# What are environment variables?

Environment variables generally refer to some parameters used in the operating system to specify the operating environment of the operating system, such as the location of the temporary folder and the location of the system folder. The system maintains a global variable table at runtime, which all system processes can access.
Simply put, environment variables contain the information that the system and user applications will use, and are the parameters required for the system and applications to start and run.

## Classification of environment variables

### User and system environment variables

Modern operating systems are almost always multi-user operating systems. Different users can have different environment variables, and system environment variables are common to all users. When used, the system will append the user environment variable to the system environment variable, and then pass it to the software for use.

> According to the maximum number of users allowed to operate the computer at the same time, the operating system can be divided into the single-user operating system and multi-user operating system. Allowing multiple users to use the computer at the same time is called a multi-user operating system; on the contrary, allowing at most one user to operate the computer at the same time is called a single-user operating system.

### Permanent and temporary environment variables

* Permanent environment variables refer to environment variables that will not disappear due to software shutdown, power failure, or shutdown. These variables are typically stored in system configuration files.
* Temporary environment variables refer to the environment variables that exist during the running of the software. These environment variables are independent of each other and disappear when the software is closed.

# How to modify environment variables?

**Since the startup and operation of the system depend on environment variables, all operations need to be cautious! If the settings are wrong, it can seriously lead to downtime or even the worst case of not being able to boot the system. So make sure you know what you are doing before modifying environment variables.**

## For macOS

### Detect current terminal

macOS has a variety of built-in shells. Before adding environment variables, you must first know what shell you are using. Open a terminal:

```console
$ echo $SHELL
# Print the terminal you are running now
$ cat /etc/shells
# List all terminal paths. Common possible outputs:
/bin/sh
/bin/bash
/bin/zsh
```

> * `/bin/sh`: The Bourne Shell (sh) is the original UNIX shell and is available on every UNIX. Bourne Shell is quite good at shell programming convenience, but it is not as good at handling user interaction as other shells.
> * `/bin/bash`: Bourne Again Shell (bash) is the default shell of Linux, it is an extension of Bourne Shell. It is fully compatible with Bourne Shell and adds many features on the basis of Bourne Shell. It can provide functions such as command completion, command editing, and command history. It also includes many advantages of C Shell (csh) and Korn Shell (ksh), a flexible and powerful editing interface, and a user-friendly interface at the same time.
> * `/bin/zsh`: Z shell (zsh) is a powerful terminal software that can be used both as an interactive terminal and as a script interpreter. It is compatible with bash (not compatible by default unless it is set to emulate sh) and provides many improvements, such as more efficiency, better auto-completion, better filename expansion (wildcard expansion), better Array processing, high customizability.

macOS defaults to Bourne Shell (sh). By default, the environment variable configuration files and loading order in the macOS terminal are as follows:

```bash
/etc/profile
/etc/bashrc # sh
/etc/zshrc  # zsh
/etc/paths

~/.bash_profile # sh
~/.bashrc       # sh
~/.zshrc        # zsh
~/.bash_login
~/.profile
```

Where `/etc/profile`, `/etc/bashrc`, `/etc/zshrc` and `/etc/paths` are system-level environment variables, valid for all users. Their loading timing is different. Modifying them directly is not recommended.

This only guides how to add user environment variables.

### Set temporary environment variables

The `export` command is used to set or display environment variables. Environment variables added via `export` are only valid for this login cycle. (It will disappear after exiting the terminal.)

```console
$ export VERIABLE_NAME="value"
# Set the VARIABLE_NAME environment variable to value.
$ echo $VERIABLE_NAME
# Display the value of the VERIABLE_NAME environment variable
$ export -p
# View all current environment variables
$ env
# Another way to see all current environment variables
```

For example, if you wanted to append the path to the current `PATH` variable, you would pass command of the form:

```bash
export PATH="$PATH:<PATH 1>:<PATH 2>:<PATH 3>:...:<PATH N>"
```

### Set permanent user environment variables

If you want the value of a variable permanently across sessions and all Terminal windows, you must set it in the shell startup script.
To add user environment variables, just modify `~/.bash_profile` (Bourne Shell) or `~/.zshrc` (zsh).
These two files will run when the terminal starts. Therefore, permanent variables can be set by setting temporary environment variables in these two files.
Let's use `vi` to edit files, if you're new to `vi`, or you're looking for other ways to edit the text in the terminal, read [this tutorial]({{ site.baseurl }}{% link docs/tools/terminal_text_editor.md %}).

Replace `<file_path>` below with `~/.bash_profile` (Bourne Shell) or `~/.zshrc` (zsh).

```console
$ cp <file_path> <file_path>_add_var.bak
# Backup the file, if something goes wrong, you can restore it by
# $ cp <file_path>_add_var.bak <file_path>
$ vi <file_path>
# Edit the file, it will be created if it doesn't exist.
```

After entering the `vi` editing interface, press `i` to enter the editing mode.
At the end of the file, add the `export` command similar to set temporary environment variables.
For example, if I want to add the path `/usr/local/bin` to the front of `PATH`, I can type `export PATH="/usr/local/bin:$PATH"`.
When you are done editing, press `esc`, and type `:wq` to save and exit the `vi` editor.

In order for the modified content to take effect in the current terminal, enter the following command to make the terminal reload the file:

```bash
$ source <file_path>
```

## For Windows

### Set permanent variable

#### Windows 10 or newer

 1. Open the Start Search, type in "env", and choose "Edit the system environment variables":

    ![serarch_env](/assets/images/common/environment_variable/serarch_env.png)

    If you are using an operating system in another language, it may not be searchable. You can press `Win` + `E` to open the file explorer, right-click an empty location, select **Properties** to enter the System interface of the control panel, and then click **Advance system settings** in the list on the left.

    ![this_pc_right_click](/assets/images/common/environment_variable/this_pc_right_click.png)

    ![adv_sys_settings](/assets/images/common/environment_variable/adv_sys_settings.png)

 2. Click the "Environment Variables..." button.

    ![env_var_btn](/assets/images/common/environment_variable/env_var_btn.png)

 3. Set the environment variables as needed.

    * The `New` button adds an additional variable
    * The `Edit` button modifies the selected variable
    * The `Delete` button deletes the selected variable
    * Dismiss all of the dialogs by choosing **OK**. Your changes are saved!

 4. Next, this tutorial takes editing and adding a new path to the `PATH` environment variable as an example. Select the PATH variable in your user's environment variable or system's environment variable and click `Edit`.

    ![edit_path_env](/assets/images/common/environment_variable/edit_path_env.png)

 5. In the pop-up editing interface, click "New" and enter a new path. You can also click "Browse..." after clicking "New", navigate to the path you want, and click "OK" to add a path.

 6. When you are finished editing, save your changes by keep clicking **OK** until you close the "System Properties" window.

 7. If you want the changes to take effect in a running terminal, close the terminal and rerun it.

#### Other Windows

For other versions of Windows, find out how to edit environment variables yourself. It is worth noting that when editing the `PATH`, pay attention to the use of semicolons `;` to separate each path.

A possibly helpful article, this is the official Java help document, which mentions the specific method of setting the `PATH` variable: <https://www.java.com/en/download/help/path.html>

### Set temporary variable

#### Command Prompt (cmd)

```console
$ set VERIABLE_NAME="value"
# Set the VARIABLE_NAME environment variable to value.
$ echo %VERIABLE_NAME%
# Display the value of the VERIABLE_NAME environment variable
$ set
# View all current environment variables
```

#### PowerShell (the terminal used by default in VS Code)

```console
$ $env:VERIABLE_NAME="value"
# Set the VARIABLE_NAME environment variable to value.
$ $env:VERIABLE_NAME
# Display the value of the VERIABLE_NAME environment variable
$ dir env:
# View all current environment variables
```

#### Git Bash

```console
$ export VERIABLE_NAME="value"
# Set the VARIABLE_NAME environment variable to value.
$ echo $VERIABLE_NAME
# Display the value of the VERIABLE_NAME environment variable
$ export -p
# View all current environment variables
$ env
# Another way to see all current environment variables
```

## For Linux

The method is similar to that of macOS, please check the [For macOS](#for-macos) section and set it according to your personal research.

# Resource

* <https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables>
* <https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/set_1>
* <https://support.apple.com/guide/terminal/use-environment-variables-apd382cc5fa-4f58-4449-b20a-41c53c006f8f/mac>
