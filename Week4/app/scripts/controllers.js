'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;

            $scope.showMenu = false;
            $scope.message = "Loading ...";
                        $scope.dishes = menuFactory.getDishes().query(
                function(response) {
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });

                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

            $scope.showDish = false;
            $scope.message="Loading ...";
                        $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})            .$promise.then(
                            function(response){
                                $scope.dish = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
            );
            
        }])

        .controller('DishCommentController', ['$scope', 'menuFactory', function($scope,menuFactory) {
            $scope.today = new Date();
            $scope.rating = {author:"", rating: 5, comment:"", date: $scope.today};
            
            $scope.sendRating = function () {           
               console.log($scope.rating); $scope.dish.comments.push($scope.rating);
                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                $scope.ratingForm.$setPristine();
                
                $scope.rating = {rating:5, comment:"", author:"", date: $scope.today};
            }
            console.log("hello");
        }])

        .controller('IndexController', ['$scope','menuFactory','corporateFactory',function($scope, menuFactory, corporateFactory) {
            
            //code from excercise guide -- we use 'featured' to denote featured dish instead of 'dish'
            $scope.showDish = false;
            $scope.message="Loading ...";
            $scope.featured = menuFactory.getDishes().get({id:0})                        .$promise.then(
                            function(response){
                                $scope.featured = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        );;
            //code from excercise guide^
            
            $scope.promotions = menuFactory.getPromotion(0);
            $scope.specialist = corporateFactory.getLeader("EC");
        }])// implement the IndexController and About Controller here

        .controller('AboutController',['$scope','corporateFactory',function($scope,corporateFactory){
            $scope.leadership = corporateFactory.getLeaders();
        }])

;