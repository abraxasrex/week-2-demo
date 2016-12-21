class mainController {
    constructor(){
      console.log('hello mainController')
    }
}
class page1Controller {
    constructor(){
      console.log('hello page1Controller')
    }
}
angular.module('exampleApp').controller('mainController', mainController);
angular.module('exampleApp').controller('page1Controller', page1Controller);
