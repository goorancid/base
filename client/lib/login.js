Template.login.events({
    'click #login': function(e, t) {
        e.preventDefault();
        // Getting values from fields on page
        var email = $('#loginEmail').val(),
            password = $('#loginPassword').val();
        // Calling the loginWithPassword function on the user
        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                // Returning a sweetAlert
                return swal({
                    title: "Email or password incorrect",
                    text: "Please try again",
                    timer: 1700,
                    showConfirmButton: false,
                    type: "error"
                });
            } else {
                FlowRouter.go("/dashboard");
            }
        });
        return false;
    }
});