---
title: "Συνέδρια"
image-hero: /assets/images/slideshow/synedria.jpg
tag: conferences
---

test
<section class="wrapper">
        <div class="p-4">
            <div class="subtitle">
                <div class="date text-black text-lg font-bold">1-3 Απριλίου 2022</div>
                <div class="place text-black ">
                    <a class="leading-normal pt-4 text-4xl text-blue-darker" href="https://ctmi.gr/sportsmed2022/"> 11ο ΔΙΕΘΝΕΣ ΣΥΝΕΔΡΙΟ «ΙΑΤΡΙΚΗ ΤΗΣ ΑΘΛΗΣΗΣ ΣΤΟΝ 21ο ΑΙΩΝΑ»</a>
                </div>
            </div>
        </div>
</section>


<section class="wrapper">
        <div class="p-4">
            <div class="subtitle">
				<div class="date text-black text-lg font-bold">13 Οκτωβρίου 2020</div>
                <div class="leading-normal text-4xl text-blue-darker">Ημερίδα: «Ποιότητα Ζωής  στη Χρόνια Νεφρική Νόσο»</div>
                </div>
        </div>
</section>




<div class="wrapper">
	<div class="section-title editable nolink">VIDEO - Συμπόσιο "Ποιότητα ζωής στη Χ.Ν.Ν." 2017</div>
	<div class="content">
		<a href="https://www.youtube.com/channel/UCRmg4aPsgZ8OAjimgcd_FIw/videos" target="_blank">Δείτε τις παρουσιάσεις του συμποσίου</a>
	</div>
</div>


<div class="wrapper">
	<div class="section-title editable nolink">Φωτογραφίες</div>
	<div class="content">
		{% include images-block-photoswipe-limit.html path="synedria/synedria" name="synedria" limit="7" %}
	</div>
</div>

{% assign conferences-year = site.data[page.lang].conferences | sort: "year" | reverse %}
{% assign conferences-type = conferences-year |  group_by: 'category-title' %}
{% for conference in conferences-type   %}
<div class="wrapper">
<div class="list publications">
	<!-- Editor Link -->
<a href="cloudcannon:collections/_data/{{page.lang}}/conferences.json" class="editor-link">Edit {{page.title}}</a>
<ul>
<div class="section-title editable nolink">{{ conference.name }}</div>
	{% for item in conference.items %}
		<li>
			<div class="title">{{item.name}}</div>
			<div class="names">{{item.year}}</div>
		</li>
	{% endfor %}
	</ul>
</div>
</div>
{% endfor %}


<div class="wrapper">
	<div class="section-title editable nolink">Αφίσες Συνεδρίων</div>
	<div class="content">
		{% include images-block-photoswipe-limit.html path="synedria/afises" name="afises" limit="5" %}
	</div>
</div>

