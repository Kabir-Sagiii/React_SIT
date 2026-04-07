var data = {
  name: "Rohan",
  city: "Mumbai",
  id: 101,
  display: function (value) {
    console.log("data displayed", value);
  },
  address: {
    state: "MH",
  },
};

//Access

//var value= objectname.property-keyname

var value = data.name;
console.log(value);

var cityValue = data.city;
console.log(cityValue);

data.display(9999);

var obj = data.address;
console.log(obj);
