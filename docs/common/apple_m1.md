---
layout: default
title: Are you using Apple Silicon?
parent: Common Solutions
---

Apple released Apple Silicon (M1) or other later version in the end of 2020. The big thing is that Apple changed their chip architecture from Intel to ARM. Some software is not developed for compatibility.

To check if you're using Apple Silicon, follow the instructions below.

* Click the Apple icon in the top-left corner.
* Click "About this Mac"

![applem1](/assets/images/common/apple_m1/applem1.png)

If the Chip is "Apple M1", that means you're using Apple silicon. Some software may no longer be compatible, even on virtual machines. This is because the underlying architecture is different. All programming languages used to make software must be compiled to supported machine languages, which are unique to architectures. Intel and AMD architectures are very similar, so the overwhelming of desktop/laptop software will work on these machines. However, moving to an ARM-based custom architecture as Apple did with the Mac line messes this all up. Few of the compilers (yet) support the corresponding machine language.

This necessitates finding novel solutions. Let's look at what virtual machine solutions exist.

## 1) Parallels

[Parallels](https://www.parallels.com/) is probably the best all-around solution, with the significant caveat that it is not free, and is arguably pretty expensive. But it's relatively fast and easy to use, so it may be worth it.

## 2) AWS EC2

Amazon Web Service [EC2](https://aws.amazon.com/ec2/) instances are virtual machine instances accessed remotely using your web browser or an interface like [Microsoft Remote Desktop](https://apps.apple.com/am/app/microsoft-remote-desktop/id1295203466?mt=12) (which can be downloaded on Apple silicon). You can use a multitude of common operating systems on your instance.

This in some ways is the most generically convenient solution, as anything with a web connection can access it, so your local hardware becomes irrelevant. However, there are drawbacks. First, it's more complicated to set up to utilize its full potential. It's definitely not as user-friendly as an app store solution like Parallels. Second, if you don't want to pay, then the free instance is very slow to the point of unusability. 

Granted, it's not expensive to get a somewhat more powerful solution, but if you don't remember to stop your instances when you use them then costs can quickly accumulate. (A strength of AWS in general is that you will onlny be charged on-demand when the resource is actually being used. But it's up to you to sofficially stop using the resource.) The more powerful an instance, the more charges can pile up. For now, the school doesn't offer an internal solution ot this, so you must pick a potentially paid-for instance or suffer the performance hit.

We will have a setup guide to getting a Windows instance of AWS EC2 running uploaded within the next few weeks.
