---
id: desktop-data-manager
title: Desktop Data Manager
sidebar_position: 2
---

## Getting Started

Welcome to the Field Day App User Guide. This guide will help you understand how to use the Field Day application to its full potential.

### Creating an Account

Field Day is currently set up to only allow ASU emails to log in. Please sign in with your ASURITE ID.
Our desktop application also requires a password to access the data once you are authenticated through ASU.
Please reach out to Dr. Bateman for this password to access the site.

### Logging In

The Desktop Field Day app is located at: [Field Day Desktop](https://asu-field-day-webui.web.app/login)

Sign in to this portal with your ASU-affiliated Google account.

## Application Features

### Dashboard Overview

Once authenticated, you'll see the main dashboard. Each tab represents a different category of critter data collected in the field.

![Main dashboard of the Field Day app](../static/img/ddm/mainpage.png)

#### Data Tabs

| Tab       | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| Turtle    | Contains data for all turtle species collected in the field.                |
| Lizard    | Contains data for all lizard species collected in the field.                |
| Mammal    | Contains data for all mammal species collected in the field.                |
| Snake     | Contains data for all snake species collected in the field.                 |
| Arthropod | Contains data for all arthropod species collected in the field.             |
| Amphibian | Contains data for all amphibian species collected in the field.             |
| Session   | Contains data research sessions; a session is a collection of data from a single day in the field. More on sessions [here](#sessions). |

### Data Source

One of the most important things to take note here is the Data Source Selector:

![Data Source selector](../static/img/ddm/datasource.png)

This tab switches between which set of data to use. There are two selections: Live and Test

- Live is the live database. This is the most up-to-date data and the live data being collected in the field. Be careful when editing this data!
- Test is a test environment. These entries are mostly the development team testing out different features on the application to make sure they work. Change these entries to your heart's desire.

### Managing Entries

All entries are available to be viewed on the desktop application. To edit/delete/alter in any way these entries, you can click the edit or delete button on the side of each entry under the "Actions" column.

![Edit and delete buttons next to an entry](../static/img/ddm/editcolumns_beforebutton.png)

For example, this Lizard entry has the edit button and delete button next to it. Clicking the edit button makes these fields editable:

![Editable fields after clicking the edit button](../static/img/ddm/editcolumns_active.png)

Now you can edit whatever information you need. To save or discard these changes, hit the check or X button, respectively.

### Editing the Table View

If a certain page is too crowded, or has information you don't need to take into consideration at a certain point in time, fields are able to be removed from the table using the editor in the top right corner:

![Project dropdown](../static/img/ddm/projectdropdown.png)

Clicking the three-card button, it shows this menu: (not all shown for image size purposes):

![Column selector menu](../static/img/ddm/columnselector.png)

As an example, if you only wanted to view Year, Date & Time, and Site, you can deselect all options. This is what the page would look like after:

![Table view with selected columns](../static/img/ddm/selectedColumns.png)

### Searching For Entries

Searching for different critters is now easier than ever. Using the search bar, you can search for multiple terms to find the exact entry you need.

For example: In the lizard tab, say you wanted to find lizards of species code ASTI with toe-clip code C1.

First, type ASTI into the search box. For any other term you want to search, add a +. i.e.:

![Search bar with multiple terms](../static/img/ddm/searchtwoterms.png)

## Detailed Instructions For Data Handling

### Exporting Reports

At the bottom of any page in the Field Day app, you can find 4 buttons:

![Four buttons at the bottom of the page](../static/img/ddm/bottom4buttons.png)

The button that looks like an arrow coming out of a rectangle, or, this one: ![Export button](../static/img/ddm/exportToCSV.png) is the Export button.

Click this button to bring up a dialogue to select which data to convert to a CSV document. This document can easily be opened in Excel or other data applications for further processing.

Any of the data on the Field Day app can be generated into this file, as shown in the menu:

![Export to CSV dialog](../static/img/ddm/exportToCSVModal.png)

You may also choose to only export from the current session or the data already saved to the database.

After clicking "Generate CSV", the CSV file will be downloaded to your computer.

### Sessions

A session is a way to track and organize critical data about individual days collecting data out in the field.

A session holds multiple pieces of information:

| Field               | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| Date & Time of the recordings | The specific date and time when the data was recorded.              |
| Handler and Recorder | The individuals responsible for handling and recording the data.            |
| Site                | The location where the data was collected.                                   |
| Array               | The specific array or setup used for data collection.                        |
| Capture status      | Indicates whether the capture was successful (true) or not (false).          |
| Trap Status         | The status of the trap, which can be OPEN, CHECKED, or CHECKED & CLOSED.     |

A session also holds the data for all the critters caught during its time. That is, you can search critters by session.
Additionally, sessions provide a clear audit trail for field activities, ensuring that all data is organized and easily accessible.

### Merging Sessions

Sometimes Session data can be messy. If entries are ever entered into the wrong session, there is an easy way to fix it.

At the bottom of the page, located amongst the same 4 buttons as the CSV export, is the Merge Sessions button:

![Merge Sessions button](../static/img/ddm/mergesession_button.png)

Clicking this button brings a screen up that allows you to merge two sessions together. Merging a session goes as follows:

- Select the two sessions to merge together
- The session will be merged as follows:
  - The latest session (that is, the session created closest to the present) will be merged into the older session.
- The newer session will be deleted and all data will be preserved in the older session.

To merge a session:

Select the two session you want to merge together using the tool:

![Merge Sessions dialog](../static/img/ddm/mergesession_modal.png)

After that, hit merge!

![Selected sessions ready to merge](../static/img/ddm/mergesession_Selected.png)

The sessions will be merged as described above. Make sure you're sure about what you're merging - there's no undoing this operation!

## Support & Feedback

Please reach out to Dr. Bateman with any requests to make this app a better place for all of us!

Any change requests will greatly help out future capstone teams and their work in developing and maintaining this app. 😊