(function(){
Template.__checkName("appLayout");
Template["appLayout"] = new Template("Template.appLayout", (function() {
  var view = this;
  return [ HTML.Raw('<!--[if lt IE 9]>\n    <p class="browser-warning"><strong><i class="icon-exclamation-sign"></i> Warning</strong> - You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank">upgrade your browser</a> to properly view this website.</p>\n  <![endif]-->\n\t'), HTML.DIV({
    class: "wrapper"
  }, "\n  \t\t", Spacebars.include(view.lookupTemplate("_appHeader")), "\n\n    \t\t", Spacebars.include(view.lookupTemplate("yield")), "\n\n  \t\t", Spacebars.include(view.lookupTemplate("_appFooter")), "\n \t") ];
}));

}).call(this);
