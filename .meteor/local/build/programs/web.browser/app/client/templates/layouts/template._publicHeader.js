(function(){
Template.__checkName("_publicHeader");
Template["_publicHeader"] = new Template("Template._publicHeader", (function() {
  var view = this;
  return HTML.HEADER({
    class: "main-header"
  }, HTML.Raw("\n        <!-- Logo -->\n        "), HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    },
    class: "logo"
  }, HTML.Raw("<b>Tebas</b>"), "Manager"), HTML.Raw("\n        <!-- Header Navbar: style can be found in header.less -->\n        "), HTML.NAV({
    class: "navbar navbar-static-top",
    role: "navigation"
  }, "\n            ", HTML.DIV({
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
    }, "Register"), "\n                    " ];
  }), "\n                "), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
