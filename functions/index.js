/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.saveStudent = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("response from saveStudent!");
});

exports.getAllStudents = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.send(JSON.stringify({ "students":[{"id":1,"Name":"Tait","Email":"tmilnthorpe0@usatoday.com","Address":"6382 Harbort Alley"},
  {"id":2,"Name":"Udall","Email":"ukleinplac1@abc.net.au","Address":"90 Clyde Gallagher Plaza"},
  {"id":3,"Name":"Franklin","Email":"fduignan2@craigslist.org","Address":"06 Tennessee Crossing"},
  {"id":4,"Name":"Marc","Email":"mdonnett3@artisteer.com","Address":"2 Michigan Road"},
  {"id":5,"Name":"Wilone","Email":"wbasler4@multiply.com","Address":"336 Nobel Crossing"},
  {"id":6,"Name":"Berget","Email":"bjanus5@blinklist.com","Address":"17 Dayton Hill"},
  {"id":7,"Name":"Nikolos","Email":"nyounie6@hud.gov","Address":"28 Clove Center"},
  {"id":8,"Name":"Merle","Email":"myggo7@disqus.com","Address":"78054 Elka Hill"},
  {"id":9,"Name":"Concettina","Email":"cgarnham8@hubpages.com","Address":"3177 Northview Circle"},
  {"id":10,"Name":"Catherin","Email":"cpetric9@shop-pro.jp","Address":"3 Norway Maple Place"},
  {"id":11,"Name":"Theodoric","Email":"tblossa@npr.org","Address":"154 Badeau Drive"},
  {"id":12,"Name":"Kikelia","Email":"kkeyzorb@so-net.ne.jp","Address":"11225 Sugar Terrace"},
  {"id":13,"Name":"Benedict","Email":"bguisec@google.ca","Address":"0862 Riverside Crossing"},
  {"id":14,"Name":"Carlee","Email":"cosipenkod@blogger.com","Address":"62 Dawn Avenue"},
  {"id":15,"Name":"Lainey","Email":"lbouchiere@php.net","Address":"47 Leroy Lane"},
  {"id":16,"Name":"Fernande","Email":"fneljesf@bigcartel.com","Address":"9529 Lakewood Gardens Terrace"},
  {"id":17,"Name":"Janette","Email":"jfehnersg@abc.net.au","Address":"698 Sachs Terrace"},
  {"id":18,"Name":"Merrile","Email":"mbaileh@cbslocal.com","Address":"3 Petterle Junction"},
  {"id":19,"Name":"Robinson","Email":"rprenticei@who.int","Address":"6 Burning Wood Place"},
  {"id":20,"Name":"Isadore","Email":"igiannazzij@jalbum.net","Address":"008 Burrows Terrace"}]}))
});