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