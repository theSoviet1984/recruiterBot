const userCtrl = require( '../ctrls/userCtrl' );

module.exports = app => {

	app.put( `/api/admin/login`, userCtrl.login );
	app.put( `/api/admin/email`, userCtrl.updateEmail );
	app.post( `/api/admin`, userCtrl.createUser );

}
