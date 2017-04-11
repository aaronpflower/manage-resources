routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        template: require('./home.html'),
        controller: 'HomeController',
        controllerAs: 'home'
    })
    .state('home.about', {
        url: 'about',
        views: {

            // the main template will be placed here (relatively named)
            '': { 
                template: require('./partial-about.html') 
            },

            // the child views will be defined here (absolutely named)
            'columnOne@home.about': { 
                template: require('./tool-box.html')
            },

            // for column two, we'll define a separate controller 
            'columnTwo@home.about': { 
                template: require('./resource-list.html'),
                controller: function($scope) {
                    $scope.message = 'test';
                    $scope.scotches = [
                        {
                            name: 'Macallan 12',
                            price: 50
                        },
                        {
                            name: 'Chivas Regal Royal Salute',
                            price: 10000
                        },
                        {
                            name: 'Glenfiddich 1937',
                            price: 20000
                        }
                    ];
                }
            }
        }
        
    });
}