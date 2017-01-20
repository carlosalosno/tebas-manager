(function(){
Template.__checkName("publicLayout");
Template["publicLayout"] = new Template("Template.publicLayout", (function() {
  var view = this;
  return [ HTML.Raw('<!--[if lt IE 9]>\n    <p class="browser-warning"><strong><i class="icon-exclamation-sign"></i> Warning</strong> - You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank">upgrade your browser</a> to properly view this website.</p>\n  <![endif]-->\n\t'), HTML.DIV({
    class: "wrapper public-layout"
  }, "\n  \t\t", Spacebars.include(view.lookupTemplate("_publicHeader")), "\n\n  \t\t\t", HTML.DIV({
    class: "container"
  }, "\n    \t\t\t", Spacebars.include(view.lookupTemplate("yield")), "\n    \t\t"), "\n\n  \t\t", Spacebars.include(view.lookupTemplate("_publicFooter")), "\n \t") ];
}));

}).call(this);
