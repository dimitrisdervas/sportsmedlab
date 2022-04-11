---
layout: "alldata"
title: "All Data"
---

## Find a certain file in a folder the is changing - translations
        {{ range ((index .Site.Data .Language.Lang).navigation)}}
                <a class="px-4"href="{{.link}}">{{ .name }}</a>
        {{ end }}


## Find in a file a certain attribute
        {{ range ((index .Site.Data .Language.Lang).navigation)}}
            {{ if eq .name "Εργαστήριο"}}
            <a class="px-4"href="{{.link}}">{{ .name }}</a>
            {{ end }}
        {{ end }}