'use strict'

// var photoArray = []; //array of photo objects that carry the path and the vote
// //tally, and perhaps the name too.

//[{}, {}, {}...]

var Photo = function(fileLocation) { //constructor
  this.path = fileLocation;
  this.vote = 1;
};

var Tracker = function() {
  this.photoArray = [];
  this.leftPhoto = '';
  this.rightPhoto = '';
};

Photo.prototype.highlight = function() {
//highlight photo after clicked
};

Tracker.prototype.getRandomInt = function() {
  return (Math.floor(Math.random()*(14-1+1))+1)-1;
};


Tracker.prototype.setphoto = function(){
  this.leftPhoto = this.photoArray[this.getRandomInt()];
  this.rightPhoto = this.photoArray[this.getRandomInt()];
    while (this.leftPhoto.path == this.rightPhoto.path) {
    this.rightPhoto = this.photoArray[this.getRandomInt()];
  }
};


Tracker.prototype.displayPhotos = function() {
  var theLeftPhoto = document.getElementById("photo1");
  theLeftPhoto.attributes[0].value = this.leftPhoto.path;

  var theRightPhoto = document.getElementById("photo2");
  theRightPhoto.attributes[0].value = this.rightPhoto.path;
};



Tracker.prototype.waitingForVote = function() {
  this.setphoto();
  this.displayPhotos();

  //recieve click and increment the vote count
  var theLeftPhoto = document.getElementById("photo1");
  theLeftPhoto.addEventListener('click', function(){
    tracker1.leftPhoto.vote = tracker1.leftPhoto.vote + 1;
  });

  var theRightPhoto = document.getElementById("photo2");
  theRightPhoto.addEventListener('click', function(){
    tracker1.rightPhoto.vote = tracker1.rightPhoto.vote + 1;
  });
  //event listener on each photo
  //drawTheChart()?
  //giveUserOptionToVoteAgain()?
  //event listener will call dispalyWinner()
  //call displayPhoto()
  //recieveVote()
};

Tracker.prototype.displayWinner = function() {
//event listner will call waitingForVote()
//call highlight()
};


//Set the process in motion by instantiating a tracker and calling State 1 method
var tracker1 = new Tracker();

tracker1.photoArray.push(new Photo('img/kittens/photo1.jpg'));
console.log(tracker1.photoArray[0].path);
tracker1.photoArray.push(new Photo('img/kittens/photo2.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo3.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo4.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo5.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo6.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo7.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo8.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo9.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo10.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo11.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo12.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo13.jpg'));
tracker1.photoArray.push(new Photo('img/kittens/photo14.jpg'));

tracker1.waitingForVote();
