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
$("#employee-form").on("submit", function(event) {
  event.preventDefault();

  // gather our form data
  var trainDataInput = {
    name: $("#name-input").val().trim(),
    role: $("#destination-input").val().trim(),
    startDate: $("#start-input").val().trim(),
    rate: $("#leave-input").val().trim()
  }

  console.log(trainDataInput);

  database.ref().push(trainDataInput);
});


// use this event listener to only retrieve newly added data that was added with the .push() method in firebase
// it will only send back one child at a time
database.ref().on('child_added', function(childSnapshot) {
  console.log('this is child_added');
  console.log(childSnapshot.val());

  // save reference to data in childSnapshot
  var trainData = childSnapshot.val();


  var startDateConverted = moment(trainData.startDate, "YYY-MM-DD");
  var totalMonthsWorked = moment().diff(startDateConverted, "months");

  var totalBilled = totalMonthsWorked * trainData.rate;

  // create a table row
  var $tr = $('<tr>');

  // create <td> tags for each column (6)
  // add content from childSnapshot.val() to corresponding <td> tags (skip total billed and months worked)
  var $tdName = $('<td>').text(trainData.name);
  var $tdRole = $('<td>').text(trainData.role);
  var $tdStart = $('<td>').text(trainData.startDate);
  var $tdMonthsWorked = $('<td>').text(trainData.totalMonthsWorked);
  var $tdRate = $('<td>').text(trainData.rate);
  var $tdTotalBilled = $('<td>').text(trainData.totalBilled);

  // append td tags to table row you created above
  $tr.append($tdName, $tdRole, $tdStart, $tdMonthsWorked, $tdRate, $tdTotalBilled);

  // lastly, append entire table row you created to $("tbody")
  $("tbody").append($tr);
});