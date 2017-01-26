(function() {
	var fadeImgLoadingModule = angular.module('ngFadeImgLoading', []);
	fadeImgLoadingModule
			.directive(
					'fadeImgLoading',
					function($rootScope) {
						return {
							scope : {
								image : '@',
								blur : '@'
							},
							templateUrl : './fadeImgLoading.template.html',

							link : function(scope, element, attrs) {

								var smallImg = angular
										.element(element[0].children['blur']);
								var realImg = angular
										.element(element[0].children['image']);

								realImg.on('load', function() {
									smallImg.addClass('img-hide');
									realImg.removeClass('img-hide');
									realImg.addClass('img-show');
								}).on('error', function() {
								});

							}
						};
					});
})();