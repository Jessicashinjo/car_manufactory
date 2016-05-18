
function Car () {
 this.manufactured_date = Date.now();
}

function Make (makeManufacturer) {
  this.manufacturer = makeManufacturer;
}

Make.prototype = new Car();


function Chevrolet (name) {
  this.modelName = name;
}
Chevrolet.prototype = new Make("GM");

function Camaro (name, license) {
  this.licenseNumber = license;
}

Camaro.prototype = new Chevrolet("Camaro");

var camaro1 = new Camaro("Camaro", "573-B1W");
var camaro2 = new Camaro("Camaro", "326-R8K");
var camaro3 = new Camaro("Camaro", "HOW-817");

console.log("camaro1", camaro1);
console.log("camaro2", camaro2);
console.log("camaro3", camaro3);



