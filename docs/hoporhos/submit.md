---
layout: default
title: Submit your work
parent: HOP, HOS and TT
nav_order: 3
---

# How to submit your work?
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

There're 2 typical ways to submit your work to GitHub.

## Git Command Line

```bash
$ cd {your_repo_path}
$ git add --all
$ git commit -m 'Submission for Module{0X} - {Your name}'
$ git push origin main
```

### Example

```bash
$ git add --all
$ git commit -m 'Submission for Module06 - Wenzhi Xu'
[main 93e1062] Submission for Module06 - Wenzhi Xu
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 .DS_Store
$ git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 591 bytes | 591.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:cityuseattle/IS440-HOP06-Fall-2021.git
   91edf39..93e1062  main -> main
```

## GitHub Desktop

After you finish your HOP, HOS, or TT, you can see all changes on GitHub Desktop. For example, if you finish your work on week 6 and want to submit or push it to GitHub, you can type a summary and then commit it to the main branch.

![GitHub-desktop-commit](/assets/images/hoporhos/submit/github-desktop-commit.png)

So far, you have committed changes to your local branch. The remote branch has not been changed. You need to push it to remote branch so that everyone can see your work, particularly your TA.

![GitHub-desktop-push](/assets/images/hoporhos/submit/github-desktop-push.png)
