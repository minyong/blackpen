import { Mongo } from 'meteor/mongo';


export const Artworks = new Mongo.Collection('artworks');

//Artworks.remove({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"});
//Artworks.remove({_id: Artworks.findOne({title: "mimesis-by-dawit-l-petros-at-center-for-photography-woodstock"})._id});

visitdate1 = Date.parse("December 28, 2016");
visitdate2 = Date.parse("January 1, 2017");
visitdate3 = Date.parse("November 15, 2015");
visitdate4 = Date.parse("November 15, 2016");

//Artworks.update({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum"}, {$addToSet: {pagetitle: "Burnt Identity", visitdate: visitdate1, image1: "ici-on-creve.jpg", image2: "figure-of-mother-and-child.jpg", artworktitle1: 'Ici on crève (\"We\'re Dying Here\")', artworktitle2: 'Figure of Mother and Child (Phemba)', artist1: "Aimé Mpane", artist2: 'Kongo people (Yombe subgroup)', date1: "2006-2008", date2: "19th century", landing: "Brooklyn Museum's portraits from Africa ask me questions about my identity."}}, {upsert: true} );
//Artworks.update({title: "menace-by-zeev-willy-neumann-at-saugerties-ny"}, {$addToSet: {pagetitle: "Home", visitdate: visitdate2, image1: "menace.jpg", artworktitle1: 'Menace', artist1: "Ze'ev Willy Neumann", date1: "2014", landing: "There is no place like home"}}, {upsert: true} );
//Artworks.update({title: "pool-by-jihyeon-lee-at-society-of-illustrators"}, {$addToSet: {pagetitle: "City Whale", visitdate: visitdate3, image1: "pool.jpg", artworktitle1: 'Pool', artist1: "JiHyeon Lee", date1: "2013", landing: "The illustrated pool puts me face to face with a whale in the middle of New York City."}}, {upsert: true} );
//Artworks.update({title: "mimesis-by-dawit-l-petros-at-center-for-photography-woodstock"}, {$addToSet: {pagetitle: "Barn Becoming", visitdate: visitdate4, image1: "barn-becoming.jpg", artworktitle1: 'Mimesis', artist1: "Dawit L Petros", date1: "2007", landing: "I lie with a man under a barn."}}, {upsert: true} );

//console.log(Artworks.findOne({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"}));
