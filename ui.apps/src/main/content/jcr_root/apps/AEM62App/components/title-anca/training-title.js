"use-strict";
use(function(){
    var title={};


    title.text=properties.get("jcr:title") || "default title";
	title.textPath=properties.get("titlePath")|| "default title path";
    title.imageDrop=properties.get("fileReference");
	title.imagePath=properties.get("imagePath");
    return title;

});
