
App.Collections.Photos = Backbone.Firebase.Collection.extend({

	model: App.Models.Photo,

	url: 'https://photobox-7b242.firebaseio.com',

	autoSync: false,

	getPortraits: function(){
		return this.where({location: portrait});
	}


});


 