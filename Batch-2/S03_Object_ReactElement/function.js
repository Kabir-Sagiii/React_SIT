var product = {
  id: 101,
  name: "iphone",
  price: 99900,
  display: function () {
    console.log("function is called");
  },
  changePrice: function () {
    console.log("price is changed");
  },
};

// objectname.propertyKeyname()

product.display();

//1. object can contains any number of functions
//2. how to call those functions
