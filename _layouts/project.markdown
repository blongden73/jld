---
layout: default
---

{% assign images = page.Images %}


<div class="sticky-version">
  <div class="flex">
    <div class="left">
      <div class="project-title-wrapper">
        <h1>{{page.title}}</h1>
        <h4>{{page.['Project Subtitle']}}</h4>
        {{page.content}}
      </div>
    </div>
    <div class="right">
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
          {% if image.Carousel %}
            <div class="jl-wrapper">
              <div class="project-carousel-images">
                <div class="siema-project siema">
                  {% assign carouselImages = image.Carousel %}
                    {% for image in carouselImages %}
                    <div class="car-image">
                      <img src="{{image.image}}">
                    </div>
                  {% endfor %}
                </div>
              </div>
            </div>
          {% endif %}
        {% endfor %}
      </div>

      {% assign onwardList = site.home-page | where: 'type', page.type | where_exp:"item", "item.hidden != true" %}
      {% assign onwardPage = onwardList | reverse %}

      {% if onwardPage.size > 1 %}
        {% for item in onwardPage %}
          {% if item.title == page.title %}
            {% assign item_index = forloop.index %}
          {% endif %}
        {% endfor %}

        {% assign prev_index = item_index | plus: 1 %}
        {% assign next_index = item_index | minus: 1 %}

        {% for item in onwardPage %}
          {% if forloop.index == prev_index %}
            {% assign prev = item %}
          {% endif %}
          {% if forloop.index == next_index %}
            {% assign next = item %}
          {% endif %}
        {% endfor %}

        <div class="flex onward__journeys-wrapper">
          <div class="flex__leftCol"></div>
          <div class="flex__mainCol">
            <div class="onward__journeys-flex flex">
              {% if prev %}
                <div class="flex--previous">
                  <h2><a href="{{ prev.url }}" class="prev" title="{{ prev.title }}"><span class="onward__journeys-label">Previous</span> <span class="previous--{{prev.Colours}} previous-project">{{ prev.title | replace: ' | ', ' ' }}</span></a></h2>
                </div>
              {% endif %}
              {% if next %}
                <div class="flex--next">
                  <h2><a href="{{ next.url }}" class="next" title="{{ next.title }}"><span class="onward__journeys-label">Next up</span> <span class="next--{{next.Colours}} next-project">{{ next.title | replace: ' | ', ' ' }}</span></a></h2>
                </div>
              {% endif %}
            </div>
          </div>
          <div class="flex__rightCol"></div>
        </div>
      {% endif %}

    </div>
  </div>
</div>


<!-- <div class="flex projects-header">
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
    {% if image.Carousel %}
      <div class="jl-wrapper">
        <div class="project-carousel-images">
          <div class="siema-project siema">
            {% assign carouselImages = image.Carousel %}
              {% for image in carouselImages %}
              <div class="car-image">
                <img src="{{image.image}}">
              </div>
            {% endfor %}
          </div>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div> -->
