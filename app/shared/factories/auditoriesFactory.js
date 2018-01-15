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