var AjaxCommunicator = (function(AjaxRequest) {
	return function(backendUrl, responseCallback) {

		var ajaxReq;

		var init = function() {
			ajaxReq = new AjaxRequest();

			ajaxReq.onreadystatechange = handleResponse;
		}

		var getPortfolio = function() {

			var url = backendUrl + '/getPortfolioPosts';

			ajaxReq.open('GET', url, true);
			ajaxReq.send();
		}

		var getPortfolioPostById = function(postId) {

			var url = backendUrl + '/getPortfolioPost?id=' + postId;

			ajaxReq.open('GET', url, true);
			ajaxReq.send();
		}

		var handleResponse = function() {
			if (ajaxReq.readyState == 4 && ajaxReq.status == 200) {
				console.log('Response: ' + ajaxReq.responseText);

				responseCallback(parseObjectToArray(ajaxReq.responseText));
				//console.log('Parsed response: ' + parseObjectToArray(ajaxReq.responseText))
			}
		}

		var parseObjectToArray = function(ajaxResponse) {
			var obj = JSON.parse(ajaxResponse);

			var newArray = []
			for (var key in obj) {
			    newArray[key] = obj[key];
			}

			return newArray;
		}

		init();

		//Exports.
		this.getPortfolio = getPortfolio;
		this.getPortfolioPostById = getPortfolioPostById;

	}
})(window.XMLHttpRequest);