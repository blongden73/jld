---
layout: default
---

<div class="carousel-control-wrapper">
  <button class="prev"><svg width="66" height="30" viewBox="0 0 66 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-opacity=".5" d="M66 15.119H1M14.998 28.71 1.143 14.855 14.998 1"/></svg></button>
  <button class="next"><svg width="66" height="30" viewBox="0 0 66 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-opacity=".5" d="M0 15.12h65M51.002 28.71l13.855-13.855L51.002 1"/></svg></button>
</div>

<div class="jl-wrapper jl-carousel-wrapper">
  <div class="jl-projects">
    {% assign projects = site.home-page %}
    <div class="siema">
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
<div class="jl-about-wrapper">
  <div class="jl-about">
    {% assign aboutPage = site.pages %}
      {% for page in aboutPage %}
        {% if page.title == "About" %}
          <div uk-scrollspy="cls:uk-animation-fade" class="flex box eighty">
              <div class="jld-logo-about">
                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="44" cy="44" r="43.25" fill="#fff" stroke="#000" stroke-width="1.5"/><path d="M29.04 69.793c-.083 0-.181-.095-.283-.282-.102-.187-.115-.325-.031-.408 1.882-1.13 3.378-2.835 4.487-5.115 1.11-2.28 1.999-5.219 2.667-8.819l5.587-31.634c.113-.643.174-1.293.182-1.946 0-.96-.283-1.598-.849-1.915-.565-.316-1.643-.473-3.232-.47-.083 0-.125-.126-.125-.376 0-.251.042-.376.125-.376l2.573.061c1.59.085 2.846.127 3.766.126 1.13 0 2.49-.042 4.08-.126l2.448-.061c.125 0 .182.125.182.376 0 .25-.064.376-.182.376-1.338 0-2.343.126-3.012.378a2.765 2.765 0 0 0-1.506 1.286c-.337.606-.61 1.536-.818 2.793L39.83 53.474c-.627 3.307-1.36 5.964-2.196 7.97-.837 2.008-1.927 3.65-3.27 4.928-1.339 1.276-3.095 2.417-5.27 3.42h-.054Z" fill="#000"/><path d="M59.225 48.113a.61.61 0 0 0-.378-.095c-.167 0-.25.044-.25.126-1.006 2.721-2.272 4.793-3.798 6.215-1.526 1.422-3.44 2.133-5.743 2.133h-6.339a11.522 11.522 0 0 1-1.806-.118c-.557-.09-.846-.182-1.144-.353-1.032-.623-1.203-2.14-1.332-3.29-.172-1.526.067-2.238-.062-2.267-.377-.082-1.291 6.275-1.202 6.655a1.908 1.908 0 0 1 .041.567h19.126a.896.896 0 0 0 .66-.22c.188-.2.308-.455.345-.727.192-1.359 2.498-8.246 1.882-8.626Z" fill="#000"/></svg>
              </div>
            <span class="h1">
              {{page.['About large description'] | markdownify}}
            </span>
            <div class="image">
              <img src="{{page.['About Home Image']}}">
            </div>
          </div>
        {% endif %}
      {% endfor %}
  </div>
</div>
