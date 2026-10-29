---
title: Real people, dark nights and muddy grass
description: A day and a half of changes, from 3D visitors who dance to grass that turns to dirt under their feet.
image: /blog/images/2026-10-29-crowd.jpg
draft: true
---

I meant to make a few small fixes after the first post. Then I looked up and a day and a half had gone. This is a long one, sorry. There's a lot.

## The crowd finally looks like people

Until yesterday my visitors were little coloured blocks with heads. They did the job, but every time I zoomed in I winced a bit. So I found a free, openly licensed library of 3D people, simplified them in Blender and put them in the game. There are 19 different visitors now, men and women, a couple of them dressed for a party.

They don't just walk anymore either. They wait around, dance, cheer, clap, drink, and after a few drinks they walk a little differently. Metal fans and electronic fans don't move the same way, and if the sound cuts out, nobody dances. I also taught them not to walk through each other. That sounds obvious, but it took real work.

Then I ran my crowd test and the frame rate fell off a cliff. Real people are heavy. I spent most of a night making it faster: people far away from the camera get a much simpler model, people outside the screen aren't drawn at all, and the heavy maths is spread over all the processor cores. 10,000 people went from 23 to 56 frames per second, and 100,000 from 7 to somewhere between 25 and 36. Not where I want it yet, but I can breathe again.

## Staff in uniforms, and staff who get better

Your crew finally looks like a crew: the bartender in a white apron, the cleaner in overalls and rubber boots, security in uniform, the medic in a white coat, the technician in a hard hat and a high-vis vest.

![The five staff types side by side in front of a trailer stage, with the funding goals panel on the right.](/blog/images/2026-10-29-staff.jpg)

Hiring got more interesting too. Part-timers are paid by the day, they're decent from the start and they stay that way, and about one time in twenty they just don't show up. Full-timers cost 60% of their wage every day whether there's a show or not, but they start out clumsy and grow. After about a dozen concerts a good one is far better than any part-timer. Speed, stamina and skill all change how they actually work.

## The field remembers

Grass now wears down where people walk. Healthy grass turns into trampled grass, then into plain dirt, and it slowly grows back depending on the season. Visitors notice: standing in the dirt makes them a little less happy and you'll see "so dusty here" in their thoughts. I love watching the paths appear on their own between the bar and the toilets.

![A field after a concert with brown worn paths between the stalls, the toilets and the stage.](/blog/images/2026-10-29-grass.jpg)

## Nights are dark now

I changed the lighting a lot: a real sky with stars, haze in the distance, a fog machine in front of the stage so the spotlights show up, and a slower sunset that goes from gold to purple to a deep blue night. Nights used to be oddly bright, now they're properly dark. That's why there's a new **lighting pole** ($150): two floodlights, connect it to a generator and it lights about 11 metres around it. Visitors prefer walking on lit paths, so where you put your lights changes how people move.

![Three lighting poles connected to a portable generator, lighting up a patch of grass at night.](/blog/images/2026-10-29-lights.jpg)

## Building and booking

- **Building takes time.** A stall takes one to three hours of game time, a trailer stage a full day, the big stage three days. You can pay extra to finish right away.
- **No more upgrade levels.** Instead there are separate buildings and add-ons: three different stages, a sound tower, extra counters, cold storage and more.
- **A real menu.** Hot dogs, burgers, fries, desserts, beer, water, mulled wine, and cocktails once you have two stars. Visitors compare your prices with what things normally cost, and mulled wine sells better when it's cold.
- **Festivals.** The planner has a proper calendar now. You drag the gate time and the show time, and you can run 2 to 4 day festivals with day tickets, combo tickets or both. Open the gates too early and people get bored waiting; open them too close to the show and they miss the start stuck in the queue.
- **A check before the show.** Before the gates open, the game compares your power load with your generators and cables, and checks fuel, unconnected buildings and stalls without a bartender.

![The event planner with a two-week calendar, a 24-hour timeline and a three-day festival being set up.](/blog/images/2026-10-29-planner.jpg)

## Two things I simplified

I had made electricity too fiddly. Every stall needed its own cable, and the start of a game turned into a lot of cable laying. For now only stages need power, and stalls, toilets and ticket booths just work. The rest of the power system is still there, waiting for the day I bring it back.

The game also uses a real calendar now. It starts on 5 June 2026, seasons follow the months, and the bank counts in real years.

## Something to aim for

The last addition is a small investment fund that gives you goals: three at a time in the top right corner, things like "get 25 people to one concert" or "earn $60 from beer". Finish one and you get a bonus, and a new goal takes its place. The first 30 are hand-written, after that the game makes new ones based on your best results. The empty field at the start felt a bit lonely, and now there's always a next small thing to do.

Next up: water, pipes and toilets that need them. And making those 100,000 people run a bit smoother.

— Enes
