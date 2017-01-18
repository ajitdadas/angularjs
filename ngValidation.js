var ngValid = angular.module('ngValid',[function(){}]);
ngValid.directive('minLength', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs, ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				var minLength = $(elem).attr("min-length");
				if(!minLength || minLength==undefined || minLength==''){
					return;
				}
				if(v!=undefined && v.length < minLength){
					makeInvalid(ctrl,elem)
                	if($(elem).siblings("#errorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='errorMessageId'><br><span>Mininum "+minLength+" Characters required</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#errorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('maxLength', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs,ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				var maxLength = $(elem).attr("max-length");
				if(!maxLength || maxLength==undefined || maxLength==''){
					return;
				}
                if(v!=undefined && v.length > maxLength){
                	makeInvalid(ctrl,elem)
                	if($(elem).siblings("#errorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='errorMessageId'><br><span>Maximum "+maxLength+" Characters required</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#errorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('uppercaseOnly', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs, ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
                if(v!=undefined && v != v.toUpperCase()){
                	makeInvalid(ctrl,elem)
                	if($(elem).siblings("#errorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='errorMessageId'><br><span>Only Upper Case Characters allowed</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#errorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('lowercaseOnly', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs, ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
                if(v!=undefined && v != v.toLowerCase()){
                	makeInvalid(ctrl,elem)
                	if($(elem).siblings("#errorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='errorMessageId'><br><span>Only Lower Case Characters allowed</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#errorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('numberOnly', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs,ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
                if(v!=undefined && isNaN(v)){
                	makeInvalid(ctrl,elem);
                	if($(elem).siblings("#errorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='errorMessageId'><br><span>Please Enter Numeric Value only</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#errorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('minValue', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs,ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				var minValue = $(elem).attr("min-Value");
                if(v!=undefined && (isNaN(v) || parseFloat(v) < parseFloat(minValue))){
                	makeInvalid(ctrl,elem);
                	if($(elem).siblings("#errorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='errorMessageId'><br><span>Please Enter Value greater than "+minValue+"</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#errorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('maxValue', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs,ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				var maxValue = $(elem).attr("max-Value");
                if(v!=undefined && (isNaN(v) || parseFloat(v) > parseFloat(maxValue))){
                	makeInvalid(ctrl,elem);
                	if($(elem).siblings("#errorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='errorMessageId'><br><span>Please Enter Value less than "+maxValue+"</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#errorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('nonNegativeOnly', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs,ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
                if(v!=undefined && (isNaN(v) || parseFloat(v) < 0)){
                	makeInvalid(ctrl,elem);
                	if($(elem).siblings("#errorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='errorMessageId'><br><span>Please Enter non negative number</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#errorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('percentageOnly', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs,ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				var parts = undefined;
				if(v != undefined){
					parts = v.split(".");
				}
                if(v!=undefined && ((isNaN(v) || parseFloat(v) < 0 || parseFloat(v) > 100) || (parts && parts.length > 1 && parts[1].length > 2))){
                	makeInvalid(ctrl,elem);
                	if($(elem).siblings("#perErrorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='perErrorMessageId'><br><span>Percentage should be correct</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#perErrorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('nondecimalOnly', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs, ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				scope.$watch(attrs.ngModel, function (v) {
	                if(v!=undefined && (isNaN(v) || (v % 1 != 0) || v.toString().indexOf('.') > -1)){
	                	makeInvalid(ctrl,elem);
	                	if($(elem).siblings("#errorMessageId").length == 0){
	                		$(elem).parent().append("<span class='error-text' id='errorMessageId'><br><span>Please Enter Non Decimal Number only</span>");
	                		$(elem).css({"border-color": "red"});
	                	}
	                }else{
	                	$(elem).siblings("#errorMessageId").remove();
	                	$(elem).css({"border-color": "initial"});
	                	makeValid(ctrl,elem);
	                }
	            });
            });
		}
	}
}]);

ngValid.directive('characterOnly', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs, ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				scope.$watch(attrs.ngModel, function (v) {
	                if(v!=undefined && v.match(/\d+/g) !=undefined){
	                	makeInvalid(ctrl,elem);
	                	if($(elem).siblings("#errorMessageId").length == 0){
	                		$(elem).parent().append("<span class='error-text' id='errorMessageId'><br><span>Please Enter Non Number Character only</span>");
	                		$(elem).css({"border-color": "red"});
	                	}
	                }else{
	                	$(elem).siblings("#errorMessageId").remove();
	                	$(elem).css({"border-color": "initial"});
	                	makeValid(ctrl,elem);
	                }
	            });
            });
		}
	}
}]);

ngValid.directive('emailOnly', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs,ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(v!=undefined && !re.test(v)){
                	makeInvalid(ctrl,elem);
                	if($(elem).siblings("#emailerrorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='emailerrorMessageId'><br><span>Please Enter Valid Email</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#emailerrorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('emailGroup', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs,ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				var emailgroup = $(elem).attr("email-group");
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(v!=undefined && (re.test(v) && (v.split('@').length > 0 && v.split('@')[1] != emailgroup))){
                	makeInvalid(ctrl,elem);
                	if($(elem).siblings("#emailGerrorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='emailGerrorMessageId'><br><span>Please Enter Valid Email with group "+ emailgroup +"</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#emailGerrorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('dateFormat', ['$compile','$filter',function($compile, $filter) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs,ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				var dateFormat = $(elem).attr("date-format");
				/*if(dateFormat ==){
					
				}*/
				var regx = /^[0-9-]+$/;
				var regxTest  = false;
				if(v!=undefined){
					regxTest = !regx.test(v);
				}
				if(v!=undefined){
					var dateParts = v.split("-");
					if(dateParts && dateParts.length == 1 && dateParts[0].length > 2){
						regxTest = true;
					}
					if(dateParts && dateParts.length == 2 && dateParts[1].length > 2){
						regxTest = true;
					}
					if(dateParts && dateParts.length == 3 && dateParts[2].length > 4){
						regxTest = true;
					}
				}
				var checkDateObject = moment(v,dateFormat)
                if(v!=undefined && checkDateObject && checkDateObject._d && checkDateObject._d == 'Invalid Date' || (regxTest && regxTest == true)){
                	makeInvalid(ctrl,elem);
                	if($(elem).siblings("#emailGerrorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='emailGerrorMessageId'><br><span>Please Enter Valid Email with group "+ dateFormat +"</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#emailGerrorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

ngValid.directive('urlOnly', ['$compile',function($compile) {
	return {
		restrict: 'A',
		require: ['ngModel','^form'],
		scope: true,
		link: function(scope, elem, attrs,ctrl) {
			scope.$watch(attrs.ngModel, function (v) {
				var res = null;
				if(v!=undefined){
					res = v.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
				}
                if(v!=undefined && res == null){
                	makeInvalid(ctrl,elem);
                	if($(elem).siblings("#UrlErrorMessageId").length == 0){
                		$(elem).parent().append("<span class='error-text' id='UrlErrorMessageId'><br><span>Please Enter Valid URL</span>");
                		$(elem).css({"border-color": "red"});
                	}
                }else{
                	$(elem).siblings("#UrlErrorMessageId").remove();
                	$(elem).css({"border-color": "initial"});
                	makeValid(ctrl,elem);
                }
            });
		}
	}
}]);

function makeInvalid(ctrl,elem){
	if(ctrl[1]){
		if($(elem).attr("name")){
			var modelName = $(elem).attr("name");
			if(ctrl[1][modelName].$valid){
				ctrl[1].$valid = false;
				ctrl[1][modelName].$valid = false;
			}
		}
	}
}

function makeValid(ctrl,elem){
	if(ctrl[1]){
		if($(elem).attr("name")){
			var modelName = $(elem).attr("name");
			if(ctrl[1][modelName].$valid){
				ctrl[1].$valid = true;
				ctrl[1][modelName].$valid = true;
			}
		}
	}
}