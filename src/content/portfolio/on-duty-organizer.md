---
name: "On-duty organizer (DoctorPlan)"
description: "An open-source scheduler for hospital on-duty planning, using evolutionary algorithms to balance constraints and preferences."
status: "published"
category: "technical"
image: "/images/projects/doctorplan/logo.png"
stack:
  - Node.js
  - JavaScript
  - Evolutionary algorithms
  - CLI
url: "https://github.com/juanramirez/on-duty"
---

On-duty organizer (DoctorPlan) started in 2017 when I saw how much time and friction weekly duty planning created in hospital teams.

The goal was to model that process as an optimization problem: combine hard constraints (mandatory consultations, service coverage, etc.) with professional preferences and generate the best possible duty schedule.

It is currently a command-line tool, open source, and it was designed with the idea of evolving toward a web-based client-server product in the future.
