---
layout: default
---

<div class="jl-wrapper">
  <div class="jl-logo-wrapper">
    <div class="jl-home-image-cards">
      {% assign homeImages = site.home-page %}
      {% for images in homeImages %}
        <div class="card">
          <img src="{{images.Image}}">
        </div>
      {% endfor %}
    </div>
    {% include logo.html %}
  </div>
</div>
<div class="jl-wrapper">
  <div class="jl-projects">
    <h1>Projects</h1>
    {% assign projects = site.home-page %}
    <div class="flex">
      {% for project in projects %}
        <div class="project-card">
          <img src="{{project.Image}}">
        </div>
      {% endfor %}
    </div>
  </div>
</div>
