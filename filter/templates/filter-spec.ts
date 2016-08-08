describe('<%= _s.camelize(name) %>', function() {

    beforeEach(angular.mock.module('<%= appname %>'));

    it('should ...', inject(function($filter:ng.IFilterService) {

        var filter:any = $filter('<%= _s.camelize(name) %>');

        expect(filter('input')).toEqual('output');

    }));

});
