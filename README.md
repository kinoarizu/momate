# Momate

**Momate** is a browser extension that is used to help automatically track episodes/movies between movie tracking services and various movie streaming platforms.

Movie tracking system is key function to help users keep track of their movie-watching habits and discover new content. In this case, Momate helps tracking automatically without requiring users to input tracking manually on the tracking platform. Users only need to complete the minimum criteria for the duration of the film being watched, so Momate will work automatically to carry out tracking.

### How This Works
![Alt text](https://ucarecdn.com/27d138be-dfb3-4dbc-85ab-debb0cfdd240/MomateRawDesign.jpg "a title")

- Users are required to authorized by binding their tracking service account
- During watching, Momate will simultaneously carry out a DOM crawling process to obtain movie information and control watch progress
- When the progress watching has reached around 80-90% of the movie duration, Momate will trigger complete record to tracking service api

Momate has heavy dependency on 3rd-party applications, so open source is needed to open up user contributions to fix 3rd-party integration failures.

### **Supported Platforms** <a id="anchor-link"></a>
  <table>
    <thead>
      <tr>
        <th>Streaming Platform</th>
        <th>Tracking Service</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td><a href="https://netflix.com"><img src="https://favicon.malsync.moe/?domain=https://netflix.com"> Netflix</a></td>
          <td><a href="https://simkl.com"><img width="20" src="https://cdn6.aptoide.com/imgs/b/b/8/bb8ef66f099e698b0604b2e1765c2670_icon.png"> SIMKL</a></td>
        </tr>
    </tbody>
  </table>

### **Download**

[![Chrome](https://img.shields.io/chrome-web-store/users/kekjfbackdeiabghhcdklcdoekaanoel.svg?style=flat-square&label=Chrome&logo=google%20chrome&logoColor=white)](#)
[![Firefox](https://img.shields.io/amo/users/mal-sync.svg?style=flat-square&label=Firefox&logo=mozilla%20firefox&logoColor=white)](#)
[![Userscript](https://img.shields.io/badge/Userscript-Download-brightgreen.svg?style=flat-square&label=Userscript&logo=javascript&logoColor=white)](#)