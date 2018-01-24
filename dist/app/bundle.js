! function () {
    let app = angular.module('auditoriesList', ['ui.router', 'angular-toArrayFilter', 'ui.bootstrap']);
}();
angular.module('auditoriesList').config(function ($stateProvider, $urlRouterProvider) {
    let states = [{
            name: 'main',
            url: '/',
            component: 'list'
        },
        {
            name: 'auditory',
            url: '/details/{auditoryId}',
            component: 'auditory'
        },
        {
            name:'NotFound',
            url:'/NotFound',
            templateUrl:'components/notFound/notFoundView.html'
        }
    ];
    states.forEach(function (state) {
        $stateProvider.state(state);
    });
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/NotFound');
});
angular.module('auditoriesList').run(function ($uiRouter) {
    var StateTree = window['ui-router-visualizer'].StateTree;
    var el = StateTree.create($uiRouter, null, {
        height: 100,
        width: 300
    });
    el.className = 'statevis';
});
angular.module('auditoriesList').factory('auditoriesFactory', ($http) => {
    let auditoriePromise = null;

    return {
        getAuditories() {
            if (!auditoriePromise) {
                auditoriePromise = $http.get('https://students.bsuir.by/api/v1/auditory').then(function (response) {
                    let data = Array.from(response.data);
                    data.forEach((curr,index)=>{
                        curr.id=index;
                    });
                    return data;
                });
            }
            return auditoriePromise;
        },
        getAuditoryById(id) {
            return this.getAuditories().then((result) => {
                return result[id];
            });
        }
    }
});
angular.module('auditoriesList').component('auditory',{
  templateUrl:'components/auditory/auditoryView.html',
  controllerAs:'auditoryController',
  controller: function(auditoriesFactory, $stateParams, $state) {
    auditoriesFactory.getAuditoryById($stateParams.auditoryId).then((result) => {
      if (result===undefined) $state.go('NotFound');
      this.auditory = result;
    });
  }
});
angular.module('auditoriesList').component('list', {
  templateUrl: 'components/list/listView.html',
  controllerAs: 'auditoriesController',
  controller: function (auditoriesFactory, $scope) {
    auditoriesFactory.getAuditories().then((result) => {
      this.auditories = result;
    });
    $scope.currentPage=1;
    $scope.itemsPerPage = 10;
    $scope.maxSize = 10;
  }   
});