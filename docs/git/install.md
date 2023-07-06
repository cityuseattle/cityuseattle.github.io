---
layout: default
title: Install Git
parent: Git
nav_order: 2
---


{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


# Install Git on macOS

## Section 1: Checking your version of Git

 1. Open a new Terminal to type and run the following command to see if you already have Git installed. This will also check the installed version:

    ```shell
    $ git --version
    ```

    ![git_version_output](/assets/images/git/install/git_version_output.png)

 2. If you got an error and Git is not recognized by your machine, then follow [Section 2](#section-2-using-brew-package-manager-to-install-git) to install it.

## Section 2: Using brew package manager to install Git

 1. There are several options for installing Git on macOS. Note that any non-source distributions are provided by third parties and may not be up to date with the latest source release.  
    In this tutorial, we will use Homebrew, a package manager in macOS, to install Git. If you don't like to use Homebrew, you can follow <https://git-scm.com/download/mac> to install Git in another way.  
    Note: if you encounter problems while installing Git using another way, the TA may not be able to help solve your problem.

 2. Follow the steps in the [tutorial]({{ site.baseurl }}{% link docs/tools/homebrew.md %}) to install Homebrew if you don't already have it. For more information about what Homebrew can do, visit the following link: <https://brew.sh/>.

 3. Once Homebrew is installed, type the following in the terminal to update Homebrew and install Git.

    ```shell
    $ brew update
    $ brew install git
    ```

 4. Please re-execute [Section 1](#section-1-checking-your-version-of-git) to verify the installation is successful.

## Section 3: First-time Git setup

 1. **First of all**, if you encounter any problems in this section, please read the official GitHub tutorial first, which can solve most of your problems. <https://docs.github.com/en/authentication/connecting-to-github-with-ssh>

 2. The first thing you should do when you install Git is set your username and email address. This is important because every Git commit uses this information, and it's immutably baked into the commits you start creating:

    ```shell
    $ git config --global user.name "<username>"
    $ git config --global user.email <email>
    ```

    > **Note:** replace `<username>` to your GitHub username, and `<email>` to the email address you used to register GitHub.
    >
    > If you want to know more about the Git config command, you can see here: <https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup>.

 3. Please read [this tutorial]({{ site.baseurl }}{% link docs/common/gen_ssh_key.md %}) to generate SSH keys. Print the public key, then please select and copy the output.

    ```shell
    $ cat ~/.ssh/id_<algorithm>.pub
    ```

    > Please replace `<algorithm>` with a specific algorithm, such as `rsa`, `ecdsa`, or `ed25519`. It depends on what algorithm you used to generate the SSH key.

 4. Open the GitHub website. In the upper-right corner of any GitHub page, click your profile photo, then click **Settings**.

    ![github_settings_dropdown_menu](/assets/images/git/install/github_settings_dropdown_menu.png)

 5. Then select the "*SSH and GPG keys*" section along the left-hand side. From there, click the "*New SSH key*" button.

    ![github_ssh_setting_page](/assets/images/git/install/github_ssh_setting_page.png)

 6. In the "*Title*" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".

 7. Paste the contents of the public-key file you coped in this section step 3 into the "*Key*" field and click "*Add key*".

    ![github_add_ssh_key](/assets/images/git/install/github_add_ssh_key.png)

 8. If prompted, confirm your GitHub password.

    ![github_confirm_pw](/assets/images/git/install/github_confirm_pw.png)

 9. To test your SSH connection, enter the following in your terminal:

    ```console
    $ ssh -T git@github.com
    # You may see a warning like this:
    The authenticity of host 'github.com (IP ADDRESS)' can't be established.
    RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
    Are you sure you want to continue connecting (yes/no)?
    ```

10. Verify that the fingerprint in the message you see matches [GitHub's SSH key fingerprints](https://docs.github.com/en/github/authenticating-to-github/githubs-ssh-key-fingerprints). If it does, then type `yes` and press enter:

    ```text
    Hi your_GitHub_username! You've successfully authenticated, but GitHub does not provide shell access.
    ```

11. Verify that the resulting message contains your GitHub username. If you receive a "permission denied" message, see "[Error: Permission denied (publickey)](https://docs.github.com/en/articles/error-permission-denied-publickey)".


# Install Git on Windows

## Section 1: Installing Git for Windows

 1. Visit <https://git-scm.com/download/win> and click on the first link: "Click here to download".

    ![git_downloads_page](/assets/images/git/install/git_windows_downloads_page.png)

 2. Open the file that was downloaded.

 3. Choose yes to allow the Git installation on your PC.

    ![user_account_control](/assets/images/git/install/user_account_control.png)

 4. Go through the installation and choose the default options.

    ![install_license](/assets/images/git/install/install_license.png)

 5. For this step, we will choose the last option to give us extra commands to use.

    ![path_env](/assets/images/git/install/path_env.png)

 6. For the rest of the installation, choose the default options.

 7. Uncheck "View Release Notes" because we do not need it.

    ![install_completing](/assets/images/git/install/install_completing.png)

## Section 2: Testing the Git installation

Once the installation is completed, open cmd.

 1. In the search bar, type cmd and choose Command Prompt.

    ![win_search](/assets/images/git/install/win_search.png)

 2. In the cmd window, type `git --version`. You should see Git version 2.27.0 or greater.

    ![git_version_output](/assets/images/git/install/git_version_output.png)

 3. ***Note: If you get the following error:***

    ![git_path_env_error](/assets/images/git/install/git_path_env_error.png)

    **Then**, you need to add the PATH of Git into the Environment Variables.

 4. In the cmd window, type "`where git`":

    ![where_git_output](/assets/images/git/install/where_git_output.png)

 5. Copy the first line and add it to the environment variables.  
    To open the environment variables in the search bar, type environment variables and choose "Edit the system environment variables".

    ![sys_path_env_editer_search](/assets/images/git/install/sys_path_env_editer_search.png)

 6. Choose Environment Variables.

    ![sys_properties](/assets/images/git/install/sys_properties.png)

 7. In the System Variables, choose Path, then select the Edit Button.

    ![env_var_page](/assets/images/git/install/env_var_page.png)

 8. Choose New, then Paste the Git location that you copied from the cmd window.

    ![add_new_path_env_var](/assets/images/git/install/add_new_path_env_var.png)

 9. **Close the cmd window**, then open it one more time and type `git --version` to make sure that Git installed successfully.

## Section 3: First-time Git setup

 1. **First of all**, if you encounter any problems in this section, please read the official GitHub tutorial first, which can solve most of your problems. <https://docs.github.com/en/authentication/connecting-to-github-with-ssh>

 2. Open PowerShell or Git Bash. If you don't know what a terminal is, check out the tutorial [What's the Terminal?]({{ site.baseurl }}{% link docs/common/terminal_and_cmd.md %})  
    The first thing you should do when you install Git is set your username and email address. This is important because every Git commit uses this information, and it's immutably baked into the commits you start creating:

    ```shell
    $ git config --global user.name "<username>"
    $ git config --global user.email <email>
    ```

    > **Note:** replace `<username>` to your GitHub username, and `<email>` to the email address you used to register GitHub.
    >
    > If you want to know more about the Git config command, you can see here: <https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup>.

 3. Please read [this tutorial]({{ site.baseurl }}{% link docs/common/gen_ssh_key.md %}) to generate SSH keys. Print the public key, then please select and copy the output.

    ```shell
    $ cat ~/.ssh/id_<algorithm>.pub
    ```

    > Please replace `<algorithm>` with a specific algorithm, such as `rsa`, `ecdsa`, or `ed25519`. It depends on what algorithm you used to generate the SSH key.

 4. Open the GitHub website. In the upper-right corner of any GitHub page, click your profile photo, then click **Settings**.

    ![github_settings_dropdown_menu](/assets/images/git/install/github_settings_dropdown_menu.png)

 5. Then select the "*SSH and GPG keys*" section along the left-hand side. From there, click the "*New SSH key*" button.

    ![github_ssh_setting_page](/assets/images/git/install/github_ssh_setting_page.png)

 6. In the "*Title*" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".

 7. Paste the contents of the public-key file you coped in this section step 3 into the "*Key*" field and click "*Add key*".

    ![github_add_ssh_key](/assets/images/git/install/github_add_ssh_key.png)

 8. If prompted, confirm your GitHub password.

    ![github_confirm_pw](/assets/images/git/install/github_confirm_pw.png)

 9. To test your SSH connection, enter the following in your terminal:

    ```console
    $ ssh -T git@github.com
    # You may see a warning like this:
    The authenticity of host 'github.com (IP ADDRESS)' can't be established.
    RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
    Are you sure you want to continue connecting (yes/no)?
    ```

10. Verify that the fingerprint in the message you see matches [GitHub's SSH key fingerprints](https://docs.github.com/en/github/authenticating-to-github/githubs-ssh-key-fingerprints). If it does, then type `yes` and press enter:

    ```text
    Hi your_GitHub_username! You've successfully authenticated, but GitHub does not provide shell access.
    ```

11. Verify that the resulting message contains your GitHub username. If you receive a "permission denied" message, see "[Error: Permission denied (publickey)](https://docs.github.com/en/articles/error-permission-denied-publickey)".
