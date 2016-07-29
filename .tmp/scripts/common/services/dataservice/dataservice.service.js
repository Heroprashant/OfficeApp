/* global angular*/
(function() {
    'use strict';
    /**
     * @ngdoc service
     * @name securestorage.service:securestorage
     * @description
     * @requires https://docs.angularjs.org/api/ng/service/$window
     * @requires https://www.npmjs.com/package/cordova-keychain
     * @requires securestorage.constant:APPSTORAGECONSTANTS
     * <h1>Secure Storage Services</h1>
     * <p>@TODO Describe Services</p>
     */
    angular
        .module('service.dataservice')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$q', '$http', 'DATASERVICECONSTANTS'];

    function dataservice($q, $http, DATASERVICECONSTANTS) {
        // Global Variables
        var defer, urlParams;

        // Services
        var service = {
            getAllContacts: getAllContacts,
            getSearchResult: getSearchResult,
            getByEmployeeId: getByEmployeeId,
            getAllProjects: getAllProjects,
            getByProjectId: getByProjectId,
            getAllNews: getAllNews,
            getByNewsId: getByNewsId
        };
        return service;

        // Get all contacts from DB
        function getAllContacts() {
            defer = $q.defer();

            $http({
                method: 'GET',
                url: DATASERVICECONSTANTS.BASE_URL + '/contacts',
                timeout: 5000
            }).then(function successCallback(response) {
                defer.resolve(response);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        }

        // Get the result from DB only for the search query
        function getSearchResult(subject, searchQuery) {
            defer = $q.defer();

            $http({
                method: 'GET',
                url: DATASERVICECONSTANTS.BASE_URL + '/' + subject + '?q=' + searchQuery,
                timeout: 5000
            }).then(function successCallback(response) {
                defer.resolve(response);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        }

        // Get specific employee by ID
        function getByEmployeeId(employeeId) {
            defer = $q.defer();

            $http({
                method: 'GET',
                url: DATASERVICECONSTANTS.BASE_URL + '/contacts?employeeId=' + employeeId,
                timeout: 5000
            }).then(function successCallback(response) {
                defer.resolve(response);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        }

        // Get all projects from DB
        function getAllProjects() {
            defer = $q.defer();

            $http({
                method: 'GET',
                url: DATASERVICECONSTANTS.BASE_URL + '/projects',
                timeout: 5000
            }).then(function successCallback(response) {
                defer.resolve(response);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        }

        // Get specific project by ID
        function getByProjectId(projectId) {
            defer = $q.defer();

            $http({
                method: 'GET',
                url: DATASERVICECONSTANTS.BASE_URL + '/projects?projectId=' + projectId,
                timeout: 5000
            }).then(function successCallback(response) {
                defer.resolve(response);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        }

        // Get all news from DB
        function getAllNews() {
            defer = $q.defer();

            $http({
                method: 'GET',
                url: DATASERVICECONSTANTS.BASE_URL + '/news',
                timeout: 5000
            }).then(function successCallback(response) {
                defer.resolve(response);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        }

        // Get specific news by ID
        function getByNewsId(newsId) {
            defer = $q.defer();

            $http({
                method: 'GET',
                url: DATASERVICECONSTANTS.BASE_URL + '/news?newsId=' + newsId,
                timeout: 5000
            }).then(function successCallback(response) {
                defer.resolve(response);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise;
        }
    }
})();
