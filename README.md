# WeatherAppUi

This application fetches the weather information and displays. whenever the weather data got updated and new weather data is available at the weather station, the new data gets pushed to this application UI. This is achieed by keeping the http connection open and receiving the data as a server sent event and by continuously listening to this Eventsource.

## Development server

Navigate to the project folder in the terminal. Node is a pre-requisite. 
Run `npm install` to install all the node packages needed
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
