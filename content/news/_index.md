---
title: "Τα νέα μας"
tag: news
---

<div class="wrapper">
	<div class="section-title editable nolink">Νέα - ανακοινώσεις</div>
<div class="list publications">
<ul>
	{% for item in site.news %}
		<li>
			<div class="title"><a href="{{site.baseurl}}/{{item.url}}">{{item.title}}</a></div>
		</li>
	{% endfor %}
	</ul>
</div>
</div>