//A Variable has just one key (the variable name) and one value
var hotel = "Quay";
//This retrieves Quay:
hotel;
//Arrays can store mulitiple pieces of information
//Each item in the array is another key/value pair
var hotels = ['Quay', 'Park', 'Beach', 'Bloomsbury']
//This retrieves 'Park'
hotel[1];
//constructor objects, used to create mulitiple object within the page
function Hotel(name,rooms){
    this.name = name;
    this.rooms = rooms;
}
//creates instances of the objects using the new keyword and then a call to the constructor function
var hotel1 = new Hotel('Quay', 40);
var hotel2 = new Hotel('Park', 120);
//This retrieves 'Park'
hotel2.name;

//The script is placed inside an immediately invoked function expression which helps protect the scope of variables
function() {
  //Create Hotel object and write out the offer details

  //creat a hotel object using literal synthax
  var hotel = {
    name: "Park",
    roomRate: 240, //Amount in dollars
    discount: 15, //Percentage discounted
    offerPrice: function(){
      var offerRate = this.roomRate * ((100 - this.discount)/ 100);
      return offerRate;
    }
  }
}

/
