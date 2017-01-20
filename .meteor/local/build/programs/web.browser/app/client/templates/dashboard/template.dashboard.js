(function(){
Template.__checkName("dashboard");
Template["dashboard"] = new Template("Template.dashboard", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Content Wrapper. Contains page content -->\n      "), HTML.DIV({
    class: "content-wrapper"
  }, "\n        ", HTML.Raw("<!-- Content Header (Page header) -->"), "\n        ", HTML.SECTION({
    class: "content-header"
  }, "\n          ", HTML.Raw("<h1>\n            Dashboard\n            <small></small>\n          </h1>"), "\n          ", HTML.OL({
    class: "breadcrumb"
  }, "\n            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "dashboard");
    }
  }, HTML.Raw('<i class="fa fa-dashboard"></i>'), " Dashboard")), "\n            ", HTML.Raw('<!--<li class="active">Index</li>-->'), "\n          "), "\n        "), "\n\n        ", HTML.Raw("<!-- Main content -->"), "\n        ", HTML.Raw('<section class="content">\n          \n          <!-- Your Page Content Here -->\n\n        </section>'), HTML.Raw("<!-- /.content -->"), "\n      "), HTML.Raw("<!-- /.content-wrapper -->") ];
}));

}).call(this);
