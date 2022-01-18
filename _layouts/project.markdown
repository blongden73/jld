---
layout: default
---

{% assign images = page.Images %}

<div class="flex projects-header">
  <div class="left">
    <img src="{{page.Image}}">
  </div>
  <div class="right">
    <div class="project-title-wrapper">
      <h1>{{page.title}}</h1>
      {{page.content}}
      <h4>{{page.['Project Subtitle']}} — </h4>
    </div>
  </div>
</div>

{% for image in images %}
  {% if image.['Full Screen Image'] %}
    <div class="project-fullscreen">
      <img src="{{image.['Full Screen Image']}}">
    </div>
  {% endif %}
  {% if image.['Grid'] %}
      {% assign gridimages = image.['Grid'] %}
        <div class="flex grid-images">
          {% for gi in gridimages %}
          {% if gi.['Left Image'] %}
            <img src="{{gi.['Left Image']}}">
          {% endif %}
          {% if gi.['Right Image'] %}
            <img src="{{gi.['Right Image']}}">
          {% endif %}
          {% endfor %}
        </div>
  {% endif %}
  {% if image.['Inset Image'] %}
    <div class="project-inset">
      <img src="{{image.['Inset Image']}}">
    </div>
  {% endif %}
{% endfor %}
