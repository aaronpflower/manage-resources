// routes.$inject = ['$stateProvider'];

// export default function routes($stateProvider) {
//     $stateProvider
//     .state('about', {
//         url: '/about',
//         views: {

//             // the main template will be placed here (relatively named)
//             '': { 
//                 template: require('./partial-about.html') 
//             },

//             // the child views will be defined here (absolutely named)
//             'columnOne@about': { 
//                 template: 'Look I am a column!' 
//             },

//             // for column two, we'll define a separate controller 
//             'columnTwo@about': { 
//                 template: require('./table-data.html'),
//                 controller: function($scope) {
//                     $scope.message = 'test';
//                     $scope.scotches = [
//                         {
//                             name: 'Macallan 12',
//                             price: 50
//                         },
//                         {
//                             name: 'Chivas Regal Royal Salute',
//                             price: 10000
//                         },
//                         {
//                             name: 'Glenfiddich 1937',
//                             price: 20000
//                         }
//                     ];
//                 }
//             }
//         }
        
//     });
// }