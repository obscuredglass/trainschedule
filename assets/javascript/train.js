$(document).ready(function() {

var config = {
  apiKey: "AIzaSyAkq55gUH-o7ym5OKPswl0B_p-v7xbz6Bk",
  authDomain: "classwork-8bf8d.firebaseapp.com",
  databaseURL: "https://classwork-8bf8d.firebaseio.com",
  projectId: "classwork-8bf8d",
  storageBucket: "classwork-8bf8d.appspot.com",
  messagingSenderId: "654627669791"
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

  function(errorObject){
    console.log("Read failed: " + errorObject.code)
  });

});
