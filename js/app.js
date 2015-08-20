

//95d0d2ce1cf911a


'use strict'

$(document).ready(function(){


    $.ajax({
      url: 'https://api.imgur.com/3/album/DDoWy',
      method: 'GET',
      headers: {
        'Authorization': 'Client-ID 95d0d2ce1cf911a'

      }
    })
    .done(function(get){
      var photos = get.data.images;


        var Photo = function(fileLocation) {
          this.path = fileLocation;
          this.vote = 1;
        };

        var Tracker = function(none) {
          this.photoArray = [];
          this.leftPhoto = none;
          this.rightPhoto = none;
        };

        var tracker1 = new Tracker('none');


        for(var i=0; i<photos.length; i++){
          tracker1.photoArray.push(new Photo(photos[i].link))
          tracker1.photoArray[i].path = photos[i].link;
        }
        Tracker.prototype.getRandomInt = function() {
          return (Math.floor(Math.random()*(14-1+1))+1)-1;
        };

        Tracker.prototype.setPhoto = function(){
          tracker1.leftPhoto = tracker1.photoArray[tracker1.getRandomInt()];
          tracker1.rightPhoto = tracker1.photoArray[tracker1.getRandomInt()];
            while (tracker1.leftPhoto.path == tracker1.rightPhoto.path) {
              tracker1.rightPhoto = tracker1.photoArray[tracker1.getRandomInt()];
            }
        };

        Tracker.prototype.displayPhotos = function() {
          $('#photo1').attr("src",tracker1.leftPhoto.path);
          $('#photo2').attr("src",tracker1.rightPhoto.path);

        };

        Tracker.prototype.incVote = function(cutest){
          cutest.vote = cutest.vote + 1;
        };

        Tracker.prototype.returnWinner = function(){
            if (tracker1.leftPhoto.vote > tracker1.rightPhoto.vote) {
              return $('#photo1');

            } else if (tracker1.leftPhoto.vote < tracker1.rightPhoto.vote){
                return $('#photo2');
              }
        };

        Tracker.prototype.listenForVote = function(){
          $('#photo1').on('click', function(){
            tracker1.incVote(tracker1.leftPhoto);
            var winnerLoc = tracker1.returnWinner();
            tracker1.displayWinner(winnerLoc);
            }
          );

          $('#photo2').on('click', function(){
            tracker1.incVote(tracker1.rightPhoto);
            var winnerLoc = tracker1.returnWinner();
            tracker1.displayWinner(winnerLoc);
          });
        }



        Tracker.prototype.encourageNext = function (){
          $('#vote').attr("class", "vote");
          $('#vote').on('click', function(){
            $('#vote').attr("class", "imgChart noButton");
            $('#KittyChart').attr("class", "imgChart noButton");
            tracker1.waitingForVote();
          });
        };

        Tracker.prototype.waitingForVote = function() {
          tracker1.setPhoto();
          tracker1.displayPhotos();
          tracker1.listenForVote();
        };

        Tracker.prototype.displayWinner = function(winner) {
          tracker1.encourageNext();
        };

      tracker1.waitingForVote();
      tracker1.setPhoto();
    })

function makeChart(l,r) {

    var data = [
      {
          value: r,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Right"
      },
      {
          value: l,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Left"
      }
    ];

    var newChart = document.getElementById("kittyChart").getContext('2d');
    var donutChart = new Chart(newChart).Doughnut(data);
}

makeChart(1,1);




    });


