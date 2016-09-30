// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//
//= require action_cable
//= require_self


(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);


//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bootstrap-sprockets

// Neomax JS
//= require jquery.countTo.js
//= require jquery.fitvids.js
//= require jquery.flexslider.js
//= require jquery.magnific-popup.js
//= require jquery.singlePageNav.js
//= require jquery.sticky-kit.js
//= require jquery.zoom.js
//= require appear.js
//= require contact.js
//= require gmap3.js
//= require imagesloaded.pkgd.js
//= require isotope.pkgd.js
//= require jarallax-video.js
//= require jarallax.js
//= require jqBootstrapValidation.js
//= require owl.carousel.js
//= require plugins.min.js
//= require smoothscroll.js
//= require submenu-fix.js
//= require twitterFetcher.js
//= require wow.js
//= require cloudinary
//= require custom.min.js
//= require masonry.pkgd

// at the end
//= require_tree .

//= require_tree ./channels
