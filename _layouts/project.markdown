---
layout: default
---

{% assign images = page.Images %}

<div class="flex projects-header">
  <div class="floating-window"></div>
  <div class="left">
    <img loading="lazy" src="{{page.Image}}">
  </div>
  <div class="right">
    <div class="project-title-wrapper">
      <h1>{{page.title}}</h1>
      {{page.content}}
      <h4>{{page.['Project Subtitle']}}</h4>
    </div>
  </div>
</div>

<div class="project-images-wrapper">
  {% for image in images %}
    {% if image.['Full Screen Image'] %}
      <div class="project-fullscreen">
        {% unless image.['Full Screen Image'] contains '.mp4' %}
          <img src="{{image.['Full Screen Image']}}">
          {% else %}
          <video playsinline muted loop>
            <source src="{{image.['Full Screen Image']}}" type="video/mp4">
          </video>
        {% endunless %}
      </div>
    {% endif %}
    {% if image.['Grid'] %}
        {% assign gridimages = image.['Grid'] %}
          <div class="flex grid-images">
            {% for gi in gridimages %}
            {% if gi.['Left Image'] %}
              {% unless gi.['Left Image'] contains '.mp4' %}
                <img loading="lazy" src="{{gi.['Left Image']}}">
              {% else %}
              <video playsinline muted loop>
                <source src="{{gi.['Left Image']}}" type="video/mp4">
              </video>
            {% endunless %}
            {% endif %}
            {% if gi.['Right Image'] %}
              {% unless gi.['Right Image'] contains '.mp4' %}
                <img loading="lazy" src="{{gi.['Right Image']}}">
              {% else %}
              <video playsinline muted loop>
                <source src="{{gi.['Right Image']}}" type="video/mp4">
              </video>
            {% endunless %}
            {% endif %}
            {% if gi.['Right Image Video'] %}
              <video width="320" height="240" controls loop>
                <source src="{{gi.['Right Image Video']}}" type="video/mp4">
                  Your browser does not support the video tag.
              </video>
            {% endif %}
            {% endfor %}
          </div>
    {% endif %}
    {% if image.['Inset Image'] %}
      <div class="project-inset">
        {% unless image.['Inset Image'] contains '.mp4' %}
          <img loading="lazy" src="{{image.['Inset Image']}}">
        {% else %}
        <video playsinline muted>
          <source src="{{image.['Inset Image']}}" type="video/mp4">
        </video>
        {% endunless %}
      </div>
    {% endif %}
    {% if image.Text %}
      <div class="jl-wrapper">
        {{image.Text | markdownify}}
      </div>
    {% endif %}
    {% if image.['Grid-three'] %}
        {% assign gridimagesthree = image.['Grid-three'] %}
          <div class="flex grid-images-three">
            {% for gi in gridimagesthree %}
            {% if gi.['Left Image'] %}
              {% unless gi.['Left Image'] contains '.mp4' %}
                <img loading="lazy" src="{{gi.['Left Image']}}">
              {% else %}
              <video playsinline muted loop>
                <source src="{{gi.['Left Image']}}" type="video/mp4">
              </video>
            {% endunless %}
            {% endif %}
            {% if gi.['Middle Image'] %}
              {% unless gi.['Middle Image'] contains '.mp4' %}
                <img loading="lazy" src="{{gi.['Middle Image']}}">
              {% else %}
              <video playsinline muted loop>
                <source src="{{gi.['Middle Image']}}" type="video/mp4">
              </video>
            {% endunless %}
            {% endif %}
            {% if gi.['Right Image'] %}
              {% unless gi.['Right Image'] contains '.mp4' %}
                <img loading="lazy" src="{{gi.['Right Image']}}">
              {% else %}
              <video playsinline muted loop>
                <source src="{{gi.['Right Image']}}" type="video/mp4">
              </video>
            {% endunless %}
            {% endif %}
            {% if gi.['Right Image Video'] %}
              <video width="320" height="240" controls loop>
                <source src="{{gi.['Right Image Video']}}" type="video/mp4">
                  Your browser does not support the video tag.
              </video>
            {% endif %}
            {% endfor %}
          </div>
    {% endif %}
  {% endfor %}
</div>
