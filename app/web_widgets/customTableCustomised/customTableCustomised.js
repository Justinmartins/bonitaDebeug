(function () {
  try {
    return angular.module('bonitasoft.ui.widgets');
  } catch(e) {
    return angular.module('bonitasoft.ui.widgets', []);
  }
})().directive('customTableCustomised', function() {
    return {
      controllerAs: 'ctrl',
      controller: function PbTableCtrl($scope) {

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
,
      template: '<div class="table-responsive">\n    <table class="table table-hover table-striped table-bordered">\n        <thead>\n            <tr>\n                <th>Select</th>\n                <th>Title</th>\n                <th>Author</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr ng-repeat="book in properties.content">\n                <td>\n                    <input type="checkbox"\n                           ng-checked="properties.selectedBooksIds.indexOf(book.id) !== -1"\n                           ng-click="ctrl.toggleSelection(book.id)">\n                </td>\n                <td>{{ book.title }}</td>\n                <td>{{ book.author }}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n'
    };
  });
