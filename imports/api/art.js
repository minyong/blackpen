import { Mongo } from 'meteor/mongo';


export const Artworks = new Mongo.Collection('artworks');

// Artworks.remove({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"});
// Artworks.remove({title: "menace-by-zeev-willy-neumann-at-saugerties-ny"});

var date1 = new Date("January 1, 2017");
var date2 = new Date("December 28, 2016");
visitdate1 = date1.getTime();
visitdate2 = date2.getTime();

// Artworks.update({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"}, {$addToSet: {pagetitle: "Burnt Identity", visitdate: visitdate1, image1: "ici-on-creve.jpg", image2: "figure-of-mother-and-child.jpg", artworktitle1: 'Ici on crève (\"We\'re Dying Here\")', artworktitle2: 'Figure of Mother and Child (Phemba)', artist1: "Aimé Mpane", artist2: 'Kongo people (Yombe subgroup)', date1: "2006-2008", date2: "19th century", landing: "Brooklyn Museum's portraits from Africa ask me questions about my identity."}}, {upsert: true} );
// Artworks.update({title: "menace-by-zeev-willy-neumann-at-saugerties-ny"}, {$addToSet: {pagetitle: "Home", visitdate: visitdate2, image1: "menace.jpg", artworktitle1: 'Menace', artist1: "Ze'ev Willy Neumann", date1: "2014", landing: "There is no place like home"}}, {upsert: true} );

//console.log(Artworks.findOne({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"}));
