$(document).ready(function() {

  var config = {
    apiKey: "AIzaSyCN8AYtsFVZfiLVVsOjUVHvsx-BIaL26Gw",
    authDomain: "train-scheduler-8cf29.firebaseapp.com",
    databaseURL: "https://train-scheduler-8cf29.firebaseio.com",
    projectId: "train-scheduler-8cf29",
    storageBucket: "train-scheduler-8cf29.appspot.com",
    messagingSenderId: "1028160556782"
  };
  firebase.initializeApp(config);

var database = firebase.database();



// set up event listener for form submit to capture our employee data
// $("#theTrain-form").on("submit", function(event) {
//   event.preventDefault();

$("#subit").on("click". function() {

  // gather our form data
 
   var name = $("#name-input").val().trim();
   var role = $("#destination-input").val().trim();
   var startDate = $("#leave-input").val().trim();
   var rate = $("#fequency-input").val().trim();

  // push new to firebase
  database.ref().push( {
    name: name,
    dest: dest,
    time: time,
    freq: freq,
    
    
    
  });
  
  $("input").val('');
  return false;

});

  // console.log(trainDataInput);

  



// use this event listener to only retrieve newly added data that was added with the .push() method in firebase
// it will only send back one child at a time
database.ref().on('child_added', function(childSnapshot) {
 
// console log childSnapshot

  var name = childSnapshot.val().name;
  var dest = childSnapshot.val().dest;
  var time = childSnapshot.val().time;
  var freq = childSnapshot.val().time;

  console.log("Name: " + name);
  console.log("Destination: " + dest);
  console.log("Time: " + time);
  console.log("Frequency: " + freq);


 // train data to append to table

  $("#currentTime").text(currentTime);
  $("trainTable").append(
    "<tr><td id='nameDisplay'>" + childSnapshot.val().name +
    "</td><td id='destDisplay'>" + childSnapshot.val().dest +
    "</td><td id='freqDisplay'>" + moment(nextTrain).format("HH:mm") +
    "</td><td id='awayDisplay'>" + minsAway + ' minutes until arrival' + "</td></tr>")),

  function(errorObject){
    console.log("Read failed: " + errorObject.code)
  });

});
