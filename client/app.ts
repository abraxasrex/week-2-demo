angular.module('exampleApp', []);

class mainController {
  message="Hello World!";
  searchTerm = 'fruit';
  itemToUpdate;
  groceries=[
    {name: 'apples', type: 'fruit', price: 2, image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUsjl4nzHTX1BJap-1HzhJpqr0ygK364Ma8HaVzHBAMPYyz8PerQ'},
    {name: 'bananas', type: 'fruit', price: 3, image: 'http://ichef.bbci.co.uk/news/660/cpsprodpb/50DC/production/_85500702_bunch-of-seven-think-976.jpg'},
    {name: 'chard', type: 'vegetable', price: 100, image: ''} ] ;
  printMe(item){
    console.log('I am: ', item);
  }
  deleteThis (item){
    this.groceries.splice(this.groceries.indexOf(item), 1);
  }
  constructor(){

  }
}

angular.module('exampleApp').controller('mainController', mainController);
