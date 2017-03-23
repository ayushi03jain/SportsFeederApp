angular.module('F1FeederApp').

    // Teams Controller
controller('teamsController', function ($scope, ergastAPIservice) {
    $scope.teams = [];
    ergastAPIservice.getTeams().success(function (respone) {
        console.log("Response is   :  " + response);
        $scope.teams = respone.standings;
    })
}).

  controller('playersController', function ($scope, ergastAPIservice) {
      $scope.playersList = [];
      ergastAPIservice.getPlayersList($scope.id).success(function (response) {
          //Digging into the response to get the relevant data
          $scope.playersList = response.players[0];
      });


});
