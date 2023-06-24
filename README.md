### HTTP Servers
HTTP servers are software applications or programs that handle **HTTP (Hypertext Transfer Protocol)** requests and responses. They are responsible for delivering web content, such as web pages, images, files, and other resources, to clients (web browsers) that request them.

- HTTP servers operate on the **client-server model**, where the server listens for incoming HTTP requests from clients and responds with the requested content or appropriate error messages.
- This can involve accessing files on the server's file system, interacting with a database, running server-side scripts, or generating dynamic content.
- When a client makes an HTTP request, it includes a specific HTTP method (such as GET, POST, PUT, DELETE) and a Uniform Resource Identifier (URI) that identifies the resource being requested.
- To initialize a HTTP Server using Express, use the following code snipet:
    - Import express and create an instance of the Express application
        ```js
        const express = require('express');     
        const app = express();                  
        ```
    - Specify a port number on which the server should listen
        ```js
        const port = 3000;
        ```
    - `app.listen(port, [callback])` function in Express is used to start the server and make it listen for incoming HTTP requests. 
    - It takes a port number and an optional callback function as arguments.
    - Express starts a server on the specified port and begins listening for incoming requests on that port. 
    - If the server is able to start successfully, it will execute the callback function (if provided) and log a message indicating that the server is listening.
        ```js
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
        ```

### HTTP Request Methods
**HTTP (Hypertext Transfer Protocol)** defines several request methods or verbs that clients (web browsers or other applications) can use to communicate with HTTP servers. Each request method serves a specific purpose and instructs the server on what action to perform.
- **GET method** 
    - GET method is a representation of the specified resource. It retrieves data from the server without modifying it. 
    - GET requests should be idempotent, meaning they should not have any side effects on the server or the requested resource. 
    - For example, retrieving a web page or an image using a URL. 
    - When you enter a URL in your web browser or click on a link, the browser sends a GET request by default to the server to retrieve the requested resource (such as a web page or a file).
        ```js
        // Define a route for a GET request
        app.get('/books', (req, res) => {
          // Handle the GET request logic here
          // Example response - sending a JSON object as the response
          const books = [
            { id: 1, title: 'Book 1' },
            { id: 2, title: 'Book 2' },
            { id: 3, title: 'Book 3' }
          ];
        
          res.json(books);
        });
        ```
- **POST method** 
    - POST method is used to submit data to the server. It sends data to the server to be processed and potentially stored. 
    - It can be used for various purposes like submitting forms, uploading files, or creating new resources on the server.
        ```js
        app.post('/books', (req, res) => {
        
        // Retrieve data from req.body
        const { title, author } = req.body;
        
        // Example logic to save the book to a database
        const savedBook = saveBookToDatabase(title, author);
        
        // Example response - sending a JSON object as the response
        res.json(savedBook);
        });
        ```
- **PUT method** is used to upload or update a resource on the server. It replaces the entire representation of the specified resource with the content provided in the request. If the resource does not exist, PUT may create a new resource with the specified URI.
- **DELETE method** is used to request the removal of the specified resource on the server. It instructs the server to delete the resource identified by the given URI.
        
### URI
A Uniform Resource Identifier **(URI)** is a string of characters that identifies or locates a resource on the internet. It is a standard way to uniquely identify and address resources such as web pages, images, videos, documents, and other types of files. URIs are used by web browsers, web servers, and other applications to interact with resources on the internet.

- A URI consists of two main components: the **scheme** and the **resource identifier**. 
- The scheme indicates the protocol or scheme that should be used to access the resource, such as "http://" for web pages or "ftp://" for file transfers. 
- The resource identifier provides specific information about the location or name of the resource.
- A URI can take several forms, including:
    - **Uniform Resource Locator (URL)**: A URL is a type of URI that specifies the network location of a resource and the protocol to be used to access it. URLs are commonly used to refer to web pages and resources on the **World Wide Web**. For example, "https://www.example.com/index.html" is a URL.
    - **Uniform Resource Name (URN)**: A URN is a type of URI that is used to identify a resource by its name or identifier rather than its network location. URNs are typically used for persistent identifiers that are independent of the resource's current location. For example, "urn:isbn:0-123456-78-9" is a URN that identifies a book by its International Standard Book Number (ISBN).
    - **Data URI**: A data URI allows data to be embedded directly within a URI. It can be used to include small data objects, such as images or text, directly in web pages or other documents. For example, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" is a data URI representing a small PNG image.
    
### Route
In the context of web development, a **route** refers to a specific URL path or endpoint that is defined in a web application's backend framework. 
- It helps determine how the application responds to different **requests** made by users or other services.
- developers often define routes to **handle** various actions or functionalities. For example, a route might be responsible for rendering a specific webpage, processing form data submitted by a user, or retrieving data from a database.
- Here are a few examples of routes in Express (a Node.js web application framework):
    - Root URL route (/) with a GET Handler:
        ```js
        app.get('/', (req, res) => {
          res.send('Hello Friend!');
        });
        ```
    - Route with URL parameters with a POST Handler
        ```js
        app.post('/users/:id', (req, res) => {
          const userId = req.params.id;
          res.send(`User ID: ${userId}`);
        });
        ```

### HTTP request parameters
HTTP request parameters are additional pieces of data that can be included in an HTTP request to provide additional information or context to the server. These parameters are typically sent as part of the URL or in the body of the request.
- **HTTP Query Parameters**:
    - These are key-value pairs appended to the URL after a question mark.
    - HTTP query parameters are a way to pass additional information to a server when making an HTTP request. 
    - They are appended to the URL as key-value pairs and separated by the **"?"** symbol. 
    - Each parameter consists of a key and a value, separated by the **"="** symbol, and multiple parameters are separated by the **"&"** symbol.
        ```js
        app.get('/search', (req, res) => {
        const searchTerm = req.query.q;
        const page = req.query.page;
        // Perform some processing based on the query parameters
        // For example, searching a database using the searchTerm and retrieving specific page results
        
        // Send a response back to the client
        res.send(`Searching for '${searchTerm}' on page ${page}`);
        });
        app.listen(3000);
        ```
  - when a **GET request** is made to the "/search" route with query parameters, the Express application will receive the request and execute the provided callback function.
  - The **req** object represents the incoming request, and the **res** object represents the response that will be sent back to the client.
  - If you make a GET request to http://localhost:3000/search?q=example&page=1, the server will respond with `"Searching for 'example' on page 1"`.
- **HTTP Headers**:
    - HTTP headers are additional pieces of information sent along with an HTTP request or response between a client (such as a web browser) and a server.
    - These headers provide instructions, metadata, or control information about the request or response being exchanged.
    - HTTP headers can be used to send data in the request and response objects. We send custom headers.
        ```js
        app.get('/example', (req, res) => {
            console.log(req.headers); // prints an object
            const customHeader = req.headers['x-custom-header']; // Accessing the custom header 'X-Custom-Header'
            
            // alternative way
            const customHeader = req.headers.x-custom-header;
        
          
        });

        ```
- **Body**:
    - Body: The body is a component of an HTTP request, typically used with POST, PUT, and PATCH methods to send data from the client to the server. 
    - It carries the payload or content of the request and is separate from query parameters or headers. 
    - The request body can contain various data formats such as JSON, XML, or form data, depending on the application's requirements. For example, when submitting a form on a website, the form data is usually included in the request body.
    - To send data in the body of an HTTP request using Express, you can utilize the `body-parser` middleware, which allows you to parse and access the request body. 
        ```js
        const express = require('express')
        const bodyParser =  require('body-parser')
        const app = express()
        const port = 3000
        
        app.use(bodyParser.json()) // Register in-built middleware and Parse JSON-encoded bodies
        
        app.post('/example', (req, res) => {
            const data = req.body; // Access the parsed data from the body
            // Process the data as needed
            res.send('Data received: ' + JSON.stringify(data));
        });

        ```

### Middleware
Middleware refers to a series of functions or pieces of code that can be applied to the incoming requests and outgoing responses in a web application. 
- Middleware functions are **executed sequentially**, and they have access to the request and response objects as well as the next middleware function in the chain.
- Middleware functions can perform various tasks, such as logging, authentication, handling errors, parsing request bodies, modifying request or response data etc. 
- They provide a way to modularize and separate concerns in an application by allowing developers to add reusable code to the request-response cycle.
- Once the request passes through all the registered middleware functions, it reaches the appropriate route handler based on the request's URL and HTTP method.
- The route handler function then executes and generates the response.
- After the route handler completes its execution and sends a response using methods like `res.send()`, the response goes back through the middleware pipeline in the reverse order before it is sent back to the client.
    ```js
    // Custom middleware function
    const logger = (req, res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        next(); // Calls the next middleware function in the chain
    };
    
    // Registering the middleware globally
    app.use(logger);
    
    // Routes
    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });
    
    ```
    - In the example above, we define a custom middleware function called `logger`. This function logs the current timestamp, the HTTP method, and the requested URL to the console. 
    - It then calls the `next()` function to pass control to the next middleware in the chain.
    - The `app.use()` method is used to **register the middleware globally**, meaning it will be executed for every incoming request. In this case, the logger middleware is registered globally, so it will log the details **for every incoming request**.
- You can also register middleware functions for specific routes by passing them as arguments to the corresponding route handler functions.
    ```js
    // Custom middleware function
    const authenticationMiddleware = (req, res, next) => {
      // Check authentication logic here
      // If authenticated, call next() to proceed
      // If not authenticated, send an error response or redirect
    };
    
    // Route-specific middleware
    app.get('/secret', authenticationMiddleware, (req, res) => {
      res.send('This is a secret page!');
    });
    ```
### HTTP Status Codes
HTTP status codes are three-digit numbers that are returned by a web server to indicate the status of a client's request. These codes are a part of the HTTP (Hypertext Transfer Protocol) protocol and provide information about the outcome of a particular HTTP transaction. Here are some commonly encountered HTTP status codes:
- 1xx Informational
    - 100 Continue: The initial part of the request has been received, and the client should proceed with the rest of the request.
- 2xx Success
    - 200 OK: The request was successful, and the server has returned the requested resource.
    - 201 Created: The request was successful, and a new resource was created as a result.
    - 204 No Content: The request was successful, but there is no content to send back.
- 3xx Redirection
    - 301 Moved Permanently: The requested resource has been permanently moved to a new location.
    - 302 Found: The requested resource has been temporarily moved to a different location.
    - 304 Not Modified: The client's cached version of the resource is still valid, and there is no need to send the requested resource again.
- 4xx Client Errors
    - 400 Bad Request: The server cannot understand the client's request due to malformed syntax or other errors.
    - 401 Unauthorized: The request requires user authentication.
    - 404 Not Found: The requested resource could not be found on the server.
- 5xx Server Errors
    - 500 Internal Server Error: A generic server error occurred, and the server was unable to fulfill the request.
    - 502 Bad Gateway: The server acting as a gateway or proxy received an invalid response from an upstream server.
    - 503 Service Unavailable: The server is temporarily unable to handle the request due to maintenance or overload.
    ```js
    app.get('/', (req, res) => {
      res.status(200).send('OK');
    });
    
    app.get('/notfound', (req, res) => {
      res.status(404).send('Not Found');
    });
    
    app.get('/servererror', (req, res) => {
      res.status(500).send('Internal Server Error');
    });
    
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
    
    /*
        res.status(200).send('OK'); this is function currying (1 call after other)
    */

    ```
### HTTP response body
The HTTP response body refers to the content that is sent back to the client as part of an HTTP response. The response body contains the data or information that the server wants to communicate to the client, such as HTML, JSON, text
- To send a response body in Express, you can use the `res` object provided by the framework. 
- The `res` object represents the HTTP response and allows you to set various properties and methods to customize the response.
- An example of sending a simple text response:
    ```js
    app.get('/', (req, res) => {
      res.send('Hello Friend!');
    });
    ```
- An example of sending a JSON object response:
    ```js
    app.get('/user', (req, res) => {
      const user = { name: 'karan51ngh', age: 21 };
      res.json(user);
    });
    
    ```
- An example of sending an HTML response:
    ```js
    app.get('/', (req, res) => {
      const htmlContent = `
        <html>
          <head>
            <title>My Web Page</title>
          </head>
          <body>
            <h1>Welcome to my website!</h1>
            <p>This is a sample HTML response.</p>
          </body>
        </html>
      `;
      
      res.send(htmlContent);
    });
    ```
    - You can also send HTML as a string:
        ```js
        app.get('/', (req, res) => {
          res.send("<html><head><title>My Web Page</title></head><body><h1>Welcome to my website!</h1><p>This is a sample HTML response.</p></body></html>");
        });
        ```
    - You can also send HTML as a file:
        ```js
        
        
        app.get('/', (req, res) => {
         const filePath = path.join(__dirname, 'public', 'index.html');
         res.sendFile(filePath);
        });
        ```