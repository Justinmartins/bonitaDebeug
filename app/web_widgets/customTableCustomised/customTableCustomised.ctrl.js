function PbTableCtrl($scope) {

  this.isArray = Array.isArray;

  if (!$scope.properties.selectedBooksIds) {
    $scope.properties.selectedBooksIds = [];
  }

  this.toggleSelection = function (bookId) {
    const index = $scope.properties.selectedBooksIds.indexOf(bookId);
    if (index === -1) {
      $scope.properties.selectedBooksIds.push(bookId);
    } else {
      $scope.properties.selectedBooksIds.splice(index, 1);
    }
  };
}
