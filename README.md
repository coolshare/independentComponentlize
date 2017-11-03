***Highly componentized web application***

<p>
<b>Problem:</b>	
When a simple web application becomes complicated and larger with hundreds or even thousand of components, team-working-in-parallel and communication among components become challenges.
As business coverage group, components come and go more frequently. Developers need to spend a lot of time to modify dependency.
<br/>
<br/>
<b>Solution:</b>
One of solution to this problem is to make the components highly isolated.

I will describe how I achieved building a highly isolated-componentized application in one of my work projects. 
  
I used the pattern of publish/subscribe as my major communication method. 
My application was a container containing a series of isolated components/services. Each component/service only input data by  
subscribing "topics" and only output data by publishing "topics". In this way, no component nor service has any knowledge about others (components and services). They only deal with a single party, the CommunicationManager which provides publishing and subscribing.

I put together a small demo to explain how it was done in my Oracle project. This small demo was written in AngularJS.

		
**Live Demo:**

<a href="https://leileili.github.io/independentComponentlize/app">independent Componentize</a>


The demo application appear as a "container". This container contains 5 isolated objects: 3 components (A, B, and C) for UI view and 2 services (X and Y) for remote data access. The 3 UI view components are: navigation , houseInTable and houseInMap. 

Here is all the communication image:
![Indepent Componentize workflow](./workflow3.png?raw=true "Independent Componentize Workflow Picture")

The first component, navigation (A) is used to accept user's input to request data in order to fill houseInTable (B) by publish topic "/HouseService/getAll". A has no idea about who is going to use the data it request. Its only job is take user input and publish "/HouseService/getAll".

The HouseServices (X), as a service who knows where the data for housing reside. So X subscribes "/HouseService/getAll" to serve any party (in our case A) for housing. But it have no idea about how to fetch from server. So it publishes "/RemoteServices/getAll" to request the data it need and obtains the data by subscribing "/RemoteServices/getAll/Response". 

The RemoteServices (Y) component subscribes to the same topic "/RemoteServices/getAll" in communication manager. When it gets the request of the topic it subscribed, it connects to the database, gets data result, publishes to communication manager with topic "/RemoteServices/getAll/Response"; which passes to the HouseServices(X) who is listening to it.

The houseInTable (B) has been subscribed to the topic "/HouseServices/getAll/Response", once it sees someone publishes to the same topic in communication manager , it gets the data.

So from above we can see without knowing each other's existing, the request can pass from user all the way to the database server and back, with subscribing and publishing.

The subscribing and publishing can be used directly between two UI view components as well. For example, the houseInTable has buttons to accept user input and publishes to communication manager with topic "AddToMap" with its user input data;

The houseInMap (C) doesn't subscribed to topic related to "/HouseServices" or "/RemoteServices", but subscribes to "AddToMap" topic in communication manager. so it gets the data with the same topic by subscribing.

So the main purpose of HouseServices is to taking care of processing house data; for RemoteService, it is in charge of house data connection to database. They take care of their own job without interfere others jobs. Same for the other three compnents, each has its own role, navigation knows only user input; houseInTable only knows about data on table; houseInMap only does data on map. 

**The keys on my approach are:**

1). My application contains only encapsulated objects: components for view and services to perform tasks</br>
2). All my components and services are highly isolated: they never make any reference to each other




