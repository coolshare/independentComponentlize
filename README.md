		Highly componentized web application

	When a simple web application becomes complicated by adding more new features, new customers, new responsibilities, what is a good solution for the task? This is a problem I'm facing in the company. Our web application has already in production serving customers. We have to introduce the new features in as transparent as possible to the customers. It should not affect existing infrastructure and should be easy to test and maintain. 
  
	A highly componentized web application can make the job easier, more efficient and flexible. This is what happened in my projects in the company. 

	Inside my web application, there are different components, services and back end database server, then the main part: communication manager. 
	
	When the different components and services want to communicate with each other, componentized approach will make it much flexible. For example , component A need to get data from database server C, Service B has the function of database server C connection ; component A will publish its request to communication manager. In the mean time, service B also subscribe to communication manager to register its functionality. So when a request comes, communication manager will know which service to call to get the job done and which component to return back the data. And this method can be used between services too. 

	To show the structure and workflow, please take a look at the picture below.


	Explanation of the workflow picture:
	CM: communication manager
	NAV: Navigation component
	HS: House Service
	RS: Remote Service
	RA: Rest API
	
	NAV ----1----> CM : Navigation component send request to communication manager by publish
	CM ----2----> HS : House Service accept requests from components by subscribe
	HS ----3----> CM : House Service request another service from RemoteService by publish
	CM ----4----> RS : Remote Service receive requests from communication manager by subscribe
	RS ----5----> RA : Remote Service to access back end server to get data 
	RA ----6----> RS : Back end server return data back to Remote Service
	RS ----7----> CM : Remote Service return back data to communication manager
	CM ----8----> HS : communication manager return data to House Service by subscribe
	HS ----9----> CM : House Service return back data to communication manager
	CM ----10----> NAV: communication manager return data to original requester: Navigation 					component by publish




