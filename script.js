

window.addEventListener('load', function load(event) {

    document.getElementById('scanbutton').onclick = function () {
        console.log("Popup DOM fully loaded and parsed");

        function modifyDOM() {
            //You can play with your DOM here or check URL against your regex
            console.log('Tab script:');
            console.log(document.body);
            if (document.URL === "https://be.my.ucla.edu/studylist.aspx") {
                return document.getElementById("div_landing").innerHTML;
            }
            else {
                return ("Invalid Website. Please go to https://be.my.ucla.edu/studylist.aspx to use.");
            }
        }

        //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
        chrome.tabs.executeScript({
            code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
        }, (results) => {
            //Here we have just the innerHTML and not DOM structure
            console.log('Popup script:')
            //alert(results[0]);


            const HTMLContent = results[0];

            // Extracting the course name
            var courseInfo = []

            //For the course title
            var courseTitleS = new RegExp('<p>[^<]', 'g');
            var courseTitleE = new RegExp('[^>]<\/p>', 'g');

            var regexObjS = courseTitleS.exec(HTMLContent);
            var regexObjE = courseTitleE.exec(HTMLContent);
            var regexDesS = courseTitleS.exec(HTMLContent);
            var regexDesE = courseTitleE.exec(HTMLContent);

            //course location
            var locationE = new RegExp('<td class="">.*<\/td>', 'g')
            var regexObjLec = locationE.exec(HTMLContent);
            var regexObjDis = locationE.exec(HTMLContent);

            //lecture days
            var lecDays = new RegExp('<td class="centerColumn">[^\/]*\/', 'g')
            var regexLDays = lecDays.exec(HTMLContent);
            var partialDays = "";
            var parDays = new RegExp('<');
            var regexLFD = "";
            var parDays2 = new RegExp('>');
            var regexLFD2 = "";

            // discussion days
            var regexDDays = lecDays.exec(HTMLContent);
            var partialDDays = "";
            var regexDFD = "";
            var regexDFD2 = "";

            //lecture time
            var lecTime = new RegExp("[0123456789:]{1,5}[pam]{2}-[0123456789:]{1,5}[pam]{2}", 'g')
            var regexfinalTime = lecTime.exec(HTMLContent);
            var regexlecTime = lecTime.exec(HTMLContent);
            var regexdisTime = lecTime.exec(HTMLContent);

            // schedule will have alternating course name and description
            while (regexObjE !== null && regexObjS !== null && regexDesE !== null && regexDesS !== null) {

                // Preprocessing
                partialDays = (HTMLContent.substr(regexLDays.index + regexLDays[0].length - 13, 20));
                regexLFD = parDays.exec(partialDays);
                regexLFD2 = parDays2.exec(partialDays);
                partialDDays = (HTMLContent.substr(regexDDays.index + regexDDays[0].length - 13, 20));
                regexDFD = parDays.exec(partialDDays);
                regexDFD2 = parDays2.exec(partialDDays);

                //Constructing the object
                courseInfo.push({
                    "title": HTMLContent.substr(regexObjS.index + 3, regexObjE.index - regexObjS.index - 2) + " " +
                        HTMLContent.substr(regexDesS.index + 3, regexDesE.index - regexDesS.index - 2),
                    "locationLec": HTMLContent.substr(regexObjLec.index + 13, regexObjLec[0].length - 18),
                    "locationDis": HTMLContent.substr(regexObjDis.index + 13, regexObjDis[0].length - 18),
                    "LecDays": partialDays.substr(0, regexLFD.index).substr(regexLFD2.index + 1, 10),
                    "DisDays": partialDDays.substr(0, regexDFD.index).substr(regexDFD2.index + 1, 10),
                    "LecTime": regexlecTime[0],
                    "DisTime": regexdisTime[0],
                    "FinalTime": regexfinalTime[0],
                });



                regexObjS = courseTitleS.exec(HTMLContent);
                regexObjE = courseTitleE.exec(HTMLContent);
                regexDesS = courseTitleS.exec(HTMLContent);
                regexDesE = courseTitleE.exec(HTMLContent);
                regexObjLec = locationE.exec(HTMLContent);
                regexObjDis = locationE.exec(HTMLContent);

                regexLDays = lecDays.exec(HTMLContent);
                regexDDays = lecDays.exec(HTMLContent);

                regexfinalTime = lecTime.exec(HTMLContent);
                regexlecTime = lecTime.exec(HTMLContent);
                regexdisTime = lecTime.exec(HTMLContent);
            }


            courseInfo = courseInfo.map((e) => {
                var titleDash = new RegExp('-');
                var regexObjDash = titleDash.exec(e.title);

                var regexLT = titleDash.exec(e.LecTime);
                var regexDT = titleDash.exec(e.DisTime);

                return {
                    title: e.title.substr(0, regexObjDash.index - 1),
                    locationLec: e.locationLec,
                    locationDis: e.locationDis,
                    LecDays: e.LecDays,
                    DisDays: e.DisDays,
                    LecTimeS: e.LecTime.substr(0, regexLT.index),
                    LecTimeL: e.LecTime.substr(regexLT.index + 1, 10),
                    DisTimeS: e.DisTime.substr(0, regexDT.index),
                    DisTimeL: e.DisTime.substr(regexDT.index + 1, 10),
                    //FinalTime : e.FinalTime,
                };
            })


            console.log(courseInfo);
            alert(courseInfo);

            var list = document.createElement('ul');
            courseInfo.forEach((e) => {
                let tagSubject = document.createElement('li');
                tagSubject.appendChild(document.createTextNode(e.title));
                
                tagSubject.onclick = function () {
                    
                    var att = document.createAttribute("data-toggle");       // Create a "class" attribute
                    att.value = "modal";                           // Set the value of the class attribute
                    var att2 = document.createAttribute("data-target");       // Create a "class" attribute
                    att2.value = "#exampleModal";                           // Set the value of the class attribute
                    tagSubject.setAttributeNode(att);
                    tagSubject.setAttributeNode(att2);

                }
                list.appendChild(tagSubject)
            })

            document.body.appendChild(list);

            let addToCalendarB = document.createElement('button');
            addToCalendarB.className += " btn btn-sharp2";
            addToCalendarB.appendChild(document.createTextNode("Add to Calendar"));
            document.body.appendChild(addToCalendarB);
            document.body.appendChild(document.createTextNode(""));
        });
    };
});

