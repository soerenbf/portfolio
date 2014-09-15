var AjaxCommunicator = (function(AjaxRequest) {
	return function(backendUrl) {

		var ajaxReq = new AjaxRequest();

		var init = function() {
			ajaxReq.onreadystatechange = handleResponse;
		}

		var getPortfolio = function() {

			var url = backendUrl;

			ajaxReq.open('GET', url, true);
			ajaxReq.send();
		}

		var getPortfolioPostById = function(postId) {

			var url = backendUrl + '/getPost?id=' + postId;

			ajaxReq.open('GET', url, true);
			ajaxReq.send();
		}

		var handleResponse = function() {
			if (ajaxReq.readyState == 4 && ajaxReq.status == 200) {
				console.log(ajaxReq.responseText);
			}
		}

		init();

		//Exports.
		this.getPortfolio = getPortfolio;

	}
})(window.XMLHttpRequest);