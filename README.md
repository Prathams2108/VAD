# Voice Activity Detection

## Details
Voice Activity Detection is a project that detects the speech timings in an uploaded audio file. It uses the Python Librosa library for Voice Activity Detection and a UI created using ReactJS for uploading the file and displaying the results of the analyzed audio file.

## Instructions to setup and run frontend UI
### Pre-requisites:
*NodeJS installed on the system.
*npm(Node Package Manager) installed on the system
*A code Editor of your choice
### Setup and Run:
* Create a new react app using the command prompt/terminal and run the command 'npx create-react-app 'VAD'.
* Move into the directory using the command prompt/terminal and run the command cd VAD and install the dependencies using 'npm install'.
* Install bootstrap using the command prompt/terminal and run the command npm install bootstrap and install axios using 'npm install axios'.
* Create a new 'FileUpload.js' file and type in the code for the frontend UI page.
* Replace the contents of the 'App.js' file with the code to render the FileUpload.js contents
* To run the frontend go to the command prompt and go into the project directory or frontend directory and type the command 'npm start'

## Instructions to setup and run Flask API
### Pre-requisites:
* Python installed on the system
* pip (Python Package Manager)installed on the system.
* A code Editor of your choice
### Setup and Run:
* Create a new directory for the backend operations in the same main directory
* Install the required dependencies using the command 'pip install librosa'
* Add the route and audio file handler code to the app.py code
* To run the app change into the backend directory and type the command 'python app.py'
