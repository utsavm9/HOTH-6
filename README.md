# Study List Extractor

## Project Description
We created a web extension which uses regular expressions to scrape data from UCLA students study list. Students complain about being forced to log in to my.ucla.edu every time to check their schedule and having to go through the multi-factor authentication each time, or look up the photo they took two months ago to check what class they have next. It also takes a significant amount of time to transfer your classes into a calendar manually, and having an app do it for you would be more efficient. 

## Getting Started
Currently this app is only available as a Chrome extension but it does not have a stable built yet, so it is not yet available on the Chrome Extension Store. Therefore, following these steps to install the extension in developer mode for now:
* Open Chrome and go to `chrome://extensions/`
* On the top right corner, enable the developer mode.
* Click on `Load Unpacked` and select the folder in which the files of this respositories are situated.

The extension with its logo would have now appeared on the toolbar. To use it:

* Go to your UCLA Course Schedule.
* Click on the extension logo and then click on `Extract Schedule To Calendar`. A list of the course names for whom the time has been extraction will appear. 
* Click on `Add to Calendar` to be redirected to Google Calendar page with pre-filled values.

![Screenshot of the Study List Extractor](https://raw.githubusercontent.com/utsavm9/StudyListExporter/master/sampleImg.png)

This project is also available on [DevPost](https://devpost.com/software/21-study-list-exporter).

## Contributors

* [Alexander Ma](https://github.com/alexzma)
* [Utsav Munendra](http://utsavm9.github.io)