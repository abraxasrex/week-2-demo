
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
  remoteAPI = 'https://jsonplaceholder.typicode.com/posts';
  localAPI = 'file:///home/jona/code_demos/ng-week-2/client/index.html/myItems';
  items = [];
  itemToPost;
  goHome(){
    this.$state.go('Home');
  }
    constructor(private $state: ng.ui.IStateService, private $http: ng.IHttpService){
      console.log('hello page1Controller');
      this.$http.get(this.remoteAPI).then((res)=>{
        console.log('res: ', res);
        this.items = res.data;
      }).catch((err)=>{
        console.log(err);
      });
    }

    public postItem(){
      this.$http.post(this.localAPI, this.itemToPost).then(()=>{
        console.log(`yeah.`);
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
