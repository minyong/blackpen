import React from 'react';
import ReactDOM from 'react-dom';

Artworks = new Mongo.Collection('artworks');

Artworks.insert({title: "Ici on creve", body: 'Ici on crève (\"We\'re Dying Here\") Aimé Mpane 2006-2008'});

const artwork = Artworks.findOne({title: "Ici on creve"});
console.log(artwork);

$(document).ready(function() {
	render(artwork, document.getElementById('root'));
});