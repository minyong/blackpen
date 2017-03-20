import { Mongo } from 'meteor/mongo';


export const Artworks = new Mongo.Collection('artworks');

//Artworks.remove({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"});
//Artworks.remove({_id: Artworks.findOne({title: "the-old-man-and-the-youth-by-riza-abbasi-at-metropolitan-museum-of-art"})._id});

visitdate1 = Date.parse("December 28, 2016");
visitdate2 = Date.parse("January 1, 2017");
visitdate3 = Date.parse("November 15, 2015");
visitdate4 = Date.parse("November 15, 2016");
visitdate5 = Date.parse("February 25, 2017");
visitdate6 = Date.parse("March 12, 2017");
visitdate7 = Date.parse("October 1, 2016");

//Artworks.update({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum"}, {$addToSet: {pagetitle: "Burnt Identity", visitdate: visitdate1, image1: "ici-on-creve.jpg", image2: "figure-of-mother-and-child.jpg", artworktitle1: 'Ici on crève (\"We\'re Dying Here\")', link1: 'https://www.brooklynmuseum.org/opencollection/objects/210261', artworktitle2: 'Figure of Mother and Child (Phemba)', link2: 'https://www.brooklynmuseum.org/opencollection/objects/2948', artist1: "Aimé Mpane", artist2: 'Kongo people (Yombe subgroup)', date1: "2006-2008", date2: "19th century", landing: "Brooklyn Museum's portraits from Africa ask me questions about my identity."}}, {upsert: true} );
//Artworks.update({title: "menace-by-zeev-willy-neumann-at-saugerties-ny"}, {$addToSet: {pagetitle: "Home", visitdate: visitdate2, image1: "menace.jpg", artworktitle1: 'Menace', link1: 'http://zwneumann.tumblr.com/menace', artist1: "Ze'ev Willy Neumann", date1: "2014", landing: "There is no place like home"}}, {upsert: true} );
//Artworks.update({title: "pool-by-jihyeon-lee-at-society-of-illustrators"}, {$addToSet: {pagetitle: "City Whale", visitdate: visitdate3, image1: "pool.jpg", image2: "pool1.jpg", artworktitle1: 'Pool', link1: 'http://blog.picturebookmakers.com/post/125243484756/jihyeon-lee', artist1: "JiHyeon Lee", date1: "2013", landing: "The illustrated pool puts me face to face with a whale in the middle of New York City."}}, {upsert: true} );
//Artworks.update({title: "mimesis-by-dawit-l-petros-at-center-for-photography-woodstock"}, {$addToSet: {pagetitle: "Barn Becoming", visitdate: visitdate4, image1: "barn-becoming.jpg", artworktitle1: 'Mimesis', link1: 'http://www.dawitlpetros.com/', artist1: "Dawit L Petros", date1: "2007", landing: "I lie with a man under a barn."}}, {upsert: true} );
//Artworks.update({title: "heat-maps-by-richard-mosse-at-jack-shainman-gallery"}, {$addToSet: {pagetitle: "Refugee in February", visitdate: visitdate5, image1: "heatmap1.jpg", image2: "heatmap2.jpg", artworktitle1: 'Heat Maps (Tempelhof Interior)', link1: 'http://www.richardmosse.com/', artist1: "Richard Mosse", date1: "2016", landing: "The refugee in the Nazi airport connects with me through his body heat."}}, {upsert: true} );
//Artworks.update({title: "the-old-man-and-the-youth-by-riza-abbasi-at-metropolitan-museum-of-art"}, {$addToSet: {pagetitle: "Lithe Fruiterer", visitdate: visitdate6, image1: "old-man-and-youth.jpg", artworktitle1: 'The Old Man and the Youth', link1: 'http://www.metmuseum.org/art/collection/search/447798', artist1: "Riza Abbasi", date1: "17th century", landing: "I now understand the ubiquitous topos of an old man falling in love with a youth in Persian painting."}}, {upsert: true} );
//Artworks.update({title: "untitled-by-dan-flavin-at-dia-beacon"}, {$addToSet: {pagetitle: "Spatial Dia", visitdate: visitdate7, image1: "spatial-dia.jpg", artworktitle1: 'Untitled (to you, Heiner, with admiration and affection)', link1: 'http://www.diaart.org/program/exhibitions-projects/dan-flavin-collection-display', artist1: "Dan Flavin", date1: "1974", landing: "Dia:Beacon's monumental artworks define space anew."}}, {upsert: true} );

//console.log(Artworks.findOne({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"}));
