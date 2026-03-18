---
title: "Tennis Checkerboard"
date: "2025-05-26T14:40:32.169Z"
template: "post"
draft: false
slug: "/projects/checkerboard"
category: "Projects"
tags:
  - "development"
description: "HTML web app coupled with a Javascript server hosted on Vercel. (Making a project in one shift)"
socialImage: "./checkerboard.png"
---
<figure style="text-align: center;">
  <img src="/checkerboard2.png" alt="wip title page" />
  <figcaption>HTML web app coupled with a Node server hosted on Vercel</figcaption><br>
  <b><div style="display: flex; justify-content: center; gap: 1rem;">
    <a href="https://kayleecragg.github.io/tennis/" target="_blank">Website</a>
  </div>
  <b>
</figure>

- Developed a real-time tennis tournament checkerboard web application using **HTML/CSS/JavaScript** that aggregates live match data from a custom-made API (hosted on **Vercel**).
- Able to give notifications when a match changes court or players.
- Widely used by my company’s live operations team during large tennis tournaments to keep up to date on court and player changes, as well as to keep track of the matches on their assigned court.

## Making a project while on shift


<div style="display: flex; justify-content: center; gap: 40px;">
  <figure style="flex: 1; text-align: center;">
    <img src="/normal_checkerboard.png"style="width: 100%; height: auto;">
    <figcaption>5 days before the tournament started, our normal checkerboard that we used for monitoring match updates was expected to work fine</figcaption>
  </figure>
  <figure style="flex: 1; text-align: center;">
    <img src="/checkerboard_down.png" style="width: 100%; height: auto;">
    <figcaption>Come Day 1, it was broken.</figcaption>
  </figure>
</div>

How did it break? So apparently the source for the original checkerboard (SMT) was changing their licensing or something, and so their checkerboard just didn't work for the entirety of Roland Garros 2025.. 

Anyways. This was a little inconvenient, so I tried looking for alternatives.
<br>(I'm writing this in September 2025 so in hindsight looking back on everything I tried doing, I know was dumb. lol)

First I tried some random sportsbet API coupled with another API. And it worked? But not very reliably? And it also didn't give me very much useful information. Like barely anything at all.

And then I tried to hastily slap it together with a really ugly UI.

WIP WIP.


<figure>
  <img src="/early.png" />
  <figcaption>An early version of the makeshift checkerboard, ugly UI but better than nothing</figcaption>
</figure>

<figure>
  <img src="/checkerboard1.jpg" />
  <figcaption>new features: notifications for court and player changes, and dark mode</figcaption>
</figure>

<figure>
  <img src="/recognition.png" />
  <figcaption>my boss(es) were happy with my creation :)</figcaption>
</figure>

<figure>
  <img src="/checkerboard.png" />
  <figcaption>refining the UI so that it was easier to read the scores at first glance, <br>added special tags for australian players (for our specific business usecase)</figcaption>
</figure>

<figure>
  <img src="/notif.png" />
  <figcaption>Preview of what it would actually look like in action, notification system</figcaption>
</figure>

So after the first few days of me having this system up, my supervisor contacted the development team and asked if it was possible to put the site up on the wall monitors.


<figure>
  <img src="/important.png" />
  <figcaption>"It is vital" :)</figcaption>
</figure>

Anyways there's a long story from here on out but I'll continue it another day.