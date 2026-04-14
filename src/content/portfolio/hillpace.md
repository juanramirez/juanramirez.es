---
name: "HillPace"
description: "An open-source Ruby tool for planning pacing strategy in hilly races from GPX/TCX route data."
status: "published"
category: "technical"
image: "/images/projects/hillpace/logo.png"
stack:
  - Ruby
  - RubyGems
  - GPX/TCX processing
  - CLI
url: "https://github.com/juanramirez/hillpace"
---

HillPace is a running race planner focused on non-flat routes. I started it before the 2015 Granada Half Marathon, when I wanted a better strategy for races with significant elevation changes.

You provide route data (GPX or TCX) and a flat-course reference pace. HillPace then estimates segment-by-segment pacing targets by taking elevation and gradient factors into account.

The project is distributed as a Ruby gem and remains a command-line application, with the long-term idea of integrating it into a web experience connected to real training and race workflows.
