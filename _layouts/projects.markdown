---
layout: default
---

<div class="jl-wrapper">
  <div class="jl-about-wrapper">
    <div class="projects-flex">
      {% assign projects = site.home-page | sort:"position" %}
      {% for project in projects %}
        <div class="project-card uk-animation-fade">
          <a href="{{project.url}}"></a>
          <div class="project-subtitle">
            <h4>{{project.['Project Subtitle']}}</h4>
          </div>
          <div class="project-title">
            <h2>{{project.title}}</h2>
          </div>
          <img src="{{project.Image}}">
        </div>
      {% endfor %}
    </div>
  </div>
</div>
