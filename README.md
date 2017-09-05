# Chart Creator

Description:  Server side chart creator based on Chart.js.

Author: seanabmoore@gmail.com



## 1.   Prerequisites

Ensure Node and npm are installed and up to date


## 2.   Cairo Install

You'll need to install Cairo for your system. 

###  2.1.   Ubuntu users

run the install.sh script:	
       
       ```sudo sh install.sh```

### 2.2.     Other's

Refer to https://github.com/Automattic/node-canvas#installation

## 	2.3.    npm install

	```npm install ```

This will download the dependencies specified in package.json



## Running chart-creator

Start the server:		


 ```node server.js ```
 
 
The server will respond to POST requests that contain a json body with the options required for Chart.js

## Example JSON

 ```
 {
    size: {'height':600, 'width':600},
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
 
  ```

