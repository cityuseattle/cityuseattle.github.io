---
layout: default
title: Install Python 3
parent: Environment
nav_order: 2
---

{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

<p align="center"><img alt="python_logo" src="/assets/images/environment/python/python_logo.png" width="140"/></p>

# Install Python on macOS or Windows

We will use Python 3 which is the latest Python version. If you have already installed Python 3, please skip this section. If you have Python 2 in your machine, please upgrade to Python 3.

 1. Click the following link to visit the Python Downloads page <https://www.python.org/downloads/>

    Under the Downloads dropdown list, select the OS

 2. Click the downloading link based on the operating system you are using:

    ![python_download_page](/assets/images/environment/python/python_download_page.png)
    
    Note: While creating this document the latest version was 3.10.4. You might see an advanced version. Download the latest version.

 3. Perform the installation process:

    Click on **Download Python 3.10.4** (you might see a different version). If you are using Windows, an `.exe` file will get downloaded. If you are using Mac, a `.pkg` file will get downloaded. After downloading the files, follow the instructions on your screen to install Python.

 4. After the installation, open Visual Studio Code. Then, open the terminal from VS Code by hitting the `control` + `~` key. Type the following command to test your Python version:

    ```shell
    $ python3 --version
    ```

    ![python_version_output](/assets/images/environment/python/python_version_output.png)

    Note: you are supposed to see the Python version (it may be slightly different from the version shown here, but it should be 3.x.x).

 5. The Python extension is also recommended to install in VS Code.

    Click on View -> Extension in the VS Code menu

    ![vscode_view_dropdown_menu](/assets/images/environment/python/vscode_view_dropdown_menu.png)

    Search Python and click the install button on the right
    ![ext_search_result](/assets/images/environment/python/ext_search_result.png)