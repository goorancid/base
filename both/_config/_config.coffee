@Config =
  name: 'GameOn! Sports'
  title: 'Time to Play.'
  subtitle: 'Sports & stuff'
  logo: ->
    '<b>' + @name + '</b>'
  footer: ->
    @name + ' Copyright ' + new Date().getFullYear()
  emails:
    from: 'info@' + Meteor.absoluteUrl()
  blog: 'http://famousreader.com'
  about: 'http://famousreader.com'
  username: false
  homeRoute: '/'
  dashboardRoute: '/dashboard'
  socialMedia:
    facebook:
      url: 'http://facebook.com/'
      icon: 'facebook'
    twitter:
      url: 'http://twitter.com/'
      icon: 'twitter'
    github:
      url: 'http://github.com/'
      icon: 'github'
    info:
      url: 'http://famousreader.com'
      icon: 'link'
  publicRoutes: ['home']