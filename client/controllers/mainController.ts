
let superHeroes = [
  {id: 1529273738, name: 'wonder woman', power: 'truth lasso'},
  {id: 1529334343738, name: 'spiderman', power: 'webbing'},
  {id: 899328423949224, name: 'hyper kamilah', power: '5 dimensional coding'}
]


class mainController {
  superHeroes;
    constructor(){
      console.log('hello mainController');
      this.superHeroes = superHeroes;
    }
}

class page1Controller {
  goHome(){
    this.$state.go('Home');
  }
    constructor(private $state: ng.ui.IStateService){
      console.log('hello page1Controller')
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
    // console.log('hello details controller')
     console.log($stateParams["id"]);
    this.hero = this.superHeroes.filter((hero)=>{
      console.log(hero.id);
      return hero.id == parseInt($stateParams["id"]);
    })[0];
    console.log(this.hero);
  }
}

angular.module('exampleApp').controller('mainController', mainController);
angular.module('exampleApp').controller('page1Controller', page1Controller);
