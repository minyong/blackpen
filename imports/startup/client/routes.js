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

Template.artwork.helpers({
  artworks() {
  	//return "iiii";
    return Artworks.find({});
  }
});

//route artworks

var artworkSection = FlowRouter.group({
    prefix: "/artworks"
});

artworkSection.route('/', {
    action: function() {
    	BlazeLayout.render('mainlayout', {main: 'artwork'});
    }
});

artworkSection.route('/:title', {
  action: function() {
    BlazeLayout.render("mainlayout", {main: "artwork"});
  }
});