---
layout: page
title: Our Team
subtitle: Coaches Who Believe in Every Child
permalink: /team/
description: "Meet the Born2Fly coaching team - qualified, passionate professionals dedicated to adaptive gymnastics."
---

## Meet the Coaches

Our team brings passion, expertise, and a genuine belief in every child's potential.

<div style="max-width: 900px; margin: 2rem auto; text-align: center;">
  <img src="{{ '/assets/images/team.png' | relative_url }}" alt="Born2Fly Coaching Team" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
  <p style="margin-top: 1rem; color: #718096; font-style: italic;">Coach Gezzo, Coach Moses & Coach Aidan</p>
</div>

<div class="coaches-grid" style="margin: 2rem 0;">
  {% for coach in site.data.coaches %}
    {% include coach-card.html coach=coach %}
  {% endfor %}
</div>

---

## Our Qualifications

- 🎓 Gymnastics SA certified
- 🛡️ Background checked
- 🏥 First Aid trained
- ⭐ Adaptive coaching specialists

---

## Our Philosophy

- **🌟 Every Child Can Achieve** – We focus on what children CAN do
- **🎯 Individual Progress Matters** – Every achievement counts
- **😊 Joy in Movement** – Fun is how children learn best

<div style="margin: 2rem 0; text-align: center;">
  <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary btn-lg">Work With Us</a>
</div>
