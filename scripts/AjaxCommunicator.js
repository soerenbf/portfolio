var AjaxCommunicator = (function(AjaxRequest) {
	return function(backendUrl) {

		var getPortfolio = function(callback) {

			_sendGetRequest(backendUrl + '/getPortfolioPosts', callback);
		}

		var getPortfolioPostById = function(postId, callback) {
			_sendGetRequest(backendUrl + '/getPortfolioPost?id=' + postId, callback);
		}

		var getPortfolioCategories = function(callback) {
			_sendGetRequest(backendUrl + '/getPortfolioCategories', callback);
		}

		var _sendGetRequest = function(url, callback) {
			var ajaxReq = new AjaxRequest();

			ajaxReq.onload = function() {
				callback(_parseObjectToArray(JSON.parse(this.responseText)))
			}

			ajaxReq.open('GET', url, true);
			ajaxReq.send();
		}

		var _parseObjectToArray = function(ajaxResponseObj) {
			var newArray = [];
			for (var key in ajaxResponseObj) {
			    newArray.push(ajaxResponseObj[key]);
			}

			return newArray;
		}

		//Exports.
		this.getPortfolio = getPortfolio;
		this.getPortfolioPostById = getPortfolioPostById;
		this.getPortfolioCategories = getPortfolioCategories;

	}
})(window.XMLHttpRequest);
