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
