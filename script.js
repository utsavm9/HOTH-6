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

window.addEventListener('load', function load(event){
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        console.log(document.body);
        return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});

window.addEventListener('load', function load(event) {
    document.getElementById('scanbutton').onclick = function () {
        func();
        chrome.storage.sync.get(["currentTabURL"], function(result){
		alert("URL of current Tab: " + result.currentTabURL);
	});
    };
});