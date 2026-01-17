---
layout: page
title: "Our Team"
subtitle: Coaches Who Believe in Every Child
permalink: /team/
description: "Meet the Born2Fly Gymnastics coaching team - qualified, passionate professionals dedicated to adaptive gymnastics across KwaZulu-Natal."
---

<div style="max-width: 900px; margin: 2rem auto; text-align: center;">
  <img src="{{ '/assets/images/team.png' | relative_url }}" alt="Born2Fly Coaching Team" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
  <p style="margin-top: 1rem; color: #718096; font-style: italic;">Our team brings passion, expertise, and a genuine belief in every child's potential.
</p>
</div>

<div class="coaches-grid" style="margin: 2rem 0;">
  {% for coach in site.data.coaches %}
    {% include coach-card.html coach=coach %}
  {% endfor %}
</div>

<div class="info-cards-grid">
  <div class="info-card">
    <div class="info-card-header">
      <h3 class="info-card-title">Our Qualifications</h3>
    </div>
    <div class="info-card-content">
      <ul>
        <li>🎓 International & professional certifications</li>
        <li>🏆 <a href="https://gymnasticssa.co.za/" target="_blank" rel="noopener">Gymnastics SA</a> certified</li>
        <li>🛡️ Background checked</li>
        <li>🏥 First Aid trained</li>
        <li>⭐ Adaptive coaching specialists</li>
        <li>🌍 International expertise</li>
      </ul>
      <p style="margin-top: 1rem; font-size: 0.9em;">Proudly associated with <a href="https://www.ptngym.co.za/" target="_blank" rel="noopener">Pinetown Gymnastics</a></p>
    </div>
  </div>

  <div class="info-card">
    <div class="info-card-header">
      <h3 class="info-card-title">Our Philosophy</h3>
    </div>
    <div class="info-card-content">
      <ul>
        <li><strong>🌟 Every Child Can Achieve</strong> – We focus on what children CAN do</li>
        <li><strong>🎯 Individual Progress Matters</strong> – Every achievement counts</li>
        <li><strong>😊 Joy in Movement</strong> – Fun is how children learn best</li>
        <li><strong>🤝 Safe & Supportive</strong> – Strict safety standards maintained</li>
      </ul>
    </div>
  </div>
</div>

<div style="margin: 2rem 0; text-align: center;">
  <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary btn-lg">Work With Us</a>
</div>
