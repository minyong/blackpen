import { Mongo } from 'meteor/mongo';

export const Artworks = new Mongo.Collection('artworks');

//Artworks.insert({title: "ici-on-creve", body: 'Ici on crève (\"We\'re Dying Here\") Aimé Mpane 2006-2008'});
