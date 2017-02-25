angular.module('directivePractice').controller('mainCtrl', function($scope, lessonService){
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test = "Two-way data binding!";
});
