---
layout: default
title: Home
nav_order: 1
description: "CityU STC TA Center"
permalink: /
---

# CityU STC TA Center
{: .fs-9 }

### Get Started

Welcome to the CityU STC TA Center. We're here to share technical knowledge and help solve your problems quickly. In addition, we hope you learn something from here as well.

This website is hosted on GitHub Pages and is open to anyone - not just CityU TAs. If you want to contribute or find something wrong, please read more about becoming a contributor in [our GitHub repo](https://github.com/cityuseattle/cityuseattle.github.io#contributing).

#### Thank you for your time!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>
