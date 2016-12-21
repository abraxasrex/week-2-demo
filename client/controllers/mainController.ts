class mainController {
    public message = `Hello from the controller!`;
    public items = [
      {title: 'a', body: 'albatross'},
      {title: 'b', body: 'barbados'}
    ];
    constructor(){
      console.log('hello main')
    }
}
class page1Controller {
    constructor(){
      console.log('hello page1')
    }
}
angular.module('exampleApp').controller('mainController', mainController);
angular.module('exampleApp').controller('page1Controller', page1Controller);
