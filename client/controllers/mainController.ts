class mainController {
    public message = `Hello from the controller!`;
    public items;
    public item;
    public remoteAPI = 'https://jsonplaceholder.typicode.com/posts';
    public localAPI = 'file:///home/jona/code_demos/ng-week-2/client/index.html/myItems';
    public postItem(){
      this.$http.post(this.localAPI, this.item).then(()=>{
        console.log(`yeah.`);
      }).catch((err)=>{
        console.log(err);
      });
    }
    constructor(private $http: ng.IHttpService){
      this.$http.get(this.remoteAPI).then((res)=>{
        console.log('res: ', res);
        this.items = res.data;
      }).catch((err)=>{
        console.log(err);
      });
    }
}
angular.module('exampleApp').controller('mainController', mainController);
