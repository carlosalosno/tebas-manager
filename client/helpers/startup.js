// Apply AdminLTE skin
Meteor.startup(function() {	
	if (typeof AdminConfig === 'undefined') {
		AdminConfig = {
			skin: 'skin-blue'
		};
	}

	if (AdminConfig.skin !== 'undefined' && typeof AdminConfig.skin === 'string')
		$('body').addClass(AdminConfig.skin);
	else
		$('body').addClass('skin-blue');
});