(function(){
  angular
  .module( "grumbles")
  .directive( "grumbleShow",function(){
    return {
      templateUrl: "js/grumbles/_grumble_show.html",
      restrict: 'A',
      scope: {
        grumble: "="
      },
      link: function(scope){
        console.log(scope.grumble)
        scope.myName = 'Alexa';
        scope.complementMe = function(){
          alert("You're looking good today");
        }
      }
    }
  });
}());
