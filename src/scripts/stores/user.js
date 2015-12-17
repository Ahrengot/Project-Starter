import Parse from 'parse';
import Reflux from 'reflux';
import UserActions from '../actions/user';

let defaultData = {
	loading: false,
	user: null
};

const UserStore = Reflux.createStore({
	listenables: UserActions,
	init: function() {
		this.data = defaultData;

		if ( Parse.User.current() ) {
			this.data.user = Parse.User.current().toJSON();
		}
	},
	onLogIn: function() {
		this.data.loading = true;
		this.data.user = null;
		this.update();
	},
	onLogInCompleted: function(user) {
		this.data.loading = false;
		this.data.user = user.toJSON();
		this.update();
	},
	onLogInFailed: function() {
		console.log("Login failed: ", arguments);
		this.data.loading = false;
		this.data.user = null;
		this.update();
	},


	update: function() {
		this.trigger(this.data);
	}
});

export default UserStore;