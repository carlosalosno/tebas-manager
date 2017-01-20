Template._appUserItem.helpers({
	'userName': function() {
		return 'User Name';
	},
	'userRole': function() {
		return 'User Role';
	},
	'userDateCreated': function() {
		var date = new Date();
		return date.toDateString();
	}
});