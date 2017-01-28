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
							template : "<style> @-webkit-keyframes imageBlur { 0% {-webkit-filter: blur(5px); } 50% {-webkit-filter : blur (2 px ); } 100% {-webkit-filter : blur (0 px ); } } @ keyframes imageBlur { 0% {-webkit-filter: blur(5px); } 50% {-webkit-filter : blur (2 px ); } 100% {-webkit-filter : blur (0 px ); } } .blur {-webkit-filter: blur(5px); } .img-show {display: block; -webkit-animation-name: imageBlur; animation-name: imageBlur; -webkit-animation-duration: 1.5s; animation-duration: 1.5s; } .img-hide {display: none; } </style>\t\t\t\t\t\t\t\t<img id='blur' class='blur' ng-src=\"{{blur}}\">\t\t\t\t<img id='image' class='img-hide' ng-src=\"{{image}}\">",
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