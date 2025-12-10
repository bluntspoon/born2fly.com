---
layout: page
title: Our Team
subtitle: Dedicated Coaches Who Believe in Every Child
permalink: /team/
description: "Meet the Born2Fly coaching team - Coach Moses, Coach Aidan, and Coach Gezzo. Qualified, passionate professionals dedicated to adaptive gymnastics excellence."
---

## Meet the Born2Fly Coaches

Our team brings together passion, expertise, and a genuine belief in the potential of every child. Each coach is qualified, background-checked, and committed to creating positive, inclusive experiences where children can discover their abilities and celebrate their achievements.

<div style="max-width: 900px; margin: 3rem auto; text-align: center;">
  <img src="{{ '/assets/images/team.jpeg' | relative_url }}" alt="Born2Fly Coaching Team - Coach Gezzo, Coach Moses, and Coach Aidan" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
  <p style="margin-top: 1rem; color: #718096; font-style: italic;">Our team: Coach Gezzo, Coach Moses, and Coach Aidan</p>
</div>

<div class="coaches-grid" style="margin: 3rem 0;">
  {% for coach in site.data.coaches %}
    {% include coach-card.html coach=coach %}
  {% endfor %}
</div>

---

## Our Qualifications

All Born2Fly coaches hold:

**Professional Certifications:**
- Gymnastics SA coaching qualifications
- Specialist adaptive gymnastics training
- Child safeguarding certifications
- Enhanced background checks

**Safety & First Aid:**
- Pediatric First Aid certification
- Emergency response training
- Safeguarding training
- Health & safety compliance

**Specialist Training:**
- Adaptive and inclusive coaching techniques
- Working with children with disabilities
- Sensory integration approaches
- Behavioral support strategies
- Communication and engagement methods

---

## Our Coaching Philosophy

### Every Child Can Achieve

We believe in focusing on what children CAN do, not what they can't. Our coaching approach identifies each child's strengths and builds on them, creating a positive cycle of achievement and confidence.

### Individual Progress Matters

Success looks different for every child. We celebrate individual progress and recognize that every achievement - no matter how small it might seem - represents significant growth and effort.

### Joy in Movement

When children are having fun, they're learning. Our sessions are designed to be engaging, enjoyable, and rewarding, making children excited about movement and physical activity.

### Safe, Supportive Environment

We create spaces where children feel safe to try, fail, and try again. Our positive, encouraging approach builds resilience and confidence alongside physical skills.

---

## Why Our Team Stands Out

**Experience with Diverse Needs:**
Our coaches have extensive experience working with children of varying abilities, including those with physical disabilities, developmental delays, sensory processing differences, and behavioral challenges.

**Adaptive Expertise:**
We're skilled at modifying activities on the fly, ensuring every child can participate meaningfully while being appropriately challenged.

**Communication Excellence:**
We work closely with schools, educators, and families, maintaining open communication and providing regular feedback on progress and achievements.

**Passion & Dedication:**
We're not just coaches - we're advocates for every child's potential. We're committed to making a real difference in children's lives through movement and play.

---

## Continuing Professional Development

Our team is committed to ongoing learning and development. We regularly:

- Attend specialist training courses
- Stay updated on best practices in adaptive coaching
- Participate in safeguarding and safety training
- Learn new techniques and approaches
- Share knowledge and experiences within our team

---

## Our Commitment to You

When you work with Born2Fly, you're partnering with a team that:

- Puts child safety and wellbeing first
- Brings professionalism and expertise to every session
- Adapts to meet individual and group needs
- Communicates clearly and regularly
- Celebrates every child's unique journey
- Believes passionately in the power of inclusive gymnastics

We're not just teaching gymnastics - we're helping children discover their potential, build confidence, and experience the joy of movement and achievement.

---

## Ready to Meet the Team?

Get in touch to discuss how our coaches can bring specialist adaptive gymnastics to your school.

<div class="whatsapp-contact" style="margin: 3rem 0;">
  <h3>Contact Our Team</h3>
  <p>Reach out directly to our coaches via WhatsApp</p>
  <div class="whatsapp-buttons">
    <a href="https://wa.me/{{ site.social.whatsapp_moses }}?text=Hi%20Coach%20Moses%2C%20I'd%20like%20to%20learn%20more%20about%20Born2Fly%20programs" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
      Message Coach Moses
    </a>
    <a href="https://wa.me/{{ site.social.whatsapp_aidan }}?text=Hi%20Coach%20Aidan%2C%20I'd%20like%20to%20learn%20more%20about%20Born2Fly%20programs" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
      Message Coach Aidan
    </a>
  </div>
  <p style="margin-top: 1.5rem;">
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary btn-lg">Or Use Our Contact Form</a>
  </p>
</div>
