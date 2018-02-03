
import { Mongo } from 'meteor/mongo';


export const Artworks = new Mongo.Collection('artworks');

//Artworks.remove({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"});
//Artworks.remove({_id: Artworks.findOne({title: "untitled-by-jimmie-durham-at-whitney"})._id});

// visitdate1 = Date.parse("December 28, 2016");
// visitdate2 = Date.parse("January 1, 2017");
// visitdate3 = Date.parse("November 15, 2015");
// visitdate4 = Date.parse("November 15, 2016");
// visitdate5 = Date.parse("February 25, 2017");
// visitdate6 = Date.parse("March 12, 2017");
// visitdate7 = Date.parse("October 1, 2016");
//visitdate8 = Date.parse("April 2, 2017");
//visitdate9 = Date.parse("April 12, 2017");
//visitdate10 = Date.parse("April 17, 2017");
//visitdate11 = Date.parse("May 6, 2017");
//visitdate12 = Date.parse("August 17, 2017");
//visitdate13 = Date.parse("May 21, 2017");
//visitdate14 = Date.parse("September 4, 2017");
//visitdate15 = Date.parse("September 5, 2017");
//visitdate16 = Date.parse("November 23, 2017");
visitdate17 = Date.parse("December 23, 2017");

//Artworks.update({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum"}, {$addToSet: {pagetitle: "Burnt Identity", visitdate: visitdate1, image1: "ici-on-creve.jpg", image2: "figure-of-mother-and-child.jpg", artworktitle1: 'Ici on crève (\"We\'re Dying Here\")', link1: 'https://www.brooklynmuseum.org/opencollection/objects/210261', artworktitle2: 'Figure of Mother and Child (Phemba)', link2: 'https://www.brooklynmuseum.org/opencollection/objects/2948', artist1: "Aimé Mpane", artist2: 'Kongo people (Yombe subgroup)', date1: "2006-2008", date2: "19th century", landing: "Brooklyn Museum's portraits from Africa ask me questions about my identity."}}, {upsert: true} );
//Artworks.update({title: "menace-by-zeev-willy-neumann-at-saugerties-ny"}, {$addToSet: {pagetitle: "Home", visitdate: visitdate2, image1: "menace.jpg", artworktitle1: 'Menace', link1: 'http://zwneumann.tumblr.com/menace', artist1: "Ze'ev Willy Neumann", date1: "2014", landing: "There is no place like home"}}, {upsert: true} );
//Artworks.update({title: "pool-by-jihyeon-lee-at-society-of-illustrators"}, {$addToSet: {pagetitle: "City Whale", visitdate: visitdate3, image1: "pool.jpg", image2: "pool1.jpg", artworktitle1: 'Pool', link1: 'http://blog.picturebookmakers.com/post/125243484756/jihyeon-lee', artist1: "JiHyeon Lee", date1: "2013", landing: "The illustrated pool puts me face to face with a whale in the middle of New York City."}}, {upsert: true} );
//Artworks.update({title: "mimesis-by-dawit-l-petros-at-center-for-photography-woodstock"}, {$addToSet: {pagetitle: "Barn Becoming", visitdate: visitdate4, image1: "barn-becoming.jpg", artworktitle1: 'Mimesis', link1: 'http://www.dawitlpetros.com/', artist1: "Dawit L Petros", date1: "2007", landing: "I lie with a man under a barn."}}, {upsert: true} );
//Artworks.update({title: "heat-maps-by-richard-mosse-at-jack-shainman-gallery"}, {$addToSet: {pagetitle: "Refugee in February", visitdate: visitdate5, image1: "heatmap1.jpg", image2: "heatmap2.jpg", artworktitle1: 'Heat Maps (Tempelhof Interior)', link1: 'http://www.richardmosse.com/', artist1: "Richard Mosse", date1: "2016", landing: "The refugee in the Nazi airport connects with me through his body heat."}}, {upsert: true} );
//Artworks.update({title: "the-old-man-and-the-youth-by-riza-abbasi-at-metropolitan-museum-of-art"}, {$addToSet: {pagetitle: "Lithe Fruiterer", visitdate: visitdate6, image1: "old-man-and-youth.jpg", artworktitle1: 'The Old Man and the Youth', link1: 'http://www.metmuseum.org/art/collection/search/447798', artist1: "Riza Abbasi", date1: "17th century", landing: "I now understand the ubiquitous topos of an old man falling in love with a youth in Persian painting."}}, {upsert: true} );
//Artworks.update({title: "untitled-by-fred-sandback-at-dia-beacon"}, {$addToSet: {pagetitle: "Spatial Dia", visitdate: visitdate7, image1: "spatial-dia.jpg", artworktitle1: 'Untitled (from Ten Vertical Constructions [rust red variation])', link1: 'http://www.diaart.org/collection/collection/sandback-fred-untitled-from-ten-vertical-constructions-rust-red-variation-197779-2014-003-1-2', artist1: "Fred Sandback, All artwork by Fred Sandback © 2017 Fred Sandback Archive", date1: "1977-79", landing: "Dia:Beacon's monumental artworks define space anew."}}, {upsert: true} );
//Artworks.update({title: "rsvp-by-senga-nengudi-at-studio-museum"}, {$addToSet: {pagetitle: "Harlem Stockings", visitdate: visitdate8, image1: "harlem-stockings.jpg", artworktitle1: 'R.S.V.P.', link1: 'http://www.diaart.org/collection/collection/sandback-fred-untitled-from-ten-vertical-constructions-rust-red-variation-197779-2014-003-1-2', artist1: "Senga Nengudi", date1: "1976", landing: "Stockings in Harlem brings art historical awakening of black female sculptors of the 60s."}}, {upsert: true} );
//Artworks.update({title: "mit"}, {$addToSet: {pagetitle: "MIT Mom", visitdate: visitdate9, image1: "mit-mom.jpg", artworktitle1: 'MIT Killian Court', link1: 'https://www.technologyreview.com/s/522526/the-backstory-of-killian-court/', artist1: "William W. Bosworth", date1: "1916", landing: "The MIT architecture was a mother to me when I needed one."}}, {upsert: true} );
//Artworks.update({title: "dome-of-rock-at-jerusalem"}, {$addToSet: {pagetitle: "Dome of Muhammad", visitdate: visitdate10, image1: "dome-muhammad.jpg", artworktitle1: 'The Dome of the Rock', link1: 'https://archnet.org/sites/2814/publications/3027', artist1: "First Commissioned by Umayyad Caliph Abd al-Malik", date1: "691 CE", landing: "Muhammad and I fall in love at the Dome of the Rock"}}, {upsert: true} );
//Artworks.update({title: "yield-point-by-aki-sasamoto-at-the-kitchen"}, {$addToSet: {pagetitle: "Fault", visitdate: visitdate11, image1: "fault.jpg", artworktitle1: 'Yield Point', link1: 'http://thekitchen.org/event/aki-sasamoto-yield-point', artist1: "Aki Sasamoto", date1: "2017", landing: "Breakage shapes my life."}}, {upsert: true} );
//Artworks.update({title: "antibodies-by-carol-rama-at-new-museum"}, {$addToSet: {pagetitle: "Quartered Her like a Little Bird", visitdate: visitdate12, image1: "antibody.jpg", artworktitle1: 'Antibodies', link1: 'http://www.newmuseum.org/exhibitions/view/carol-rama-antibodies', artist1: "Carol Rama", date1: "1940", landing: "Shoes like claws quartered me like a little bird."}}, {upsert: true} );
//Artworks.update({title: "the-park-by-sam-anderson-at-sculpture-center"}, {$addToSet: {pagetitle: "Stork and I", visitdate: visitdate13, image1: "park.jpg", artworktitle1: 'The Park', link1: 'http://www.sculpture-center.org/exhibitionsExhibition.htm?id=121021', artist1: "Sam Anderson", date1: "2017", landing: "A woman looks into storks in a ghost town."}}, {upsert: true} );
//Artworks.update({title: "unknown-by-unknown-at-governors-island-art-fair"}, {$addToSet: {pagetitle: "Art Unpictured", visitdate: visitdate14, image1: "unknown.jpg", artworktitle1: 'unknown', link1: 'http://www.4heads.org/exhibitors2014/', artist1: "unknown", landing: "I cannot forget an artwork unpictured."}}, {upsert: true} );
//Artworks.update({title: "pretty-teacher-by-goya-at-philadelphia-museum-art"}, {$addToSet: {pagetitle: "Fly like a Witch", visitdate: visitdate15, image1: "goya.jpg", artworktitle1: 'Pretty Teacher', link1: 'https://www.philamuseum.org/collections/permanent/214962.html?mulR=1360774107|65', artist1: "Goya", date1: "1797-1798", landing: "I would die for a chance to fly like an old witch."}}, {upsert: true} );
//Artworks.update({title: "untitled-by-jimmie-durham-at-whitney"}, {$addToSet: {pagetitle: "Narcissistic Viewer", visitdate: visitdate16, image1: "jimmie-durham.jpg", artworktitle1: 'Untitled', link1: 'http://whitney.org/Exhibitions/JimmieDurham', artist1: "Jimmie Durham", date1: "1990", landing: "As a narcissistic viewer, I have freedom of appreciation."}}, {upsert: true} );
//Artworks.update({title: "magnetism-by-ahmed-mater-at-brooklyn-museum"}, {$addToSet: {pagetitle: "Diffuse History", visitdate: visitdate17, image1: "ahmed-mater.jpg", artworktitle1: 'Magnetism', link1: 'https://www.brooklynmuseum.org/exhibitions/ahmed_mater', artist1: "Ahmed Mater", date1: "2012", landing: "Using photography, Mater diffuses our memory of the Ka'ba as architecture and haff as a journey."}}, {upsert: true} );

//console.log(Artworks.findOne({title: "ici-on-creve-by-aime-mpane-at-brooklyn-museum-of-art"}));
