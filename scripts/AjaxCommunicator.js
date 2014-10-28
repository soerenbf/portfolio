var AjaxCommunicator = (function(AjaxRequest) {
	return function(backendUrl) {

		var getPortfolio = function(callback) {

			_sendGetRequest(new AjaxRequest(), backendUrl + '/getPortfolioPosts', callback);
		}

		var getPortfolioPostById = function(postId, callback) {
			_sendGetRequest(new AjaxRequest(), backendUrl + '/getPortfolioPost?id=' + postId, callback);
		}

		var getPortfolioPostsFromCategories = function(categories, callback) {
			_sendGetRequest(new AjaxRequest(), backendUrl + '/getPortfolioPostsFromCategories?categories=' + JSON.stringify(categories), callback);
		}

		var getPortfolioCategories = function(callback) {
			_sendGetRequest(new AjaxRequest(), backendUrl + '/getPortfolioCategories', callback);
		}

		var _sendGetRequest = function(ajaxReq, url, callback) {

			ajaxReq.onload = function() {
				callback(_parseObjectToArray(JSON.parse(this.responseText)));
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
		this.getPortfolioPostsFromCategories = getPortfolioPostsFromCategories;

	}
})(window.XMLHttpRequest);
