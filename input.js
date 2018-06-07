var app = angular.module("myApp", []);

app.controller("mainController", [
  "$scope",
  "$http",
  function($scope, $http) {
    $scope.view = 0;
    $scope.show = 0;
    // Food2Fork API: Used to pull recipes
    $.ajax({
      url:
        "https://food2fork.com/api/search?key=[API_KEY]",
      dataType: "json",
      success: function(parsed_json) {
        $scope.titleRec1 = parsed_json.recipes[0].title;
        $scope.linkRec1 = parsed_json.recipes[0].source_url;
        $scope.imgRec1 = parsed_json.recipes[0].image_url;

        $scope.titleRec2 = parsed_json.recipes[1].title;
        $scope.linkRec2 = parsed_json.recipes[1].source_url;
        $scope.imgRec2 = parsed_json.recipes[1].image_url;

        $scope.titleRec3 = parsed_json.recipes[2].title;
        $scope.linkRec3 = parsed_json.recipes[2].source_url;
        $scope.imgRec3 = parsed_json.recipes[2].image_url;
      }
    });

    navigator.geolocation.getCurrentPosition(success, error);

    var lat, long;
    function success(pos) {
      var crd = pos.coords;
      lat = crd.latitude;
      long = crd.longitude;
      // Zomato API used to find restaurants based on current location
      $.ajax({
        url:
          "https://developers.zomato.com/api/v2.1/geocode?lat=" +
          lat +
          "&lon=" +
          long +
          "&apikey=[API_KEY]",
        dataType: "json",
        success: function(parsed_json) {
          $scope.view = 0;
          $scope.show = 0;
          $scope.loc = parsed_json.location.city_name;

          $scope.nameRest1 = parsed_json.nearby_restaurants[0].restaurant.name;
          $scope.urlRest1 = parsed_json.nearby_restaurants[0].restaurant.url;
          $scope.locRest1 =
            parsed_json.nearby_restaurants[0].restaurant.location.address;
          $scope.typeRest1 =
            parsed_json.nearby_restaurants[0].restaurant.cuisines;
          $scope.ratingRest1 =
            parsed_json.nearby_restaurants[0].restaurant.user_rating.aggregate_rating;

          $scope.nameRest2 = parsed_json.nearby_restaurants[1].restaurant.name;
          $scope.urlRest2 = parsed_json.nearby_restaurants[1].restaurant.url;
          $scope.locRest2 =
            parsed_json.nearby_restaurants[1].restaurant.location.address;
          $scope.typeRest2 =
            parsed_json.nearby_restaurants[1].restaurant.cuisines;
          $scope.ratingRest2 =
            parsed_json.nearby_restaurants[1].restaurant.user_rating.aggregate_rating;

          $scope.nameRest3 = parsed_json.nearby_restaurants[2].restaurant.name;
          $scope.urlRest3 = parsed_json.nearby_restaurants[2].restaurant.url;
          $scope.locRest3 =
            parsed_json.nearby_restaurants[2].restaurant.location.address;
          $scope.typeRest3 =
            parsed_json.nearby_restaurants[2].restaurant.cuisines;
          $scope.ratingRest3 =
            parsed_json.nearby_restaurants[2].restaurant.user_rating.aggregate_rating;
        }
      });
    }

    function error(msg) {
      alert("You must allow location access to view restaurants near you. Please refresh and hit allow.");
    }

    // Cocktaildb API call
    $.ajax({
      url: "http://www.thecocktaildb.com/api/json/v1/1/random.php",
      dataType: "json",
      success: function(parsed_json) {
        $scope.nameD = parsed_json.drinks[0].strDrink;
        $scope.instructD = parsed_json.drinks[0].strInstructions;
        $scope.imgD = parsed_json.drinks[0].strDrinkThumb;
        $scope.descD = parsed_json.drinks[0].strGlass;

        $scope.ing1 = parsed_json.drinks[0].strIngredient1;
        $scope.ing2 = parsed_json.drinks[0].strIngredient2;
        $scope.ing3 = parsed_json.drinks[0].strIngredient3;
        $scope.meas1 = parsed_json.drinks[0].strMeasure1;
        $scope.meas2 = parsed_json.drinks[0].strMeasure2;
        $scope.meas3 = parsed_json.drinks[0].strMeasure3;
      }
    });
  }
]);
