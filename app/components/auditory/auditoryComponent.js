angular.module('auditoriesList').component('auditory',{
  templateUrl:'app/components/auditory/auditoryView.html',
  controllerAs:'auditoryController',
  controller: function(auditoriesFactory, $stateParams, $state) {
    this.loading = true;
    auditoriesFactory.getAuditoryById($stateParams.auditoryId).then((result) => {
      this.loading = false;
      if (result===undefined) $state.go('NotFound');
      this.auditory = result;
    });
  }
});