angular.module('auditoriesList').component('list', {
  templateUrl: 'app/components/list/listView.html',
  controllerAs: 'auditoriesController',
  controller: function (auditoriesFactory, $scope) {
    auditoriesFactory.getAuditories().then((result) => {
      this.auditories = result;
      $scope.totalItems = this.auditories.length;
    });
    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;
    $scope.maxSize = 10;
  }   
});