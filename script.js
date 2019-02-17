chrome.tabs.query({active: true, lastFocusedWindow: true}, function(arrayOfTabs) {
		var tab = arrayOfTabs[0];
		var url = tab.url;
		console.log("URL = " + url);
		chrome.storage.sync.set({"currentTabURL": url}, function(){
			console.log("currentTabURL: " + url);
		});
});

function accessCurrentTabURL(){
	chrome.storage.sync.get(["currentTabURL"], function(result){
		console.log("URL of current Tab: " + result.currentTabURL);
	});
};

accessCurrentTabURL();

window.addEventListener('load', function load(event) {
    document.getElementById('scanbutton').onclick = function () {
        alert(func());
    };
});

function func(){
chrome.tabs.getCurrent(function(tab) {
    alert(tab.title);
});
};