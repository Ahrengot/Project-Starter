import Parse from 'parse'
import Reflux from 'reflux'
import _ from 'underscore'
import Promise from 'promise'

const UserActions = Reflux.createActions({
	logIn: {
		asyncResult: true
	}
});

let grabFacebookData = function() {
	return new Promise(function(resolve, reject) {
		let fields = [
			'email',
			'name',
			'first_name',
			'gender',
			'friends',
			'location',
			'work'
		];

		FB.api("/me?fields=" + fields.join(',') + ",picture.width(480)", function (response) {
			if ( response && !response.error ) {
				// Get fields as coma-seperated list
				let data = _.pick.apply(_, [response].concat([].slice.call(fields)));

				data = _.extend(data, {
					avatar: response.picture.data.url,
					// Set fbId as top-level key for easier queries
					fbId: data.authData.facebook.id
				});

				// Use camelcase instead of snake case
				data.firstName = data.first_name
				delete data.first_name


				resolve(data);
			} else {
				reject("Error loading user: ", response);
			}
		});
	});
}

UserActions.logIn.listen(function() {
	// Make sure facebok did init before we try login.
	// If FB didn't init set up a timer and re-trigger login
	// as soon as FB SDK is ready
	if ( ! window.didInitFb ) {
		let interval = setInterval(function(){
			if ( window.didInitFb ) {
				clearInterval(interval);
				UserActions.logIn();
			}
		}, 50);
		return;
	}

	if ( Parse.User.current() ) {
		return this.completed(Parse.User.current());
	}

	Parse.FacebookUtils.logIn('public_profile,email', {
		success: (user) => {
			grabFacebookData()
				.then((userData) => {
					user.save(userData).then(_this.completed, _this.failed);
				}, this.failed);
		}, error: (user, res) => {
			this.failed(res);
		}
	});
});


export default UserActions