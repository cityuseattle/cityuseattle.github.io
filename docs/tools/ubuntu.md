---
layout: default
title: Install Ubuntu
parent: Tools
---

{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Ubuntu is a complete Linux operating system, freely available with both community and professional support. This document will show you how to install Ubuntu on your machine (macOS and Windows).

# Install Ubuntu on macOS (For Apple Silicon)

If you're using Apple Silicon ([Check if you're using Apple Silicon]({{ site.baseurl }}{% link docs/common/apple_m1.md %})),
you need to install another tool like `multipass` to get Ubuntu on it.

## Download Multipass

Go to the [Multipass download page](https://multipass.run) and download the latest version of Mutipass. When this page was written, the current released version was 1.8.1.

![applem1_1](/assets/images/tools/ubuntu/applem1_1.png)

## Install Multipass

![applem1_2](/assets/images/tools/ubuntu/applem1_2.png)

## Start and Launch an Ubuntu Instance

After you install multipass, you will get a multipass command in your machine. Execute the `multipass launch` command to start and launch a new Ubuntu instance.

![applem1_3](/assets/images/tools/ubuntu/applem1_3.png)

## Enter your Ubuntu instance

After launching a new Ubuntu instance, you can execute `multipass shell {Your Instance Name}` to enter Ubuntu.

![applem1_4](/assets/images/tools/ubuntu/applem1_4.png)

## More Multipass Commands

[Multipass Home Page](https://multipass.run)

---

# Install Ubuntu on Windows 10

## 1. Install Ubuntu LTS from Microsoft Store

Open the Microsoft Store and search Ubuntu on the search bar. Some Ubuntu apps will come up. Click the latest version of Ubuntu. As of writing this page, the latest version was Ubuntu 20.04 LTS.

![Ubuntu_windows10](/assets/images/tools/ubuntu/windows10_1.png)

Click the “Get” button to install it. It will take a few minutes depending on your Internet speed.

![Ubuntu_windows10](/assets/images/tools/ubuntu/windows10_2.png)

## 2. Initialize your Ubuntu

After installing Ubuntu on your Windows 10 device, open it. It will do some initial work for the first time.

![Ubuntu_windows10](/assets/images/tools/ubuntu/windows10_3.png)

After a few minutes, enter your Ubuntu OS username and password as you wish. For example, mark or mike.

![Ubuntu_windows10](/assets/images/tools/ubuntu/windows10_4.png)

If you can see a similar window like this, you have installed the Ubuntu OS successfully.

![Ubuntu_windows10](/assets/images/tools/ubuntu/windows10_5.png)

---

# Install Ubuntu on macOS and Windows (Not for Apple Silicon and Windows 10)

If you're using Windows 10, please see [Install Ubuntu on Windows 10]({{ site.baseurl }}{% link docs/tools/ubuntu.md %})

## What you will need

1. VirtualBox (If you don't have VirtualBox installed, please follow this [link]({{ site.baseurl }}{% link docs/tools/virtualbox.md %}) to install it.)
2. Internet Connection
3. Ubuntu ISO file

## Get started

### Download Ubuntu ISO

Go to the [Download Ubuntu Desktop](https://ubuntu.com/download/desktop) page and choose to download the latest version of the Ubuntu OS image.

![Ubuntu_download](/assets/images/tools/ubuntu/ubuntu_download_1.png)

The file will be more than 3 GB which will take a while to download. You can download it to the `~/Downloads` folder or anywhere you know. We will use it later.

### Open your VirtualBox in your machine

![virtualbox_installing](/assets/images/tools/virtualbox/virtualbox_homepage.png)

### Click the "New" button, and choose to install Ubuntu

* Input your Ubuntu OS name
* Choose the Linux Type
* Choose the Ubuntu_64 version

![Ubuntu_new_1](/assets/images/tools/ubuntu/ubuntu_new_1.png)

Then, click "Continue".

### Choose Memory Size

The memory size will influence the performance of your Ubuntu. You can just use the recommended memory size - there's no need to change it.

![Ubuntu_new_2](/assets/images/tools/ubuntu/ubuntu_new_2.png)

Then click "Continue".

### Create Hard Disk

The hard disk is used for storing data inside your Ubuntu OS. Choose the "Create a virtual hard disk now" and click "Create".

![Ubuntu_new_3](/assets/images/tools/ubuntu/ubuntu_new_3.png)

### Choose Hard Disk File Type

You don't need to change this setting. Just use the defualt option "VDI (VirtualBox Disk Image)" and click "Continue".

![Ubuntu_new_4](/assets/images/tools/ubuntu/ubuntu_new_4.png)

### Choose Storage on Physical Hard Disk

Use "Dynamically allocated" that will save the storage on your machine. Then click "Continue".

![Ubuntu_new_5](/assets/images/tools/ubuntu/ubuntu_new_5.png)

### Choose File Location and Size

We will store all the data produced from Ubuntu to the `~/VirtualBox VMs/` directory. Just use the default path and then click "Create".

![Ubuntu_new_6](/assets/images/tools/ubuntu/ubuntu_new_6.png)

### Attach the ISO file

If everything works, you should see that your Ubuntu OS has been installed. However, we still cannot boot the Ubuntu OS. We need to attach the ISO file that we downloaded before.

![Ubuntu_new_7](/assets/images/tools/ubuntu/ubuntu_new_7.png)

Click the "Settings" button. Select `Storage->Contorller: IDE -> Empty` and click that blue button. Then click "choose a disk file".

![Ubuntu_new_8](/assets/images/tools/ubuntu/ubuntu_new_8.png)

After attching the ISO file to your Ubuntu, click the "OK" button. Then go back to the VitualBox dashboard and click "Start".

![Ubuntu_new_9](/assets/images/tools/ubuntu/ubuntu_new_9.png)

If there are no other problems, you have successfully installed Ubuntu on your machine.
