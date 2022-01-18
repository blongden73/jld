---
layout: default
---

<div class="jl-wrapper">
  <div class="jl-projects">
    <h1>Jaqueline Lavitt Designs</h1>
    {% assign projects = site.home-page %}
    <div class="flex">
      {% for project in projects %}
        <div class="project-card">
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
<div class="jl-about-wrapper">
  <div class="jl-about">
    {% assign aboutPage = site.pages %}
      {% for page in aboutPage %}
        {% if page.title == "About" %}
          <div class="centered eighty">
            <span class="h1">
              {{page.content}}
            </span>
          </div>
        {% endif %}
      {% endfor %}
  </div>
</div>
<div class="jl-wrapper">
  <div class="flex">
    <div class="left"></div><div class="right"></div>
  </div>
</div>
