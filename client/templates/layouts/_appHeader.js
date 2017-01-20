Template._appHeader.helpers({
	'appName': function() {
		if (typeof AdminConfig !== 'undefined' && typeof AdminConfig.appName == 'string')
			return AdminConfig.appName;
		else
			return 'Dashboard'
	}
});