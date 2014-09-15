var AjaxCommunicator = (function(AjaxRequest) {
	return function(backendUrl) {

		var ajaxReq = new AjaxRequest();

		var init = function() {
			ajaxReq.onreadystatechange = handleResponse;
		}

		var getData = function() {
			ajaxReq.open('GET', backendUrl, true);
			ajaxReq.send();
		}

		var handleResponse = function() {
			if (ajaxReq.readyState == 4 && ajaxReq.status == 200) {
				console.log(ajaxReq.responseText);
			}
		}

		init();

		//Exports.
		this.getData = getData;

	}
})(window.XMLHttpRequest);