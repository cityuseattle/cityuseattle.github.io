---
layout: default
title: Install Docker
parent: Tools
---

{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

 1. TOC
{:toc}

---

#### What is Docker? 
Docker is a platform that enables software to run in its own isolated environment. SQL Server (from 2017) can be run on Docker in its own isolated container. Once Docker is installed, you simply download — or “pull” — the SQL Server on Linux Docker Image to your Mac, then run it as a Docker container. This container is an isolated environment that contains everything SQL Server needs to run.

## Install Docker on MacOS

### Download the (free) Docker Community Edition for Mac (unless you’ve already got it installed on your system). 

This will enable you to run SQL Server from within a Docker container. 

 
### Choose Right Installation Package

To download, visit the Docker CE for Mac [download page](https://docs.docker.com/desktop/mac/install/) and click Get Docker. 

There are **two types installation package** provided. If you're using Apple M1 chip (Check if you're using Apple M1 [here]({{ site.baseurl }}{% link docs/common/apple_m1.md %}))

 ![](/assets/images/tools/docker/install-1.png)
 
### To install

Double-click on the .dmg file and then drag the Docker.app icon to your Application folder. 

 ![](/assets/images/tools/docker/install-2.png)



## Launch Docker 
 
1. Launch Docker the same way you'd launch any other application (eg, via the Applications folder, the Launchpad, etc). 
 
2. When you open Docker, you might be prompted for your password so that Docker can install its networking components and links to the Docker apps. Go ahead and provide your password, as Docker needs this to run. 

![](/assets/images/tools/docker/install-3.png)



## Install Docker on Windows

### Download the (free) Docker Community Edition for Windows (unless you’ve already got it installed on your system). 

To download, visit the Docker CE for Windows [download page](https://docs.docker.com/desktop/install/windows-install/) and click Get Docker. 


### Install interactively

    1 Double-click Docker Desktop Installer.exe to run the installer.

        If you haven’t already downloaded the installer (Docker Desktop Installer.exe), you can get it from Docker Hub. It typically downloads to your Downloads folder, or you can run it from the recent downloads bar at the bottom of your web browser.

    2 When prompted, ensure the Use WSL 2 instead of Hyper-V option on the Configuration page is selected or not depending on your choice of backend.

        If your system only supports one of the two options, you will not be able to select which backend to use.

    3 Follow the instructions on the installation wizard to authorize the installer and proceed with the install.

    4 When the installation is successful, click Close to complete the installation process.

    5 If your admin account is different to your user account, you must add the user to the docker-users group. Run Computer Management as an administrator and navigate to Local Users and Groups > Groups > docker-users. Right-click to add the user to the group. Log out and log back in for the changes to take effect.