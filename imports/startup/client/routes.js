//router
import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { render } from 'react-dom';

MainLayout = React.createClass({
  render() {
    return (
      <section className="content">

	    <nav>

	      <div className="logo">
		      <a href="/"><img src="/images/mysitelogo3.gif"/></a>
		      <p>Blackpen promotes visual art appreciation by publishing blackpen critics&rsquo; writings about local art in their areas</p>
		  </div>
	      <ul>
	        <li><a href="/artworks">Artworks</a></li>
	        <li><a href="/about">About blackpen</a></li>
	        <li><a href="/how-to-become-a-blackpen-critic">How to become a blackpen critic</a></li>
	      </ul>
	     </nav>
	     <main>{this.props.content}</main>
	     <div id="root"></div> 
	  </section>
    );
  }
});

Home = React.createClass({
  render() {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
});

About = React.createClass({
  render() {
    return (
    	<div>
		      <p>Blackpen began as a way to promote visual art appreciation among casual art critics with or without professional training, called blackpen critics. It invites anyone to submit writings about any artworks, and it publishes on this website.</p>

			  <p>Blackpen&rsquo;s approach is rarely a study of the artist&rsquo;s biography or the social contexts in which the artworks were made. Rather, Blackpen encourages art appreciation from the viewer&rsquo;s perspective, how the art form interacts with the viewer&rsquo;s personal context at the moment.</p> 

			  <p>Blackpen is named after a 15-century Persian painter of the same name (siyah qalam), whose whimsical cartoon-like figures inspired the blackpen project.</p>

			  <p>The Blackpen logo uses <a href="http://www.iranicaonline.org/uploads/files/siahqalam/siahqalam_fig_4.jpg" target="_blank">the techniques of gradient layers or folds that the 15-century artist used in his works.</a></p>

			  <p>Blackpen is founded and operated by Minyong Cho, and you can read more about her here.</p>
       </div>
    );
  }
});

Become = React.createClass({
  render() {
    return (
      <div>
        <p>You are invited to submit any writing on an artwork you find meaningful to you. Black pen is not seeking art historical studies that delve into the artists’ biographies or manifestoes, although if you do submit such studies, they might be published without having it evaluated by your peer scholars. In that sense, Blackpen does not require you to situate the artworks in their contemporary contextual settings and does not encourage you to conduct research to learn the historical meanings of the artworks. Rather, we want your personal story of why you find an artwork meaningful in your own settings, thereby contextualizing it within your own life experiences. Blackpen celebrates visual art’s place in our everyday life and its enrichment of our life experiences.</p>
        <p>When submitting your writing, please include one picture that you have taken yourself of the artwork, so as not to infringe upon any other photographers’ copywrights. You will be notified by email within a week if the submission is accepted, and, if accepted, your writing will be read out loud by our reader to be recorded and published on blackpen.org right away.</p>
        <p>(share buttons on the post)</p>

      </div>
    );
  }
});


Artwork = React.createClass({
  render() {
    return (
    	<div>
    	    <div id="root"></div> 
	    </div>
    );
  }
});

import { Artworks } from '../../api/art.js';


// Artworks = React.createClass({
//   ...
//   mixins: [ReactMeteorData],
//   getMeteorData() {
//     var data = {};
//     var postId = this.props.postId;
//     var handle = Meteor.subscribe('singlePost', postId);
//     if(handle.ready()) {
//       data.post = Artworks.findOne({title: 'Ici on creve'});
//     }
//     return data;
//   },
//   ...
// });

// Artwork = React.createClass({

// 	mixins: [ReactMeteorData],
// 	  getMeteorData() {
// 	    var data = {};
// 	    var postId = this.props.postId;
// 	    var handle = Meteor.subscribe('singlePost', postId);
// 	    if(handle.ready()) {
// 	      data.post = Artworks.findOne({_id: postId});
// 	    }
// 	    return data;

// 	  getContent() {
// 	    return (
// 	      <div>
// 	        <h3>{this.data.post.title}</h3>
// 	        <p>{this.data.post.content}</p>
// 	      </div>
// 	    );
// 	  },
// 	  render() {
// 	    return (
// 	      <div>
// 	        <a href="/">Back</a>
// 	        {this.data.post? this.getContent() : <p>Loading...</p>}
// 	      </div>
// 	    );
// 	  }
// });

FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <Home />});
  }
});

FlowRouter.route('/about', {
  action() {
    ReactLayout.render(MainLayout, {content: <About />});
  }
});

FlowRouter.route('/how-to-become-a-blackpen-critic', {
  action() {
    ReactLayout.render(MainLayout, {content: <Become />});
  }
});

// FlowRouter.route('/:postId', {
//   action(params) {
//     ReactLayout.render(MainLayout, {content: <Artwork {...params} />});
//   }
// });

//route artworks
var artworkSection = FlowRouter.group({
    prefix: "/artworks"
});

artworkSection.route('/', {
    action: function() {
    	ReactLayout.render(MainLayout, {content: <Artwork />});
    }
});