Accounts.onCreateUser(function(options, user) {
    // Use provided profile in options, or create an empty object
    user.profile = options.profile || {};

    // Assigns first and last names to the newly created user object
    user.profile.firstName = options.firstName;
    user.profile.lastName = options.lastName;

    // Basic Role Setup
    user.roles = ["User"];

    // Basic Organization Setup
    user.profile.organization = ["Org"];

    // Basic Profile Picture Setup
    user.profile.profPicture = Meteor.absoluteUrl() + "img/default/user.jpg";

    // Returns the user object
    return user;
});