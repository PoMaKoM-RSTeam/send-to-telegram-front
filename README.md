Post management system for Telegram messenger
=================================================
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/PoMaKoM-RSTeam/send-to-telegram-front?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/PoMaKoM-RSTeam/send-to-telegram-front?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/PoMaKoM-RSTeam/send-to-telegram-front?style=for-the-badge)


Table of contents
-----------------

* [Introduction](#introduction)
* [Installation](#installation)
* [Getting help](#getting-help)
* [Contributing](#contributing)
* [License](#license)
* [Authors and history](#authors-and-history)
<!-- 
* [Usage](#usage)
* [Known issues and limitations](#known-issues-and-limitations)
* [Acknowledgments](#acknowledgments)
-->


Introduction
------------

RS Clone is an alternate final stage#2 project in RS.SCHOOL. This is a team mission in the course of which you need to develop a clone of a game or application. The team itself chooses the topic of the project. It can be either an exact or a simplified copy of an existing project, or your own application.
Our team chose to create a clone of the application for managing posting to channels in a telegram


Web application:
- Maintaining a channel, creating posts, editing posts.
- Sending postponed posts on a schedule, adding buttons, mailings, pinning, deleting posts and pins (including by timer), etc.
- Display of suggested posts
- Ability to manage multiple channels, multiposting (sending messages to multiple channels).
- Ability to assign roles to users (owner, administrator, editor, author).
- Chat with feedback through a bot connected to the channel.
- Create and view a content plan with scheduled posts in a convenient calendar.
- Display of statistics. Plotting activity graphs.
- Analysis and provision of recommendations on the time of posting for better coverage of the target audience.

Node.js server with database. Serves Telegram Bot + Frontend API:
- Implements REST API for all functions of the Frontend part (see above).
- Storing in the database all the necessary information (roles, posts, messages).
Further, the Bot's capabilities (some functions of the front will be duplicated, as intended):
- Maintaining a channel, creating posts, editing posts.
- Sending postponed messages on a schedule, adding buttons, mailings, pinning, deleting posts and pins (including by timer), and more.
- Ability to manage multiple channels, multiposting (sending messages to multiple channels).
- Ability to assign roles to users (owner, administrator, editor, author).
- Notification of new messages from users, the ability to reply.
- Suggestions for posts (if the user does not have more than one role, he can also create a post, but it will go to moderation and, after approval and editing, can be published). 


Installation
------------

Application originally designed for use with Node.js and installable via:

```typescript
npm install -g sendToTelegram
```


<!-- Usage
-----

This section explains the principles behind this README file.  If this repository were for actual _software_, this [Usage](#usage) section would explain more about how to run the software, what kind of output or behavior to expect, and so on.

### Basic operation

A suggested approach for using this example README file is as follows:

1. Copy the [source file](README.md) for this file to your repository and commit it to your version control system
2. Delete all the body text but keep the section headings
3. Write your README content
4. Commit the new text to your version control system
5. Update your README file as your software evolves

The first paragraph in the README file (under the title at the very top) should summarize your software in a concise fashion, preferably using no more than one or two sentences.

<!-- <p align="center"><img width="80%" src=".graphics/screenshot-top-paragraph.png"></p>

The space under the first paragraph and _before_ the [Table of Contents](#table-of-contents) is a good location for optional [badges](https://github.com/badges/shields), which are small visual tokens commonly used on GitHub repositories to communicate project status, dependencies, versions, DOIs, and other information.  The particular badges and colors you use depend on your project and personal tastes.

The [Introduction](#introduction) and [Usage](#usage) sections are described above.

In the [Known issues and limitations](#known-issues) section, summarize any notable issues and/or limitations of your software.  The [Getting help](#getting-help) section should inform readers of how they can contact you, or at least, how they can report problems they may encounter.  The [Contributing](#contributing) section is optional; if your repository is for a project that accepts open-source contributions, then this section is where you can explain to readers how they can go about making contributions.

The [License](#license) section should state any copyright asserted on the project materials as well as the terms of use of the software, files and other materials found in the project repository.  Finally, the [Authors and history](#authors-and-history) section should inform readers who the authors are; it is also a place where you can acknowledge other contributions to the work and the use of other people's software or tools.

### Additional options

Some projects need to communicate additional information to users and can benefit from additional sections in the README file.  It's difficult to give specific instructions &ndash; a lot depends on your software, your intended audience, etc.  Use your judgment and ask for feedback from users or colleagues to help figure out what else is worth explaining.


Known issues and limitations
----------------------------

In this section, summarize any notable issues and/or limitations of your software.  If none are known yet, this section can be omitted (and don't forget to remove the corresponding entry in the [Table of Contents](#table-of-contents) too); alternatively, you can leave this section in and write something along the lines of "none are known at this time". -->


Getting help
------------

For help and advice on using this application, you can write to email or find contacts in the developer repositories (listed below).


Contributing
------------

Like any beginner team, we welcome any help and participation in improving the functionality of our application. Feel free for fork aor repository an PR after improve features.


License
-------

Mozilla Public License (MPL) version 2.0
This projectis distributed under the terms of the [Mozilla Public License (MPL) version 2.0](https://www.mozilla.org/en-US/MPL/2.0/). The MPL fills a useful space in the spectrum of free and open source software licenses, sitting between the Apache license, which does not require modifications to be shared, and the GNU family of licenses, which requires modifications to be shared under a much broader set of circumstances than the MPL.

[Mozilla Public License FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/)


Authors and history
---------------------------

RS Clone is an alternate final stage#2 project in RS.SCHOOL. This is a team mission in the course of which you need to develop a clone of a game or application. The team itself chooses the topic of the project. It can be either an exact or a simplified copy of an existing project, or your own application.

Authors 
* [PoMaKoM  [Team Lead & Mentor]](https://github.com/PoMaKoM)
* [alexxg0152  [Frontend developer (HTML, CSS, TS, JS)]](https://github.com/alexxg0152)
* [gomunkool  [Frontend developer (HTML, CSS, TS, JS)]](https://github.com/gomunkool)
* [KaterinaKachann  [Frontend developer (HTML, CSS, TS, JS)]](https://github.com/KaterinaKachann)
* [andrewmakarevich  [Backend developer (node.js, js)]](https://github.com/andrewmakarevich)
* [toystix1992  [Backend developer (node.js, js)]](https://github.com/toystix1992)



<!-- 
Acknowledgments
---------------

If your work was funded by any organization or institution, acknowledge their support here.  In addition, if your work relies on other software libraries, or was inspired by looking at other work, it is appropriate to acknowledge this intellectual debt too.  For example, in the process of developing this file, I used not only my own ideas and experiences &ndash; I read many (sometimes contradictory) recommendations for README files and examined real READMEs in actual use, and tried to distill the best ideas into the result you see here.
 -->
