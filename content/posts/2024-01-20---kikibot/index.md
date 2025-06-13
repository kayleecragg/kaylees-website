---
title: "Kikibot"
date: "2024-01-20T13:46:37.121Z"
template: "post"
draft: false
slug: "/posts/kikibot"
category: "Projects"
tags:
  - "Projects"
  - "Stan"
description: "Automated Asset and Image Creation made in Python that turned 40 hours into 4 hours"
socialImage: "./postbot.png"
---

**From 40 hours to 4 hours.**
[Colab](https://colab.research.google.com/drive/1jFuPN-3OMjf6p990YB8j_fsw3-JhViI0?usp=sharing)
[Github](https://github.com/kayleecragg/kikibot)

## Background

It all started when my friend at work was complaining about having to make assets for a rugby competition. 

You see, in a typical rugby competition season running roughly for 12 weeks, there are on average about 120 games.
The way these games would be presented on platform would be as individual tiles. 

![A preview of the live & upcoming feed on platform.](/platform.png)

In the backend, a poor person on shift would have to have made two sets of “assets” to form one individual tile. 

Firstly was the metadeta, or what we call, ‘shells’. We made them in Google Sheets, then imported them into our content management system. they were typically around 4 rows, a row for the main asset, and subsequent ‘opens’ or other assets linked to the main asset like mini matches, highlights, and rapid recaps. Each row had 20 or more columns to them that had information spanning anywhere from the type of competition it was, e.g ‘Shute Shield’ to the year or the round of that particular game. And mind you, all that for one game. If you multiply these 4 rows and 20+ columns by 120, you could see how much work that would be. 

Secondly was the images. Yes we’d have the metadata done but what about the ‘frontend’ for the tiles? At this point, 

## Prototype of image generation

- Initially running locally with Python in conjunction with an .xlsx file that had all the match information.

*an example of what the match information format would look like in the xlsx file*

![an example of what the match information format would look like in the xlsx file](/dataentry.png)

- When ran, Selenium would manually open up the tile creator website and hit all the inputs based on the specifications in the xlsx file. (e.g; country, player names, round, competition, year, sport)


![video of how selenium would run](/kikibot.gif)

I messaged my team lead, excited to show her my new creation.

![message from my boss](/boss1.png)

My team lead gave me a few more days to tinker with it and then she invited me to a meeting with both her and my boss to showcase the abilities of this new tool. 

![invitation](/invitation.png)

This was me in that meeting demoing my prototype to them.

![demo to my boss](/demo.gif)


## 

![A preview of Stan's live & upcoming feed on platform.](/kiki.gif)

## Postbot 

automated bot for post images that is downloadable onto Mac.

Okay so now we've made the shells and the pre-images for the games. What about post images? 

For big tournaments like Tennis Grand Slams that happen 4 times a year (with smaller tennis tournaments in between) 


![A preview of Stan's live & upcoming feed on platform.](/postbot.png)

## Outcome: Winning a Standup award

So, I won an award! It's like an internal company peer bonus where people can vote for the winners, and those who gets the highest amount of votes wins. 

A message from my team lead after my win:

![message from my boss](/boss3.png)


![winning internal company award](/standup1.png)
![winning internal company award](/standup2.png)

My $100 giftcard that I got for winning:

![winning internal company award](/standup3.png)