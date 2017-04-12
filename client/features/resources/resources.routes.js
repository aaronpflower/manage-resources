routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
    .state('resources', {
        url: '/resources',
        template: require('./resources.html'),
        controller: 'ResourcesController',
        controllerAs: 'resources'
    })
    // .state('resources.add', {
    //     url: '#add',
    //     views: {
    //         '': { 
    //             template: require('./partial-about.html') 
    //         }
    //     }
    // })
}