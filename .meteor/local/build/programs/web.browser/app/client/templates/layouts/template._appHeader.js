(function(){
Template.__checkName("_appHeader");
Template["_appHeader"] = new Template("Template._appHeader", (function() {
  var view = this;
  return [ HTML.HEADER({
    class: "main-header"
  }, "\n        ", HTML.Raw("<!-- Logo -->"), "\n        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "dashboard");
    },
    class: "logo"
  }, Blaze.View("lookup:appName", function() {
    return Spacebars.mustache(view.lookup("appName"));
  })), "\n        ", HTML.Raw("<!-- Header Navbar: style can be found in header.less -->"), "\n        ", HTML.NAV({
    class: "navbar navbar-static-top",
    role: "navigation"
  }, "\n            ", HTML.Raw("<!-- Sidebar toggle button-->"), "\n            ", HTML.Raw('<a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">\n                <span class="sr-only">Toggle navigation</span>\n            </a>'), "\n            ", HTML.DIV({
    class: "navbar-custom-menu"
  }, "\n                ", HTML.UL({
    class: "nav navbar-nav"
  }, "\n                    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n                        ", HTML.Comment(" Messages: style can be found in dropdown.less"), "\n                        ", HTML.LI({
      class: "dropdown messages-menu"
    }, "\n                            ", HTML.A({
      href: "#",
      class: "dropdown-toggle",
      "data-toggle": "dropdown"
    }, "\n                                ", HTML.I({
      class: "fa fa-envelope-o"
    }), "\n                                ", HTML.SPAN({
      class: "label label-success"
    }, "4"), "\n                            "), "\n                            ", HTML.UL({
      class: "dropdown-menu"
    }, "\n                                ", HTML.LI({
      class: "header"
    }, "You have 4 messages"), "\n                                ", HTML.LI("\n                                    ", HTML.Comment(" inner menu: contains the actual data "), "\n                                    ", HTML.UL({
      class: "menu"
    }, "\n                                        ", HTML.LI("\n                                            ", HTML.Comment(" start message "), "\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.DIV({
      class: "pull-left"
    }, "\n                                                    ", HTML.IMG({
      src: "images/user2-160x160.jpg",
      class: "img-circle",
      alt: "User Image"
    }), "\n                                                "), "\n                                                ", HTML.H4("\n                                Support Team\n                                ", HTML.SMALL(HTML.I({
      class: "fa fa-clock-o"
    }), " 5 mins"), "\n                              "), "\n                                                ", HTML.P("Why not buy a new awesome theme?"), "\n                                            "), "\n                                        "), "\n                                        ", HTML.Comment(" end message "), "\n                                        ", HTML.LI("\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.DIV({
      class: "pull-left"
    }, "\n                                                    ", HTML.IMG({
      src: "images/user3-128x128.jpg",
      class: "img-circle",
      alt: "user image"
    }), "\n                                                "), "\n                                                ", HTML.H4("\n                                AdminLTE Design Team\n                                ", HTML.SMALL(HTML.I({
      class: "fa fa-clock-o"
    }), " 2 hours"), "\n                              "), "\n                                                ", HTML.P("Why not buy a new awesome theme?"), "\n                                            "), "\n                                        "), "\n                                        ", HTML.LI("\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.DIV({
      class: "pull-left"
    }, "\n                                                    ", HTML.IMG({
      src: "images/user4-128x128.jpg",
      class: "img-circle",
      alt: "user image"
    }), "\n                                                "), "\n                                                ", HTML.H4("\n                                Developers\n                                ", HTML.SMALL(HTML.I({
      class: "fa fa-clock-o"
    }), " Today"), "\n                              "), "\n                                                ", HTML.P("Why not buy a new awesome theme?"), "\n                                            "), "\n                                        "), "\n                                        ", HTML.LI("\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.DIV({
      class: "pull-left"
    }, "\n                                                    ", HTML.IMG({
      src: "images/user3-128x128.jpg",
      class: "img-circle",
      alt: "user image"
    }), "\n                                                "), "\n                                                ", HTML.H4("\n                                Sales Department\n                                ", HTML.SMALL(HTML.I({
      class: "fa fa-clock-o"
    }), " Yesterday"), "\n                              "), "\n                                                ", HTML.P("Why not buy a new awesome theme?"), "\n                                            "), "\n                                        "), "\n                                        ", HTML.LI("\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.DIV({
      class: "pull-left"
    }, "\n                                                    ", HTML.IMG({
      src: "images/user4-128x128.jpg",
      class: "img-circle",
      alt: "user image"
    }), "\n                                                "), "\n                                                ", HTML.H4("\n                                Reviewers\n                                ", HTML.SMALL(HTML.I({
      class: "fa fa-clock-o"
    }), " 2 days"), "\n                              "), "\n                                                ", HTML.P("Why not buy a new awesome theme?"), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.LI({
      class: "footer"
    }, HTML.A({
      href: "#"
    }, "See All Messages"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.Comment(" Notifications: style can be found in dropdown.less "), "\n                        ", HTML.LI({
      class: "dropdown notifications-menu"
    }, "\n                            ", HTML.A({
      href: "#",
      class: "dropdown-toggle",
      "data-toggle": "dropdown"
    }, "\n                                ", HTML.I({
      class: "fa fa-bell-o"
    }), "\n                                ", HTML.SPAN({
      class: "label label-warning"
    }, "10"), "\n                            "), "\n                            ", HTML.UL({
      class: "dropdown-menu"
    }, "\n                                ", HTML.LI({
      class: "header"
    }, "You have 10 notifications"), "\n                                ", HTML.LI("\n                                    ", HTML.Comment(" inner menu: contains the actual data "), "\n                                    ", HTML.UL({
      class: "menu"
    }, "\n                                        ", HTML.LI("\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.I({
      class: "fa fa-users text-aqua"
    }), " 5 new members joined today\n                                            "), "\n                                        "), "\n                                        ", HTML.LI("\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.I({
      class: "fa fa-warning text-yellow"
    }), " Very long description here that may not fit into the page and may cause design problems\n                                            "), "\n                                        "), "\n                                        ", HTML.LI("\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.I({
      class: "fa fa-users text-red"
    }), " 5 new members joined\n                                            "), "\n                                        "), "\n\n                                        ", HTML.LI("\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.I({
      class: "fa fa-shopping-cart text-green"
    }), " 25 sales made\n                                            "), "\n                                        "), "\n                                        ", HTML.LI("\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.I({
      class: "fa fa-user text-red"
    }), " You changed your username\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.LI({
      class: "footer"
    }, HTML.A({
      href: "#"
    }, "View all"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.Comment(" Tasks: style can be found in dropdown.less "), "\n                        ", HTML.LI({
      class: "dropdown tasks-menu"
    }, "\n                            ", HTML.A({
      href: "#",
      class: "dropdown-toggle",
      "data-toggle": "dropdown"
    }, "\n                                ", HTML.I({
      class: "fa fa-flag-o"
    }), "\n                                ", HTML.SPAN({
      class: "label label-danger"
    }, "9"), "\n                            "), "\n                            ", HTML.UL({
      class: "dropdown-menu"
    }, "\n                                ", HTML.LI({
      class: "header"
    }, "You have 9 tasks"), "\n                                ", HTML.LI("\n                                    ", HTML.Comment(" inner menu: contains the actual data "), "\n                                    ", HTML.UL({
      class: "menu"
    }, "\n                                        ", HTML.LI("\n                                            ", HTML.Comment(" Task item "), "\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.H3("\n                                Design some buttons\n                                ", HTML.SMALL({
      class: "pull-right"
    }, "20%"), "\n                              "), "\n                                                ", HTML.DIV({
      class: "progress xs"
    }, "\n                                                    ", HTML.DIV({
      class: "progress-bar progress-bar-aqua",
      style: "width: 20%",
      role: "progressbar",
      "aria-valuenow": "20",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, "\n                                                        ", HTML.SPAN({
      class: "sr-only"
    }, "20% Complete"), "\n                                                    "), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.Comment(" end task item "), "\n                                        ", HTML.LI("\n                                            ", HTML.Comment(" Task item "), "\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.H3("\n                                Create a nice theme\n                                ", HTML.SMALL({
      class: "pull-right"
    }, "40%"), "\n                              "), "\n                                                ", HTML.DIV({
      class: "progress xs"
    }, "\n                                                    ", HTML.DIV({
      class: "progress-bar progress-bar-green",
      style: "width: 40%",
      role: "progressbar",
      "aria-valuenow": "20",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, "\n                                                        ", HTML.SPAN({
      class: "sr-only"
    }, "40% Complete"), "\n                                                    "), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.Comment(" end task item "), "\n                                        ", HTML.LI("\n                                            ", HTML.Comment(" Task item "), "\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.H3("\n                                Some task I need to do\n                                ", HTML.SMALL({
      class: "pull-right"
    }, "60%"), "\n                              "), "\n                                                ", HTML.DIV({
      class: "progress xs"
    }, "\n                                                    ", HTML.DIV({
      class: "progress-bar progress-bar-red",
      style: "width: 60%",
      role: "progressbar",
      "aria-valuenow": "20",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, "\n                                                        ", HTML.SPAN({
      class: "sr-only"
    }, "60% Complete"), "\n                                                    "), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.Comment(" end task item "), "\n                                        ", HTML.LI("\n                                            ", HTML.Comment(" Task item "), "\n                                            ", HTML.A({
      href: "#"
    }, "\n                                                ", HTML.H3("\n                                Make beautiful transitions\n                                ", HTML.SMALL({
      class: "pull-right"
    }, "80%"), "\n                              "), "\n                                                ", HTML.DIV({
      class: "progress xs"
    }, "\n                                                    ", HTML.DIV({
      class: "progress-bar progress-bar-yellow",
      style: "width: 80%",
      role: "progressbar",
      "aria-valuenow": "20",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, "\n                                                        ", HTML.SPAN({
      class: "sr-only"
    }, "80% Complete"), "\n                                                    "), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.Comment(" end task item "), "\n                                    "), "\n                                "), "\n                                ", HTML.LI({
      class: "footer"
    }, "\n                                    ", HTML.A({
      href: "#"
    }, "View all tasks"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.Comment(" User Account: style can be found in dropdown.less "), "\n                        ", Spacebars.include(view.lookupTemplate("_appUserItem")), "\n                    " ];
  }, function() {
    return [ "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "atSignIn");
      },
      class: "btn btn-default navbar-btn"
    }, "Sign in"), "\n                        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "atSignUp");
      },
      class: "btn btn-primary navbar-btn"
    }, "Register"), " \n                    " ];
  }), "\n                "), "\n            "), "\n        "), "\n    "), HTML.Raw('\n\n    <!-- Left side column. contains the logo and sidebar -->\n    <aside class="main-sidebar">\n\n        <!-- sidebar: style can be found in sidebar.less -->\n        <section class="sidebar">\n\n            <!-- Sidebar user panel (optional) -->\n            <div class="user-panel">\n                <div class="pull-left image">\n                    <img src="images/user2-160x160.jpg" class="img-circle" alt="User Image">\n                </div>\n                <div class="pull-left info">\n                    <p>Alexander Pierce</p>\n                    <!-- Status -->\n                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>\n                </div>\n            </div>\n\n            <!-- search form (Optional) -->\n            <form action="#" method="get" class="sidebar-form">\n                <div class="input-group">\n                    <input type="text" name="q" class="form-control" placeholder="Search...">\n                    <span class="input-group-btn">\n                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>\n              </span>\n                </div>\n            </form>\n            <!-- /.search form -->\n\n            <!-- Sidebar Menu -->\n            <ul class="sidebar-menu">\n                <li class="header">HEADER</li>\n                <!-- Optionally, you can add icons to the links -->\n                <li class="active"><a href="#"><span>Link</span></a>\n                </li>\n                <li><a href="#"><span>Another Link</span></a>\n                </li>\n                <li class="treeview">\n                    <a href="#"><span>Multilevel</span> <i class="fa fa-angle-left pull-right"></i></a>\n                    <ul class="treeview-menu">\n                        <li><a href="#">Link in level 2</a>\n                        </li>\n                        <li><a href="#">Link in level 2</a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n            <!-- /.sidebar-menu -->\n        </section>\n        <!-- /.sidebar -->\n    </aside>') ];
}));

}).call(this);
