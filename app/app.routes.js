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