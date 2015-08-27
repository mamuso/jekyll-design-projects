---
layout: index-collection
title: index
noindex: true
---

{% comment %} DONOTREMOVE {% endcomment %}
{% for page in site[page.collection] %} {% unless page.noindex %}- <a href="{{ page.url  | prepend: site.baseurl }}">{{ page.title }}</a>
{% endunless %}{% endfor %}
{% comment %} DONOTREMOVE {% endcomment %}

:metal::metal::metal: and so on :metal::metal::metal:
