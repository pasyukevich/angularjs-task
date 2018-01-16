angular.module('auditoriesList').run(['$templateCache', function($templateCache) {$templateCache.put('components/auditory/auditoryView.html','<section class="container">\r\n        <div>\r\n\r\n                <h3>Auditory#{{auditoryController.auditory.name}}</h3>\r\n                <p>Auditory type: {{auditoryController.auditory.auditoryType.name}}<br>\r\n                Campus# {{auditoryController.auditory.buildingNumber.name}}</p>\r\n        </div>\r\n        <a href="/">back</a>\r\n</section>');
$templateCache.put('components/list/listView.html','<div class="container">\r\n  <label>Filter by campus:\r\n    <input   ng-model="search.buildingNumber.name">\r\n  </label>\r\n  <label>Filter by auditory type:\r\n    <input   ng-model="search.auditoryType.name">\r\n  </label>\r\n  <label>Search by auditory number:\r\n    <input   ng-model="search.name">\r\n  </label>\r\n</div>\r\n\r\n<div class="list-group container">\r\n  <div class="list-group-item" ng-repeat="auditory in filterData=(auditoriesController.auditories|toArray | filter:search) | limitTo:itemsPerPage:itemsPerPage*(currentPage-1)">\r\n    <h3>Auditory#{{auditory[\'name\']}}</h3>\r\n    <a ui-sref="auditory({auditoryId:auditory.id})">more</a>\r\n  </div>\r\n  <ul class="pagination-sm" uib-pagination boundary-link-numbers="true" total-items="filterData.length" max-size="maxSize" ng-model="currentPage"></ul>\r\n</div>');
$templateCache.put('components/notFound/notFoundView.html','<section class="container">\r\n    <h2 class="text-center">404</h2>\r\n    <a href="/">back</a>\r\n</section>');}]);