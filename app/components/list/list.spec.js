'use strict'

describe('ListCtrl', function() {

  var scope
  var createController
  var $q, defer
  var apiServiceMock
  var responseFixture = ['apple','banana']

  beforeEach(module('myApp'))
  beforeEach(inject(function($rootScope, $controller, _$q_) {
    $q = _$q_
    defer = $q.defer()
    scope = $rootScope.$new()
    apiServiceMock = { getItems: function() { return defer.promise } }
    sinon.spy(apiServiceMock, 'getItems');
    createController = function() {
      $controller('ListCtrl', {
        $scope: scope,
        apiService: apiServiceMock,
      })
    }
    var controller = createController()
    defer.resolve(responseFixture)
  }))

  it('should have private variable "items" initialized', function() {
    expect(scope.items).to.exist
  })

  it('"items" should be empty', function() {
    expect(scope.items.length).to.equal(0)
  })

  it('shoud call apiServiceMock.getItems', function() {
    expect(apiServiceMock.getItems).to.be.calledOnce
  })

})
