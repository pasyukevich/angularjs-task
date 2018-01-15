angular.module('auditoriesList').component('auditory',{
  templateUrl:'app/components/auditory/auditoryView.html',
  controllerAs:'auditoryController',
  controller: function(auditoriesFactory, $stateParams, $state) {
    auditoriesFactory.getAuditoryById($stateParams.auditoryId).then((result) => {
      if (result===undefined) $state.go('NotFound');
      this.auditory = result;
    });
  }
});