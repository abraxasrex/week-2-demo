angular.module('exampleApp', []);

class mainController {
  message="Hello World!";
  groceries=[
    {name: 'apples', price: 2},
    {name: 'bananas', price: 3},
    {name: 'chard', price: 100} ] ;
  printMe(item){
    console.log('I am: ', item);
  }
  constructor(){

  }
}

angular.module('exampleApp').controller('mainController', mainController);
