---
layout: default
title: A Guide for HOP/HOS/TT
parent: HOP, HOS and TT
nav_order: 2
---

# A Guide for HOP, HOS or TT
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


This guide is for any courses' HOP (Hands-On Practice), HOS (Hands-On Skill) or TT (Technology Tool) assignments that are on GitHub.

* **HOP**: For undergraduates
* **HOS**: For graduates
* **TT**: For doctorates

The unique difference is the course number. I'll use 624 as an example to show you how to do your HOP, HOS or TT (**please remember to use your correct course number instead of 624**).

# Preparation

The **first thing** you need to consider is finding a place to store your HOP, HOS or TT repositories.

There is a [recommend way]({{ site.baseurl }}{% link docs/hoporhos/organization.md %}) to organize your 10 weeks of course content. Please take a look at the guide and create the necessary folders for the course.

# Clone or Download

In this part, you have 2 ways to clone a GitHub repository to your local machine. The first one is `Git Command Line` and the other is `GitHub Desktop`. You can choose whichever one you're comfortable with.

**Notice: If you have no experience with Git or GitHub, GitHub Desktop would be a better choice.**

## Git Command Line

In your local machine, open the Terminal (for Mac) or Command Prompt (CMD for Windows). Type the following commands to clone the repository (download the repository to your local machine):

**Don't have Git command?** Please follow [Install Git Command]({{ site.baseurl }}{% link docs/git/install.md %}) to install it.

* `cd {Your course path}/624/Module01` (Assume you're doing the 1st week's HOP, HOS or TT. cd Module02 if you're doing the 2nd week's assignment.)

  ![HOP and HOS organized sturcture](/assets/images/hoporhos/guide/hos-readme-sample.png)

* `git clone [URL]` (to download this GitHub repository to your local machine, **replace `[URL]` with the actual url of your repository**. Use the copy icon to copy the repository `[URL]`.

  ![HOP and HOS organized sturcture](/assets/images/hoporhos/guide/hos-readme-clone.png)

* `cd {repository name}` (Your repository name will be different from mine, you need to replace `{repository name}` with the actual repository name you just downloaded.)

  ![HOP and HOS organized sturcture](/assets/images/hoporhos/guide/hos-readme-cd.png)

## GitHub Desktop

* Open your GitHub repository web page and click the "Code" button. You'll see "Open with GitHub Desktop". Click that.

  ![hos-readme-clone-desktop.png](/assets/images/hoporhos/guide/hos-readme-clone-desktop.png)

* If you have not installed GitHub Desktop, please follow [Install GitHub Desktop]({{ site.baseurl }}{% link docs/git/github_desktop.md %}) to install it.

* After you install it, reclick "Open with GitHub Desktop". GitHub Desktop will automaticlly pop up. Click "Choose" to select a correct local path to store it. Then click "Clone".

  ![GitHub-desktop-clone.png](/assets/images/hoporhos/guide/github-desktop-clone.png)

# Follow the document and do your work

You'll see some word document(s) or pdf file(s) inside the repository. Follow the instructions and complete your work.


# Submit your work

After completing your work, follow [Submit your work]({{ site.baseurl }}{% link docs/hoporhos/submit.md %}) to submit your work to GitHub.
