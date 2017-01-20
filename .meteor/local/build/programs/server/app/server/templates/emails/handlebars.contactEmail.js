(function(){Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;\">\n<head>\n<meta name=\"viewport\" content=\"width=device-width\" />\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n<title>Actionable emails e.g. reset password</title>\n\n\n<style type=\"text/css\">\nimg {\nmax-width: 100%;\n}\nbody {\n-webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6;\n}\nbody {\nbackground-color: #f6f6f6;\n}\n@media only screen and (max-width: 640px) {\n  h1 {\n    font-weight: 600 !important; margin: 20px 0 5px !important;\n  }\n  h2 {\n    font-weight: 600 !important; margin: 20px 0 5px !important;\n  }\n  h3 {\n    font-weight: 600 !important; margin: 20px 0 5px !important;\n  }\n  h4 {\n    font-weight: 600 !important; margin: 20px 0 5px !important;\n  }\n  h1 {\n    font-size: 22px !important;\n  }\n  h2 {\n    font-size: 18px !important;\n  }\n  h3 {\n    font-size: 16px !important;\n  }\n  .container {\n    width: 100% !important;\n  }\n  .content {\n    padding: 10px !important;\n  }\n  .content-wrapper {\n    padding: 10px !important;\n  }\n  .invoice {\n    width: 100% !important;\n  }\n}\n</style>\n</head>\n\n<body style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6; background: #f6f6f6; margin: 0; padding: 0;\">\n\n<table class=\"body-wrap\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background: #f6f6f6; margin: 0; padding: 0;\">\n\t<tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;\">\n\t\t<td style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0;\" valign=\"top\"></td>\n\t\t<td class=\"container\" width=\"600\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto; padding: 0;\" valign=\"top\">\n\t\t\t<div class=\"content\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;\">\n\t\t\t\t<table class=\"main\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background: #fff; margin: 0; padding: 0; border: 1px solid #e9e9e9;\">\n\t\t\t\t\t<tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;\">\n\t\t\t\t\t\t<td class=\"content-wrap\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;\" valign=\"top\">\n\t\t\t\t\t\t\t<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;\">\n\t\t\t\t\t\t\t\t<tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;\">\n\t\t\t\t\t\t\t\t\t<td class=\"content-block\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;\" valign=\"top\">\n\t\t\t\t\t\t\t\t\t\t{{ fromName }} sent you a message:\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;\">\n\t\t\t\t\t\t\t\t\t<td class=\"content-block\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;\" valign=\"top\">\n\t\t\t\t\t\t\t\t\t\t{{ message }}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;\">\n\t\t\t\t\t\t\t\t\t<td class=\"content-block\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;\" valign=\"top\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"mailto:{{ fromEmail }}\" class=\"btn-primary\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background: #348eda; margin: 0; padding: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;\">Reply to {{ fromName }}</a>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"footer\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;\">\n\t\t\t\t\t<table width=\"100%\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;\">\n\t\t\t\t\t\t<tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;\">\n\t\t\t\t\t\t\t<td class=\"aligncenter content-block\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;\" align=\"center\" valign=\"top\">You are receiving this email because you signed up at <a href=\"{{ siteURL }}\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0; padding: 0;\">Site Name</a>.</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div></div>\n\t\t</td>\n\t\t<td style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0;\" valign=\"top\"></td>\n\t</tr>\n</table>\n\n</body>\n</html>\n");Handlebars.templates["contactEmail"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "contactEmail"});};
}).call(this);
