
var app = angular.module('app', []);
 
app.config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode(true);    
}]);

app.controller('WYWVCtrl', function($scope, $http, $location) {
    $scope.location = $location;
    $scope.$watch('location.search()', function() {
        $scope.target = ($location.search()).target;
        $scope.formattedFilter = "filter: {display_id: " + $scope.target + " }";
    }, true);
    
  $http(
      {
            method: 'GET',
            url:'wywv.json',
            data: '',
            headers: {
                'Content-Type': 'application/json'
            }
        }
      ).then(function(res){
          $scope.wywv = res.data;
          
          var results = [];
          var searchField = "display_id";
          var searchVal = $scope.target;
          
        //   console.log(parseInt(searchVal));
        //   console.log(res.data.length);
        //   console.log(parseInt(searchVal) > res.data.length + 1);
          
          //check if searchVal has been altered
          //or if they are accessing the page without
          //a querystring value
          if(!searchVal || !IsNumeric(searchVal) || (parseInt(searchVal) > res.data.length + 1) ||(parseInt(searchVal) < 0)){
             searchVal = 1;
          }
          
          for (var i=0 ; i < res.data.length ; i++)
          {
             if (res.data[i][searchField] == searchVal) {
              results.push(res.data[i]);
             }
          }
           $scope.searchResult = results;
        });
        
  /*
  // configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'index.html',
				controller  : 'WYWVCtrl'
			})
			
			// route for the contact page
			.when('/index', {
				templateUrl : 'index.html',
				controller  : 'WYWVCtrl'
			});
	});
  */
  
  
  /*      
  app.filter('returnFirstQuestion', function () {
      var searchField = "display_id";
      var results = [];
      for (var i=0 ; i < $scope.wywv.length ; i++){
        if ($scope.wywv[i][searchField] == 1) {
          //console.log(res.data[i]);
          results.push(res.data[i]);
         }
      }
      return results;
  });
  */
  
  function IsNumeric(input)
{
    return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
}
});
