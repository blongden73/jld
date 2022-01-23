---
layout: default
---

<div class="carousel-control-wrapper">
  <button class="prev"><svg width="66" height="30" viewBox="0 0 66 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-opacity=".5" d="M66 15.119H1M14.998 28.71 1.143 14.855 14.998 1"/></svg></button>
  <button class="next"><svg width="66" height="30" viewBox="0 0 66 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-opacity=".5" d="M0 15.12h65M51.002 28.71l13.855-13.855L51.002 1"/></svg></button>
</div>

<div class="jl-wrapper">
  <div class="jl-projects">
    {% assign projects = site.home-page %}
    <div class="siema">
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
    <div class="left"></div>
    <div class="right"></div>
  </div>
</div>
