class mainController {
    public message = `Hello from the controller!`;
    public items = [
      {title: 'a', body: 'albatross'},
      {title: 'b', body: 'barbados'}
    ];

    constructor(){
    }
}
angular.module('exampleApp').controller('mainController', mainController);
