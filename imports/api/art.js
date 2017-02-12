import { Mongo } from 'meteor/mongo';


export const Artworks = new Mongo.Collection('artworks');

//Artworks.remove({title: "menace-by-zeev-willy-neumann-at-saugerties-ny"});

//Artworks.update({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"}, {$addToSet: {pagetitle: "Burnt Identity", image1: "ici-on-creve.jpg", image2: "figure-of-mother-and-child.jpg", artworktitle1: 'Ici on crève (\"We\'re Dying Here\")', artworktitle2: 'Figure of Mother and Child (Phemba)', artist1: "Aimé Mpane", artist2: 'Kongo people (Yombe subgroup)', date1: "2006-2008", date2: "19th century", landing: "Brooklyn Museum's portraits from Africa ask me questions about my identity."}}, {upsert: true} );
//Artworks.update({title: "menace-by-zeev-willy-neumann-at-saugerties-ny"}, {$addToSet: {pagetitle: "Home", image1: "menace.jpg", artworktitle1: 'Menace', artist1: "Ze'ev Willy Neumann", date1: "2014", landing: "There is no place like home"}}, {upsert: true} );

//console.log(Artworks.findOne({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"}));