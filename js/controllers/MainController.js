app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [
    {
		series: "American Horror Story",
    series_img: "img/ahs.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "First Episode",
    description: "The fifth season of American Horror Story focuses on the Downtown Los Angeles Hotel Cortez which has been recently purchased by a New York fashion designer, Will Drake (Cheyenne Jackson). The 90 year old hotel is haunted by demons and mysterious ghosts including the founder, James Patrick March (Evan Peters); heroin junkie Sally (Sarah Paulson); and the strap-on-wielding Addiction Demon.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00),
  	},
    {
    series: "House of Cards",
    series_img: "img/house_of_cards.jpg",
    genre: "Political drama",
    season: 1,
    episode: "The Pilot",
    description: "U.S. Rep. Francis Underwood of South Carolina starts out as a ruthless politician seeking revenge in this Netflix original production. Promised the post of Secretary of State in exchange for his support, his efforts help to ensure the election of Garrett Walker to the presidency. But Walker changes his mind before the inauguration, telling Underwood he's too valuable in Congress. Outwardly, Underwood accepts his marching orders, but secretly he and his wife, an environmental activist, make a pact to destroy Walker and his allies. Based on the U.K. miniseries of the same name, the U.S. version offers a look behind the scenes at the greed and corruption in American politics. A number of real-life media figures make cameo appearances.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00),
    }
 ];

}]);
