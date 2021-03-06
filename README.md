# AccliMate (a Social Weather App)

- [General info](#general-info)
- [Technologies](#technologies)
- [Milestones](#Milestones)
- [Contents](#content)

## Project Description

This browser-based web application exists to let users:
- report/verify weather conditions in their area
- view their local weather forecast
- connect with other users 
- share useful information re: current conditions via text and photos

This COMP 2800 App Project is being developed by Andrew Chu, Jason Lee, Code Workun, and Waleed Ur Rehman

## Project Technologies

Technologies used for this project include:

- HTML
- CSS
- JavaScript
- Node.js
- JQuery
- MySQL
- Heroku
- JawsDB
- TinyMCE
- OpenWeather API
- Google Maps Platform
- Geolocation API
- mysql2
- Multer
- Express
- Express-Session
- Sanitize HTML
- HTTP
- HTTPs
- fs
- jsdom

## Milestones

Milestone #1:
- Structured project files
- Designed html template
- Created log-in, admin/user dashboards
- Implemented session-handling
- Unified design across functional html pages


Milestone #2:
- Clearly defined Github workflow (GitFlow) and team practices
- Refined admin-dashboard.html
- Selected Heroku as our hosting platform
- Integrated JawsDB to handle our database


Milestone #3:
- Refined profile.html to display relevant user info
- Added database editing functions to admin-dashboard.html
- Began work on a Timeline component for users to post text/photos
- Completed Heroku implementation
- Completed JawsDB integration


Milestone #4:
- Added OpenWeather API and Google Maps Platform implementations
- Completed Timeline implementation using TinyMCE
- Added database editing functions to profile.html (edit a user's info)


Milestone #5:
- Finalized project deliverable
- Comprehensive comments added to repo files
- Comprehensive testing of web app's core features


## Files

Top level of project folder:
```
├── apps
    ├── /html
        /login.html             # Site root; log-in page
        /admin_dashboard.html   # 'Admin' landing page after successful log-in
        /user-dashboard.html    # 'User' landing page after successful log-in
        /template.html          # Template for future html pages
        /profile.html           # User profile page
        /upload.html            # Page for uploading a text/photo post to the Timeline component
        /edit-post.html         # Page for editing previously uploaded text/photo posts
        /construction.html      # Placeholder for incomplete html pages    
        
     ├── /profileimages
        ├── /avatars            # stores images uploaded as profile pictures by users
        ├── /timeline           # stores images uploaded to Timeline component by users    

    ├── /text                   # contains HTML templates for the application.
        /footer.html            
        /nav.html  
        /weather.html

├── /cert                       # contains self signed SSL certificate
    /cert.pem  
    /csr.pem
    /key.pem

├── node_modules                # required node modules

├── public                      # Folder for images, scripts, and stylesheets
    ├── /images                 # Subolder for image assets
        /bbymap.jpg
        /bbymap2.jpg
        /forecast.jpeg
        /loginbg.svg
        /smiley.jpg
        ├── /favicon            # Subfolder for favicons
            /android-chrome-192x192.png
            /android-chrome-512x512.png
            /apple-touch-icon.png
            /favicon-16x16.png
            /favicon-32x32.png
            /favicon.ico
            /site.webmanifest   
    ├── /scripts                # Subfolder for scripts
        /admin-dashboard.js
        /rain.js
        /location.js
        /signup.js
        /upload-profile-pic.js
        /upload.js
        /user-dashboard.js
        /user-profile.js
        /weather.js
    ├── /sql                    # Subfolder for sql 
        /config.sql
    ├── /styles                 # Subfolder for styles
        /admin-style.css
        /login.css
        /style.css
        /construction.css
        /profile.css
        /upload.css
        /user-style.css

├── .gitignore                  # Git ignore file

├── Procfile                    # Necessary for Heroku deploys

├── server.js                   # script to initialize web app (node index.js from CLI)

├── package-lock.json

├──package.json

├── Procfile

├── README.md

├── readme.txt                  # .txt version of the readme for COMP 2537 submissions

```

## Features
- Install npm and the following modules (express, express-session, sanitize-html, http, https, multer, fs, jsdom)
- Type node server in terminal to run app
- Sign up for an account
- Log in with user credentials
- Accept location services so Google Maps API and Openweather API will load your weather and map information
- Post updates for other users to see on the map


## Get Started:

    -Node.js
    -A text editor of your choice
    -A running MYSQL database (if you'd like to use a local database)

API Key (request from repo owner):

    1. OpenWeatherMap API
    2. Google Maps Javascript API
    3. Google Maps Geocoding API

If using the default remote database:

    1. Navigate to the main folder
    2. Run the command node server.js
    3. You can now access the app at http://localhost:8000 or https://127.0.0.1:8080 for HTTPS access.

If using a local database:

    1. On your database, run the SQL file located in app/sql/
    2. Open the file server.js with your text editor of choice
    3. Run the command node server.js from the main folder
    4. You can now access the app at http://localhost:8000 or at https://127.0.0.1:8080

## Contact
Andrew Chu, andrewchu06@gmail.com
Jason Lee, jasontlee91@gmail.com
Code Workun, workun.code@gmail.com
Waleed UrRehman, urrehman.waleed@gmail.com
