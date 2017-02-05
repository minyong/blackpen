import { Template } from 'meteor/templating';

//data
import { Artworks } from '../../api/art.js';

//router
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/about', {
  name: 'about',
  action() {
    BlazeLayout.render('mainlayout', {main: 'about'});
  }
});

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('mainlayout', {main: 'home'});
  }
});

FlowRouter.route('/how-to-become-a-blackpen-critic', {
  name: 'become',
  action() {
    BlazeLayout.render('mainlayout', {main: 'become'});
  }
});

FlowRouter.route('/about-me', {
  name: 'about-me',
  action() {
    BlazeLayout.render('mainlayout', {main: 'about-me'});
  }
});

FlowRouter.route('/:title', {
  name: 'artwork',
  action() {
    BlazeLayout.render('mainlayout', {main: 'home'});
  }
});

Template.home.helpers({
  artworks() {
    return Artworks.find({});
  }
});

//route artworks

// var artworkSection = FlowRouter.group({
//     prefix: "/artworks"
// });

// artworkSection.route('/', {
//     action: function() {
//     	BlazeLayout.render('mainlayout', {main: 'home'});
//     }
// });

// artworkSection.route('/:title', {
//   action: function() {
//     BlazeLayout.render("mainlayout", {main: "artwork"});
//   }
// });