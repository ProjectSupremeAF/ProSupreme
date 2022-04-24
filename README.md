
Application Framework (SE3040)

Research Project Management Tool

B.Sc. (Hons) Information Technology Specialized in Software Engineering
Department of Software Engineering
Sri Lanka Institute of Information Technology
Sri Lanka




Submitted by



Navoda R.C	IT20209520
Ranasinghe P.R.K.U	IT20259266
Jayawardane W.M.A.V.	IT20174330
Wishvajith G.K.N.P	IT20168704













Introduction
Purpose 

This software requirements specification (SRS) specifies the requirements of the Research Project Management Tool. This will be use by the developers of the software. The goal of automating this manual system is to complete all tasks in less time, with greater efficiency, and accuracy. Furthermore, due of modern technology, this automated system is simple to operate, and it is also the best option for the future.
Developers can save time and effort by using the SRS documentation. Also, if a redesign is needed in the future, these SRS documents will be useful. Customers' feedback can also be acquired via SRS papers. Simply said, these documents can provide clear ideas regarding software functionalities in an easy-to-understand manner. Prioritization of needs, verifiability, modifiability, and traceability are all tightly fixed in SRS documents. As a result, these documents will be used in the development of our project.

Document Conventions

The IEEE format [1] was used to create this document. This SRS documentation was created with Microsoft Word 2010. We used "Times New Roman" as the font, and the standard text size is 12pt with 1.5line spacing. The section headings are 18pt bold, while the subheadings are 14pt bold. Except for the cover page, all the pages are numbered, and the numbers appear in the lower right-hand corner of the page. Every image and data table are numbered as well. The use case scenario was written using Cockburn's template.









Product Scope

A new automated system will give more efficiency for all resource contributors and resource recipients from the beginning to the end of a research project. And this system will make the organization to manage their daily workload which should be done for the project easily and systematically. This system mainly consists of four functions. Those functions are Administration management, Student management, Supervisors management, and Panel management. Programming language using to develop the system is MERN Stack, and Mongo is using for the database server 
Following list is the objectives of the proposed system 
•	Becomes more reliable to all resource contributors and resource recipients Maintain 
•	User friendliness 
•	Reduce the paper usage
•	Ease of completing tasks on time
•	Communication efficiency





References

[1] 	IEEE.org, "IEEE.org," 2022. [Online]. Available: https://www.ieee.org/about/index.html.


 
Overall Description
Product Perspective

Currently a manual system is being used for administration management, student management, supervisor management, and panel management in project. As they were using a manual system organization has faced so many problems. So, to overcome these problems, we are going to develop a new automated system for the organization.

 

Product Functions

In this resource management system, there are many functions based on 4 major functions such as for administration management, student management, supervisor management, and panel management. This system performs these functions and works efficiently.
Administration Management
▪	Delete/Update users
▪	Create submission types 
▪	Allocate panel members to student groups
▪	Create marking schemes 
▪	Upload document/presentation templates 
▪	View Roles 

Student Management
▪	Register
▪	Create student groups 
▪	Register research topic 
▪	Request supervisor
▪	Request co-supervisor   
▪	Submit documents 
▪	Download Templates 

Supervisors Management
▪	Accept topics 
▪	Chat with the groups 
▪	Evaluate Documents submitted by groups using the provided marking scheme 


Panel Management

▪	Evaluate topics 
▪	Evaluate students’ presentations according to the provided marking scheme 



User Classes and Characteristics


User class	Characteristics 
staff (Supervisor, Co-Supervisor, Panel members)	▪	Doing all function with the help of system.
▪	Marking attendance of members.
▪	Enter the relevant data to databases.
▪	Manage the databases correctly. (Update, delete, review)
▪	Handle all guest visitors and packages. 
Admin
	▪	Fixings errors.
▪	Manage and maintain the system.
▪	Control all function with access.
Owner 	▪	Provide facilities to the staff and others.
▪	Make necessary services to the company.
▪	Take each decision.
Members and guest visitors 	▪	Provide their details to the registration.
▪	Do payments on time.
▪	Take the service correctly and best.

Operating Environment

This Facility management system is expected to use following hardware and software requirements for the client machine and database server.

Hardware requirements
▪	1TB hard driver
▪	4 GHz processor
▪	8GB RAM
▪	Router

Software requirements
▪	Microsoft windows 11
▪	Mongo DB
▪	Express
▪	Nodejs
▪	Reactjs  

Design and Implementation Constraints

•	The system will be developed by using Visual studio Code 
•	The system should be user friendly. As the users are new to an automated system like this, the system should be easy to use and maintain.
•	Admin and staff members can access the system.
•	The system is protected with password and username.
•	All the data will be stored in a database and database will be created using MongoDB 
•	All the interfaces should connect.
•	System only can access within the organization premises 




Project Documentation

Here we are planning to give simple manual which contains all the details about system. How to handle each and every function and also how to generate reports, how to allocate panel members, create student groups, accept topics and give feedback to student groups, evaluate topics and presentation all these things are simply included in this manual then the client easily handles the system with the help of our team as well as that. In addition, there are so many other documentations are included in our project flow.

SDLC phase	Documentations

Requirement gathering, analysis and specification	▪	Project charter
▪	Project proposal
▪	SRS documentations (with all necessary diagrams)
Design 	▪	Software design description (SDD)
Implementation 	▪	Testing documents (about all functions)
Maintenance 	▪	Users’ feedbacks and other perspectives.




User Documentation

User documentation is helping to get an idea about our system and how to use it, as well as gives the idea of what are the features of this system, and it guides how to resolve common problems in that system. 
Our target users are students, supervisors and panel members and they are most probably they are struggling with busyness The process up to launching a research project is huge and time consuming to do it manually is very high. Students will be able to maintain a good relationship with supervisors. It will make it easier for students to make decisions. So, this system will undoubtedly be a "most wanted" system. 
In this user manual, it includes some tips of our system and explain how to work with the system with picture explanation of the features of the system and it guides how to clarify the errors if any errors occurred.
We also provide information about how to contact us in online or via telephone. Then the client can clarify some issues which he cannot understand saying in the user manual. 

Assumptions and Dependencies

▪	Admin should have experience in computer usage.
▪	Staff should have good computer maintenance habits.
▪	Staff should be able to handle small issues with the system.
▪	All required software must be provided



Hardware Interfaces

Our customer needs 2 separate desktop computers to the sport club and showroom. 
These 2 computers have 1TB storage and 8B memory for each computer with 3.4GHz and 2GHz processors.
A WIFI router needs to connect these two computers and other internet purposes. 
A thermal POS printer needs for billing purposes and an inkjet printer is required for other printing purposes.

Software Interfaces
Developers end
	Microsoft windows 10 or 11                  - Operating system use to develop the application
	MongoDB                                     - Create databases  
	Visual Studio Code                       - System development platform 
	Express                                          - Web application framework
	Adobe XD                                     - Design User interfaces
Client end
	Microsoft windows 10 or 11                 - Most commonly use OS and user-friendly environment 
	Mongo DB- Database connector
	Visual Studio   Code                             - System runtime environment 
                                - 
 
Communications Interfaces

Communication function	Description
Email	Standard is SMTP.
Broadband Model	Standard is TCP/IP and HTTP. It is an internet service provider. 
LAN Ethernet connection	Ethernet communication interface.
Network interface card (NIC) for connect to network.






Nonfunctional Requirements
Performance Requirements
•	System can search the details and output will be display in 5 seconds.
•	Storage capacity is for support to 2000 at a time.
•	The interfaces will be display in 2 seconds.
•	Report generating in 5 seconds.
•	Feedback sending in 5 seconds.

Safety Requirements
•	Admin, staff, and students have separate secured user levels
•	Only admin can manage users.
•	Students are not allowed to access the topic evaluation section.
•	Only supervisors make changes of document evaluations records.
•	Only panel members can make changes of presentation evaluations records.
•	All actors have unique login username and password to access to the system.
•	Only admin and staff can change the valuable data in system.

Security Requirements
•	Admin and staff allow to access to this system, and nobody cannot access this system.
•	Only the admin and staff can change, delete, or retrieve the valuable data and information in this system
 
Software Quality Attributes
Availability: 
•	System should work properly any time.
Efficiency: 
•	System should work accurately and time without delays.  
Security: 
•	Students cannot change the details of the automated reports
•	Only authorized people could access to the customer details
Reliability: 
•	The system can perform its activities without any mistake/delay for the client	 
Maintainability: 
•	We will support our client 3 monthly to maintain the system and in staff trainings to the new system without any charge.
Usability:
•	System is user friendly to the users and staff members can adopt to the new system within few days.

Business Rules
•	Login passwords can only change with the permission of admin.
 
Other Requirements
•	The following keyboard shortcut functions must work with the system.
o	Ctrl + A: Select all
o	Ctrl + X: Cut
o	Ctrl + C: Copy
o	Ctrl + V: Paste
o	Shift + any letter: Case change

•	In the left mouse button click following functions should be contains.
o	Copy 
o	Cut
o	Paste
o	Select all

 
Appendix A: Glossary
•	IEEE – Institute of Electrical and Electronic Engineers 
•	SRS – System Requirement Specification
•	ER diagram - Entity Relation Diagram is a method that use to represent data graphically. This helps to create database and to create relationships between.
•	Activity diagram - A graphical method that can use to represent the flow of an activity.


Appendix C: To Be Determined List
•	System development
•	Database development
•	Testing the system



