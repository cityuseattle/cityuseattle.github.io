---
layout: default
title: Install MySQL
parent: Database
---

# Install MySQL
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

 1. TOC
{:toc}

---

# Install MySQL on MacOS

## Prerequisite

1. You're using Mac

2. You should have Docker installed (if not, please check this [link]({{ site.baseurl }}{% link docs/tools/docker.md %}) to install, and get back)


## Choose A Place on your Mac 

Open your terminal and locate to any path you want. Create a new folder name it "mysql"

![](/assets/images/database/mysql/install-mysql-1.png)


## Create docker-compose.yml

Type or copy the following code into it. Please take care of the indents (If you encounter any issue of the syntax of YML, please use this [Online YML Checker](https://yamlchecker.com/)) to help you.

[Optional] change the password to yours.

```yml
version: '3.3'
services:
  db:
    image: mysql:5.7
    platform: linux/amd64
    restart: always
    environment:
      MYSQL_DATABASE: 'db'
      # So you don't have to use root, but you can if you like
      MYSQL_USER: 'nonrootuser'
      # You can use whatever password you like
      MYSQL_PASSWORD: 'NonRootPassword'
      # Password for root access
      MYSQL_ROOT_PASSWORD: 'YourRootPassword'
    ports:
      # <Port exposed> : < MySQL Port running inside container>
      - '3306:3306'
    expose:
      # Opens port 3306 on the container
      - '3306'
      # Where our data will be persisted
    volumes:
      - my-db:/var/lib/mysql
# Names our volume
volumes:
  my-db:
```

![](/assets/images/database/mysql/install-mysql-2.png)

## Generate your MySQL Container

Open your terminal and switch to the path as same as your docker-compose.yml file. Type the following command.


```bash
docker-compose up
```

If everything goes well, you would see a similar outputs like me.

![](/assets/images/database/mysql/install-mysql-3.png)


## Additional Commands

You can press "Ctrl-C" to stop the container. And then you can use "docer-compose start" to start you container in the future.

```bash
dockcer-compose start
```

After you want to stop your container. Please use below command.

```bash
dockcer-compose stop
```

![](/assets/images/database/mysql/install-mysql-4.png)