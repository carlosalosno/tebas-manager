(function(){
Template.__checkName("_appUserItem");
Template["_appUserItem"] = new Template("Template._appUserItem", (function() {
  var view = this;
  return HTML.LI({
    class: "dropdown user user-menu"
  }, "\n        ", HTML.A({
    href: "#",
    class: "dropdown-toggle",
    "data-toggle": "dropdown"
  }, "\n            ", HTML.Raw('<img src="images/user2-160x160.jpg" class="user-image" alt="User Image">'), "\n            ", HTML.SPAN({
    class: "hidden-xs"
  }, Blaze.View("lookup:userName", function() {
    return Spacebars.mustache(view.lookup("userName"));
  })), "\n        "), "\n        ", HTML.UL({
    class: "dropdown-menu"
  }, "\n            ", HTML.Raw("<!-- User image -->"), "\n            ", HTML.LI({
    class: "user-header"
  }, "\n                ", HTML.Raw('<img src="images/user2-160x160.jpg" class="img-circle" alt="User Image">'), "\n                ", HTML.P("\n                    ", Blaze.View("lookup:userName", function() {
    return Spacebars.mustache(view.lookup("userName"));
  }), " - ", Blaze.View("lookup:userRole", function() {
    return Spacebars.mustache(view.lookup("userRole"));
  }), "\n                    ", HTML.SMALL("Member since ", Blaze.View("lookup:userDateCreated", function() {
    return Spacebars.mustache(view.lookup("userDateCreated"));
  })), "\n                "), "\n            "), "\n            ", HTML.Raw("<!-- Menu Body -->"), "\n            ", HTML.Raw('<li class="user-body">\n                <div class="col-xs-4 text-center">\n                    <a href="#">Followers</a>\n                </div>\n                <div class="col-xs-4 text-center">\n                    <a href="#">Sales</a>\n                </div>\n                <div class="col-xs-4 text-center">\n                    <a href="#">Friends</a>\n                </div>\n            </li>'), "\n            ", HTML.Raw("<!-- Menu Footer-->"), "\n            ", HTML.Raw('<li class="user-footer">\n                <div class="pull-left">\n                    <a href="#" class="btn btn-default btn-flat">Profile</a>\n                </div>\n                <div class="pull-right">\n                    <a href="#" data-action="logout" class="btn btn-default btn-flat">Sign out</a>\n                </div>\n            </li>'), "\n        "), "\n    ");
}));

}).call(this);
