
window.addEventListener('load', function load(event){
	    console.log("Popup DOM fully loaded and parsed");
    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        console.log(document.body);
        if(document.URL === "https://be.my.ucla.edu/studylist.aspx")
	        return document.getElementById("div_landing").innerHTML;
	    else{
	    	alert("Invalid Website. Please go to https://be.my.ucla.edu/studylist.aspx to use.");
	    }
    }
    function func(){

    }
    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
        window.sessionStorage.setItem("pageArray",results);
        alert(window.sessionStorage.getItem("pageArray"));
        chrome.storage.local.set({pageArray: results[0]}, function() {
          console.log('Value is set to ' + results[0]);
        });
        chrome.storage.local.get(["pageArray"], function(result) {
          alert(result.key);
        });
        chrome.storage.local.clear();
    });
});

window.addEventListener('load', function load(event) {
    document.getElementById('scanbutton').onclick = function () {
		console.log("Popup DOM fully loaded and parsed");

	    function modifyDOM() {
	        //You can play with your DOM here or check URL against your regex
	        console.log('Tab script:');
	        console.log(document.body);
	        if(document.URL === "https://be.my.ucla.edu/studylist.aspx")
	        	return document.getElementById("div_landing");
	        else{
	        	alert("Invalid Website. Please go to https://be.my.ucla.edu/studylist.aspx to use.");
	        }
	    }

	    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
	    chrome.tabs.executeScript({
	        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
	    }, (results) => {
	        //Here we have just the innerHTML and not DOM structure
	        console.log('Popup script:')
	        alert(results[0]);
	    });
	};
});