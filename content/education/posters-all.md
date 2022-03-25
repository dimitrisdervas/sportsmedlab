---
title: "Εισηγήσεις μελών Δ.Ε.Π."
layout: page
permalink: /gr/posters-all/
tag: research, sidebar
---


<div class="wrapper">
	<div class="section-title editable nolink">Posters</div>
	<div class="list-link">
	<ul>
	{% assign published-year = site.data.gr.posters | sort: "year" | reverse %}
	{% for item in published-year  %}
		{% if item.type == "poster" %}
				<li>
					<div class="title"><a href="{{item.file}}" target="_blank"><div class="title-text">{{item.title}}</div><svg fill="#000000" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg></a></div>
				</li>
		{% endif %}
	{% endfor %}
	</ul>
	</div>
</div>

<div class="wrapper">
<div class="section-title editable nolink">Ανακοινώσεις - Διαλέξεις</div>
	<div class="list-link">
		<ul>
		{% assign published-year = site.data.gr.posters | sort: "year" | reverse %}
		{% for item in published-year  %}
			{% if item.type == "dialexi" %}
				<li>
					<div class="title"><a href="{{item.file}}" target="_blank"><div class="title-text">{{item.title}}</div><svg fill="#000000" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg></a></div>
				</li>
			{% endif %}
		{% endfor %}
		</ul>
	</div>
</div>

<div class="wrapper entipa" >
{% include images-block.html path="posters" %}
</div>