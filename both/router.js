////////////////////////////////////////
//Frontend side of website
///////////////////////////////////////

FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('frontendLayout', {main: 'home'});
    }
});
FlowRouter.route('/about', {
    name: 'about',
    action: function() {
        BlazeLayout.render('frontendLayout', {main: 'about'});
    }
});
FlowRouter.route('/contact', {
    name: 'contact',
    action: function() {
        BlazeLayout.render('frontendLayout', {main: 'contact'});
    }
});
FlowRouter.route('/faq', {
    name: 'faq',
    action: function() {
        BlazeLayout.render('frontendLayout', {main: 'faq'});
    }
});
FlowRouter.route('/pricing', {
    name: 'pricing',
    action: function() {
        BlazeLayout.render('frontendLayout', {main: 'pricing'});
    }
});
FlowRouter.route('/privacy', {
    name: 'privacy',
    action: function() {
        BlazeLayout.render('frontendLayout', {main: 'privacy'});
    }
});
FlowRouter.route('/services', {
    name: 'services',
    action: function() {
        BlazeLayout.render('frontendLayout', {main: 'services'});
    }
});
FlowRouter.route('/support', {
    name: 'support',
    action: function() {
        BlazeLayout.render('frontendLayout', {main: 'support'});
    }
});
FlowRouter.route('/terms', {
    name: 'terms',
    action: function() {
        BlazeLayout.render('frontendLayout', {main: 'terms'});
    }
});

////////////////////////////////////////
//Dashboard side of website
///////////////////////////////////////
FlowRouter.route('/account', {
    name: 'account',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'account'});
    }
});
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'dashboard'});
    }
});
FlowRouter.route('/dashboard/company', {
    name: 'company',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'company'});
    }
});
FlowRouter.route('/profile', {
    name: 'profile',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'profile'});
    }
});


