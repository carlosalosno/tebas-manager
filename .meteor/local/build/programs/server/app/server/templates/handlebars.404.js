(function(){Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<!DOCTYPE html>\n<html>\n  <head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title></title>\n  </head>\n  <body>\n    Oops, this page can't be found.\n  </body>\n</html>\n");Handlebars.templates["404"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "404"});};
}).call(this);
