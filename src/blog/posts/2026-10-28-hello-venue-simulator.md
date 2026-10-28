---
title: Hello, Venue Simulator
description: What this game is, where it stands today, and what this devlog will be about.
image: /assets/img/festival.jpg
---

Hi, I'm Enes. For the past few weeks I've been building **Venue Simulator**, a management game about running a music festival: from the first pallet stage on an empty field to a site with thousands of people, several stages and a radio that never goes quiet.

This devlog is where I'll share how it's going.

## The idea

Most management games are about building. Building is fun, but the best moments at a real festival happen *during* the show, when something breaks and someone has to decide what to do. So in Venue Simulator a concert is not something you watch. It's something you run.

You start with an empty field, a village road and **$5,000**. You build a stage, a bar, a food stand and a couple of toilets, hook everything up to a generator and plan your first night. Then the gates open.

![Opening night: a small crowd in front of the pallet stage, with the radio panel showing a fight and a fainting.](/assets/img/concert.jpg)

## What's in the game today

- **Building:** stages, bars, food stands, toilets, ticket booths, generators and power cables, with three upgrade levels for most buildings.
- **Events:** book a local act (hard rock, heavy metal or electronic for now), set prices and open the gates.
- **Staff:** bartenders, cleaners, security and medics. You hire them, give them an area to work in and send them where they're needed.
- **Live trouble:** fights, fainting, piles of trash, dirty toilets, a bar running dry, short circuits. Each one comes in over the radio and gets worse if you ignore it.
- **Progress:** every show ends with a report card. Good nights earn reputation stars, stars unlock bigger acts and bigger buildings, and the local bank will lend you money if you're brave.

![The event report after a hard rock night: ticket and bar income, wages, and a list of incidents.](/assets/img/report.jpg)

## The crowd

The thing I worried about most was the crowd. A festival has to *feel* full, and a computer usually struggles once you get past a few hundred walking people. The very first thing I built was a stress test: 100,000 visitors walking around at well over 100 frames per second on my laptop. It passed, so the game is built on that foundation.

## What's next

Right now I'm working on electricity and water: proper power networks, water pipes and eventually city connections and backup generators. After that, more variety at the stalls (not every visitor wants the same beer and burger) and visitors with real preferences.

I'll post here whenever something new is playable. If you'd like to follow along, the [RSS feed](/feed.xml) is the easiest way for now, and the Steam page is coming soon.

Thanks for reading.

— Enes
