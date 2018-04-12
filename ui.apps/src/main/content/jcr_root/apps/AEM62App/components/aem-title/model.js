"use strict";
use(function() {
    return {
    	image: properties.get("image/fileReference", ""),
        title: properties.get("title",currentPage.title),
        link: properties.get("link",currentPage.link)
    }
});