var app = angular.module('guesstheNumbers', []);
app.controller('guesstheNumbersCtrl', guesstheNumbersCtrl)
function guesstheNumbersCtrl($scope) {
$scope.verifyTheGuess = function(){
	$scope.deviation = $scope.original - $scope.guess;
	$scope.noofTries = $scope.noofTries + 1;
}
$scope.initializeTheGame = function() {
	$scope.noofTries = 0;
	$scope.original = Math.floor((Math.random() * 1000) + 1);
	$scope.guess = null;
	$scope.deviation = null;
}
$scope.initializeTheGame();
}