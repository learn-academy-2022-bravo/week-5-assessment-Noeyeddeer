# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  Your answer: A hash is similar to an object in JavaScript, in that it is a collection of key:value pairs used to store information.

  Researched answer: A hash is container for data in the form of unique keys and their values. A big difference between Javascript objects and Ruby hashes is the way you add new information to hashes. In Ruby, you call the hash name with a key in square brackets and set it equal to a value in order to pass in new data, i.e. dog[:breed] = lab. In contrast, Javascript uses dot notation to access information from an object.



2. What is a gem?

  Your answer: A Ruby gem is a library of Ruby files which can be incorporated into a Ruby project in order to give the project additional functionality without having to build that functionality in from scratch.

  Researched answer: A gem is a third-party library which can be installed in Ruby in order to fill a specific need. Rails is an example of a popular Ruby gem.



3. What is Ruby on Rails?

  Your answer: Ruby on Rails is a back-end Ruby library which can be used to interface with databases and create web applications.

  Researched answer: Ruby on Rails is a server-side web application framework written in Ruby, which means that it is designed to access and interact with the data necessary to make a web application functional. For example, the HTML/CSS/Javascript that powers the front end of many websites does not have the ability to store data in any large quantities which means that things like Rails are necessary for access to customer login information, transaction details, data archival, etc.



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is one that stores and organizes data depending on how the data relates to the other data in the database. A non-relational database would be one where information is stored without any sort of ordering or organizing system.

  Researched answer: I was mostly correct. A relational database stores data in tables and rows and makes the data relational by assigning each row of data a unique identifier (primary key). This key can be added to a record in another table where it is called the foreign key. This key connection allows data to be easily referenced between different tables and generally results in data accuracy and consistency. Non-relational databases stores data without the use of tables, rows, or keys. The method of data storage is typically optimatized for the requirements of the type of data being stored.



5. What are primary keys? Why are they important?

  Your answer: A primary key is the key in a database assigned to a piece of data which then makes that data easy to query. It's important because it provides a means of accessing that data.

  Researched answer: The primary key is a unique identifier assigned to each row of data in a relational database. This key can be added to a record in another table where it becomes a foreign key. The relationship between these keys allows data stored in different tables to be easily referenced and related to each other, which increases the accuracy and consistency of the queried data.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful routes governs communication between a client computer and a server in Rails. The RESTful portion just means that Rails can interact with a database using commands that satisfy Create, Read, Update, and Delete (CRUD) functions.

2. JSON: JavaScript Object Notation (JSON) is a lightweight data-interchange format used to store and transmit data objects, which gives the ability to convert the data between a JS object for use in a web application or stored in a JSON string for easy storage and access.

3. ERB: Embedded RuBy (ERB) allows for Ruby code to be added to a plain text document in order to generate document information details or enable flow control.

4. Params: Params refers to parameters passed to a controller by a GET or POST request. Params are passed in via the URL in a user's browser which then translates those params into a Ruby database request which in turn generates the requested information.

5. API: An Application Programming Interface (API) is a set of protocols for integrating application software. For example, creators of a particular web application can build an API which governs how their application is diplayed and interacted with when embedded in another app.
