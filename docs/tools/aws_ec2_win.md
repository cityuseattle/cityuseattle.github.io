---
layout: default
title: Setup Windows in AWS
parent: Tools
---

{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

 1. TOC
{:toc}

---

# Setting Up Windows EC2 Instance in AWS

A common situation for Mac users in particular is to not be able to use Microsoft products like Power BI or Access database. A straightforward if inefficient solution is to make a virtual Windows instance using the EC2 service on AWS. This guide will show you how to set up a free tier solution, which you could pay Amazon money for to get better performance if you so choose. Much of this guide will also be applicable to setting up Linux instances, such that there's a good chance you could probably figure out the difference, but we won't be covering that explicitly at this time.

We'll be following along with [this EC2 tutorial](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/get-set-up-for-amazon-ec2.html) and [this Getting Started tutorial](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html) from AWS.

## Create AWS Account

First step is to [create an AWS account](https://portal.aws.amazon.com/billing/signup). Follow the online instructions. This creates a root user with root access privileges.

## Create IAM User

Root access is too much for most use cases, including ours, so it's better as a security habit to create an administrative or IAM user. When you log in to AWS, use this user with restricted access, therefore any compromise won't have complete and total access to your system.

Go to the [AWS management console](AWS Management Console) and click on IAM in the quick-access service list in the middle of the screen. If you don't see it, click on the Services link next to the nine-square grid in the upper-left corner of the screen for a drop-down menu. Scroll down to the "Security, Identity, & Compliance" option then mouse over and choose "IAM Identity Center" from the right-hand menu that appears.

IAM is pretty rich but for now we'll keep to the essentials for our purposes. 
- Go to Users in the left hand menu, then click "New Users" in the upper-right part of the new screen. 
- Give it a name then go to the next screen. 
- Create a User Group, give it a distinct name like "Admin", and give it AdministratorAccess (should be the first option). Finishing will take you back to the previous screen. 
- Select your new User Group and go to the next screen. 
- Confirm your details -- you can change and tweak other aspects later if you want -- and click "Create user".

## Create and Launch the EC2 Instance

Go to the [EC2 instance console](https://console.aws.amazon.com/ec2/) and click "Launch instance"  which should be in the left-center of the screen horizontally, probably towards the center-bottom vertically.

- Give it a distinct name.
- Click on Microsoft Windows for the operating system under Quick Start.
  - *Note: Here is where you would diverge for something like a Linux distribution instead.*
- Instance type is where you select how powerful you want the instance to be. Currently the "Free tier eligible" instance type is called a "t2.micro" instance with 1 GB of RAM which is obviously not much. Honestly, performance will be proportionally affected. However, notice that there is on-demand pricing for <<$1 / hour. These go up for more powerful instances, but it may be worth the fairly low cost to get yourself better performance.
  - How much better? The [requirements page](https://learn.microsoft.com/en-us/windows-server/get-started/hardware-requirements) for Windows Server says at least 512 MB are needed for physical installations, but at least 800 MB for virtual ones. This is just less than our 1 GB, so 2 GB might give us enough breathing room without spending too much money. This would be the t2.small instance type, which is appropriately twice as expensive per hour.
  - *NOTE: All AWS billing is on-demand, which is a key selling point of cloud services. You are only charged for each hour of a running instance - so make sure to stop your instances when you're done!*
  - Free Tier will be explained explicitly on the right of the screen. Usually, something like the first 750 hours of use are free. This is only available for t2.micro instance types at the time of writing.
- Key pairs are a key security item. Click on "Create new pair" and give it a name. Leaving it as PEM is fine unless you know you need PPK.
  - *IMPORTANT: Download and save your key now because it's your only chance.*
  - You can also reuse keys between instances, though this potentially creates security vulnerabilities.
- Security groups are network firewall access schemes. For our purposes, the default settings should be fine. Note that it's using the RDP (Remote Desktop Protocol) for Windows, which will be important for connecting.
- The final setting is storage. The free tier comes with 30 GB. This is probably fine for us. Storage can be expanded with other AWS services, such as S3 which is the simplest. We do not cover those in this tutorial.
- Go ahead and launch instance. *Do not close your browser.*

When finished, you can go to "View All Instances."

## Using the EC2 Instance

From "View All Instances" you'll first want to check the "Instance state" of the one you're interested in. If it's stopped, you'll need to start it by checking the appropriate box then click the *drop-down menu* "Instance state" and select "Start instance." You'll have to wait for *two* checks to successfully complete before proceeding. If the instance is good, it'll show "Running" with a checkmark in green.

- To connect, you can either check the box and click "Connect" at the top of the screen; or you can click on the alphanumeric "Instance ID" to go to a status screen, which will also have a dedicated "Connect" button at the top of the screen.
- Either way, on the next screen, choose "RDP client" since we set up the network with a RDP connection. You can download the RDP file to a location on your computer. Keep this location in mind. 
- Click "Get password" then on the next screen click "Upload private key file" and choose the PEM (or PPK) file you downloaded earlier. Click "Decrypt password." Copy the new password towards the bottom of the screen. *Do this now because you won't have another chance.* 

That's all you can do from AWS itself. Next you'll need to download a Remote Desktop client from Microsoft, the eternal gatekeepers. You should be able to just search for this on the App Store. (Linux is more complicated. We don't cover that in this tutorial.)
