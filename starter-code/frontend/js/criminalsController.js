
//creates the new controller and links it to the main Angular App. Other option is to make the controller on in main app

angular.module('SmoothCriminal', [])
.controller('CriminalsController', CriminalsController);

//inject http for get request and pass it in as an argument to the controller
CriminalsController.$inject = ['$http'];

function CriminalsController($http){
	//get all from the criminals API object http request
	var self = this;
	this.all = [];
	this.newCriminal = {};

	function getCriminals(){	
	  $http
	  	.get('http://localhost:3000/criminals')
    	.then(function(response){
      	console.log(response);
      	self.all = response.data.criminals;
    });
  }

  	this.createCriminal = function(){
  		$http
  			.post('http://localhost:3000/criminals', this.newCriminal)
  			.then(function(response){	
  			self.all.push(response.data.criminal);
  			});
  	};


  	getCriminals();

}