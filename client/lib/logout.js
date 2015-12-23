Template.topbar.events({
    "click #logout": function (e, impl) {
        Meteor.logout(function (err) {
            if (err) {
                // show err message
            } else {
                //show alert that says logged out
            }
        });
        return FlowRouter.go("login")
    }
});