---
layout: default
title: Install MS SQL Server
parent: Database
nav_order: 3
---

# Microsoft SQL Server
{: .no_toc }

<p align="center"><img alt="sql_server_logo" src="/assets/images/database/sql_server/sql_server_logo.png" /></p>

## Before You Start
{: .no_toc }

* Version numbers may not match with the most current version at the time of writing. If given the option to choose between stable release (long-term support) or most recent, please choose the stable release rather than the beta-testing version.
* This tutorial targets Windows users and macOS users.
* There might be subtle discrepancies along the steps. Please use your best judgement while going through this cookbook style tutorial to complete each step.
* The directory path shown in screenshots may be different from yours.
* If you are not sure what to do or confused with any steps:
  1. Consult the resources listed below.
  2. If you cannot solve the problem after a few tries, ask a TA for help.

## Learning Outcomes
{: .no_toc }

Students will be able to:

* Create and connect to a Microsoft SQL Server Database

## Resources
{: .no_toc }

* YouTube Tutorial - <https://youtu.be/DhAl4rdrzoA>
* Microsoft SQL Server Management Studio Download: <https://www.microsoft.com/en-us/download/details.aspx?id=14630>

## Table of contents
{: .no_toc }

1. TOC
{:toc}

---

# Download a SQL Server

 1. Go to the Microsoft Download Center - <https://www.microsoft.com/en-us/sql-server/sql-server-downloads> and download the latest developer version for your machine
    ![sql_server_download_page](/assets/images/database/sql_server/sql_server_download_page.png)

 2. Once the download is completed, run the downloaded .exe file and choose Basic for the installation type.

    ![sql_server_install_page](/assets/images/database/sql_server/sql_server_install_page.png)

 3. Continue with the installation and once the installation is complete, click Close.

    ![sql_server_install_successfully](/assets/images/database/sql_server/sql_server_install_successfully.png)

 4. To verify the SQL Server instance, click Windows + R and type services.msc, then click Ok. You should be able to see a SQL Server instance running. Make a note of the SQL Server instance that you just created.

    A SQL Server instance is a copy of the sqlservr.exe executable that runs as an operating system service.

    ![win_run](/assets/images/database/sql_server/win_run.png)

    ![win_services_msc](/assets/images/database/sql_server/win_services_msc.png)

# Download a SQL Client

 1. Go to the Microsoft Download Center - [Microsoft SQL Server Management Studio Express page](https://aka.ms/ssmsfullsetup) and download the latest version for your machine

    ![ssms_install](/assets/images/database/sql_server/ssms_install.png)

    ![ssms_install_success](/assets/images/database/sql_server/ssms_install_success.png)

# Connect to the Microsoft SQL Server Database

 1. Once you have completed your download, install and open the program and enter the following in the dialog box:

    ![connect_sql_server](/assets/images/database/sql_server/connect_sql_server.png)

    * **Server type:** Select Database Engine
    * **Hostname:** Select server name as local
    * **Authentication:** Select Windows Authentication

 2. Click connect and you will be connected to the database. The SQL Server management studio should appear like this:

    ![ssms_ui](/assets/images/database/sql_server/ssms_ui.png)

# Import a sample database to Microsoft SQL Server

## AdventureWorks sample database backup copy

To get the OLTP downloads of AdventureWorks, go to this [link](https://docs.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-ver15). You can choose any. In my example, I chose the `AdventureWorks2017.bak` version.

![download_backup_files_page](/assets/images/database/sql_server/download_backup_files_page.png)

## Install to SQL Server

### Restore backup

Follow the steps below to restore a backup of your database using SQL Server Management Studio.

 1. Open SQL Server Management Studio and connect to the target SQL Server instance.

 2. Right-click on the Databases node, and select Restore Database.

    ![ssms_restore_db_dropdown](/assets/images/database/sql_server/ssms_restore_db_dropdown.png)

 3. Select Device and click the ellipses (...)

    ![ssms_restore_db_page](/assets/images/database/sql_server/ssms_restore_db_page.png)

 4. In the Select backup devices dialog, click Add, then navigate to the database backup in the filesystem of the server and select the backup. Click OK.

    ![ssms_select_backup_devices](/assets/images/database/sql_server/ssms_select_backup_devices.png)

 5. If needed, change the target location for the data and log files in the Files pane. Note that it is a best practice to place data and log files on different drives.

    ![ssms_locate_backup_file_selector](/assets/images/database/sql_server/ssms_locate_backup_file_selector.png)

    ![ssms_select_backup_devices_after](/assets/images/database/sql_server/ssms_select_backup_devices_after.png)

 6. Click OK. This will initiate the database restore. After it completes, you will have the AdventureWorks database installed on your SQL Server instance.

    ![ssms_restore_db_page_2](/assets/images/database/sql_server/ssms_restore_db_page_2.png)

    ![ssms_restore_db_success](/assets/images/database/sql_server/ssms_restore_db_success.png)

    ![ssms_after_restore_db](/assets/images/database/sql_server/ssms_after_restore_db.png)
