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

FlowRouter.route('/privacy-policy', {
  name: 'privacy-policy',
  action() {
    BlazeLayout.render('mainlayout', {main: 'privacy-policy'});
  }
});

FlowRouter.route('/:title', {
  name: 'artwork',
  action() {
    BlazeLayout.render('mainlayout', {main: 'artwork'});
  }
});

Template.home.helpers({
  artworks() {
    return Artworks.find({}, {sort: {visitdate: -1}});
  }
});

Template.artwork.helpers({
  artwork: function() {
    var artworktitle = FlowRouter.getParam('title');
    var artwork = Artworks.findOne({title: artworktitle}) || {};
    return artwork;
  }
});

let imgCount;
let imgTally = 0;

Template.artwork.onRendered(function () {
  this.autorun(() => {
    if (this.subscriptionsReady()) {
      Tracker.afterFlush(() => {
        imgCount = this.$('img').length;
      });
    }
  });
});

Template.artwork.events({
  'load img': function (event, template) {
    if (++imgTally >= imgCount) {
      (template.view.template.imagesLoaded.bind(template))();
    }
  }
});

Template.artwork.imagesLoaded = function () {
  $(document).ready(function(){
    $(this).scrollTop(0);
  });
};

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