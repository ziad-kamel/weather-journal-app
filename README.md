# Weather-Journal App Project

## Project Environment Setup

I have installed node and Environment throw the comandline , used **express** environment using *express()*.
I installed *body-parser* , *cors* and used them in *server.js* file.
When running the server file it print out to the terminal the host number for the localserver.
I have signed up to **OpenWeatherMap.com** site and created an **API KEY** to use it for calling the weather api.


## APIs and Routes

There is a get */all* and post */return* routes in **server.js** .
Also there is an app endpoint **projectData = []** that hold all the data that will be displayed to the client side.
The returned data from the endpoint is printed out to the server terminal.
Data is returned to the client side *app.js* throw a get route **getWether()** .
This function return Data form the weather API after creating a compleat *URL* using the *baseUrl,apiKey*,*zipcode* 
That had taken from the user by *getElementbyId()*.


## Dynamic UI

I add an eventListener to the **Generate** button so that after calling **getWether()** -that return api data
throw *fetch()* the url- the page dynamicly updated with the data from the post Route after calling *PostData()* using *updateUI()*.
The *updateUI()* is an async function that get data from */all* route then add each entry of the returned object to its correspond 
div element by *.innerHTML=* after getting the div element by **getElementById()** .
