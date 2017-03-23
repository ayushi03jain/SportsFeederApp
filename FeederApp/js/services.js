angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http) { 
      // registered a service (ergastAPIservice) within the module (F1FeederApp.services)
      // http://ergast.com/mrd/ (This is the API used)

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2016/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

     ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2016/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2016/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

      //Get all the players for the selected team
    ergastAPI.getPlayersList = function (id) {
        return $http({
            method: 'GET',
            url: 'http://api.football-data.org/v1/teams/' + id + '/players',
            headers: {
                'X-Auth-Token': '1af706d645e948ac9986473c41cde41b',
            }
        });
    }

      // Gets all teams for "Premier League 2016/17" (id 426) 
      //"European Championships France 2016" (id is 424) is disabled
    ergastAPI.getTeams = function () {
        return $http({
            method: 'GET',
            url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
            headers: {
                'X-Auth-Token': '1af706d645e948ac9986473c41cde41b',
            }
        });
    }


    return ergastAPI;
  });


   