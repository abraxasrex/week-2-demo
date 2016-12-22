
let superHeroes = [
  {id: 1529273738, name: 'wonder woman', power: 'truth lasso'},
  {id: 1529334343738, name: 'spiderman', power: 'webbing'},
  {id: 899328423949224, name: 'hyper kamilah', power: '5 dimensional coding'}
]

class mainController {
  superHeroes;
    constructor(){
      this.superHeroes = superHeroes;
    }
}

class page1Controller {
  remoteAPI = 'https://jsonplaceholder.typicode.com/posts';
  localAPI = 'file:///home/jona/code_demos/ng-week-2/client/index.html/myItems';
  items;
  message = new Date().toISOString().slice(0,10);
  goHome(){
    this.$state.go('Home');
  }
    constructor(private $state: ng.ui.IStateService, private $http: ng.IHttpService){
      this.$http.get(this.remoteAPI).then((res)=>{
        this.items = res.data;
      }).catch((err)=>{
        console.log(err);
      });
    }
}

class detailsController{
  superHeroes;
  hero;
  updateHero(){
    this.$state.go('Home');
  }
  constructor(private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService){
    this.superHeroes = superHeroes;
    this.hero = this.superHeroes.filter((hero)=>{
      return hero.id == parseInt($stateParams["id"]);
    })[0];
    console.log(this.hero);
  }
}

angular.module('exampleApp').controller('mainController', mainController);
angular.module('exampleApp').controller('page1Controller', page1Controller);
