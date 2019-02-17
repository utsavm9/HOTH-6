function func(){
	chrome.tabs.query({active: true, lastFocusedWindow: true}, function(arrayOfTabs) {
		var tab = arrayOfTabs[0];
		var url = tab.url;
		console.log("URL = " + url);
		chrome.storage.sync.set({"currentTabURL": url}, function(){
			console.log("currentTabURL: " + url);
		});
	});
};

window.addEventListener('load', function load(event) {
    document.getElementById('scanbutton').onclick = function () {
        func();
        chrome.storage.sync.get(["currentTabURL"], function(result){
		alert("URL of current Tab: " + result.currentTabURL);
	});
    };
});