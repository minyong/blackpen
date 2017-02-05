import { Mongo } from 'meteor/mongo';


export const Artworks = new Mongo.Collection('artworks');

// Artworks.remove({title: "ici-on-creve"});

//Artworks.update({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"}, {$addToSet: {image1: }, {body: 'Ici on crève (\"We\'re Dying Here\") Aimé Mpane 2006-2008'}}, {upsert: true} );
