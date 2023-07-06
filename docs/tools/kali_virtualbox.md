---
layout: default
title: Installing Kali Linux using VirtualBox
parent: Tools
---

{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

 1. TOC
{:toc}

---

# Prepare

 1. This tutorial is a guide on how to install Kali Linux in VirtualBox. If you have not installed VirtualBox, please refer to [here]({{ site.baseurl }}{% link docs/tools/virtualbox.md %}). This tutorial is available for macOS and Windows.

 2. Open the [Kali Linux official website](https://www.kali.org/). Click the `DOWNLOAD` or `GET KALI` button.

    ![kali_linux_official_website](/assets/images/tools/kali_virtualbox/kali_linux_official_website.png)

    Select the `Virtual Machines`.

    ![choose_platform](/assets/images/tools/kali_virtualbox/choose_platform.png)

    Choose the image you need. If your course does not have specific version requirements, it is recommended that you download a 64-bit system.

    ![choose_image](/assets/images/tools/kali_virtualbox/choose_image.png)

# Install

 1. After you have downloaded the image, the most convenient way is to double-click to open it. If your computer associates the opening method of related files when installing VirtualBox, the following interface will be displayed after double-clicking (screenshot of the interface is for macOS, but a similar interface with the same options appears on Windows).

    ![double_clicking](/assets/images/tools/kali_virtualbox/double_clicking.png)

    If you cannot double-click to open it, please click the `Import` button on the homepage of VirtualBox.

    ![Import-OVA-of-Kali-Linux-Latest-Version](/assets/images/tools/kali_virtualbox/Import-OVA-of-Kali-Linux-Latest-Version.png)

    Click the `Expert Mode` button below.

    ![appliance2import](/assets/images/tools/kali_virtualbox/appliance2import.png)

    Then find the Kali Linux ova file you downloaded in your `Local File System`.

    ![configure-ova-settings-and-import-it](/assets/images/tools/kali_virtualbox/configure-ova-settings-and-import-it.png)

 2. Please Perform basic configuration of the virtual machine or keep the default options, and click `Import`.

    Give it a minute or so, until the importation should be complete.

    ![Importing-Kali-Linux-Latest-Version-OVA-in-VirtualBox](/assets/images/tools/kali_virtualbox/Importing-Kali-Linux-Latest-Version-OVA-in-virtualBox.png)

 3. If the import is successful, you will see a new item added in the VirtualBox homepage. The item may have a different name.

    ![kali_linux_item_in_vb](/assets/images/tools/kali_virtualbox/kali_linux_item_in_vb.png)

 4. Start Kali Linux for the first time may show the Boost menu, select the first option, and press Enter to make it install by default. Wait for a while and you can see the Kali login interface, the login user name is `kali`, and the password is `kali`.

    ![kali_login](/assets/images/tools/kali_virtualbox/kali_login.png)

    You can close the alerts.

    ![close_alerts](/assets/images/tools/kali_virtualbox/close_alerts.png)
