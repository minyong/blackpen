import { Mongo } from 'meteor/mongo';


export const Artworks = new Mongo.Collection('artworks');

//Artworks.remove({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"});

//Artworks.update({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"}, {$addToSet: {pagetitle: "Burnt Identity", image1: "ici-on-creve.jpg", image2: "figure-of-mother-and-child.jpg", artworktitle1: 'Ici on crève (\"We\'re Dying Here\")', artworktitle2: 'Figure of Mother and Child (Phemba)', artist1: "Aimé Mpane", artist2: 'Kongo people (Yombe subgroup)', date1: "2006-2008", date2: "19th century"}}, {upsert: true} );

//console.log(Artworks.findOne({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"}));