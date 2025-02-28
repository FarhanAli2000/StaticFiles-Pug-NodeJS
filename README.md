🌐 Express.js Demo Project

A simple yet powerful Express.js project to demonstrate core web server functionality, with static file handling, Pug template rendering, and basic route management.

✨ Features

📂 Static File Serving: 

Serves static assets directly from the /static directory.

🎨 Pug Template Engine:

Uses Pug for clean, server-side rendering of HTML templates.

🔗 Route Management:

Handles both GET and POST requests across multiple endpoints, including /home, /about, /contact, and a demo page.

🚫 Error Handling:

Returns a custom 404 error message for undefined routes.

📄 Usage

Route	Method

Description

/	GET:	Renders the homepage

/demo:	GET	Renders a Pug template demo

/about:	GET	Displays the about page

/about:	POST	Accepts a POST request

/contact:	GET	Displays the contact page

/this:	POST	Returns a 404 error

📦 Dependencies

Express:

A minimal and flexible Node.js web application framework.

Pug: 

Template engine for server-side rendering.

🤝 Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your improvements. Make sure your code follows best practices.

Created with ❤️ using Node.js. If you found this project helpful, please give it a ⭐!
