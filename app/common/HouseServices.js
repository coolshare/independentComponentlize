class HouseService {
	constructor() {
		this.id = "HouseService"
		this.url = "./house.json"
		this.serviceName = "RemoteService"
		this.init()
	};
	
	init() {
		
		//accept requests from components (2)
		cm.subscribe("/"+this.id+"/Create", function(data) {
			this.create(data);
		}, this);
		cm.subscribe("/"+this.id+"/Edit", function(data) {
			this.edit(data);
		}, this);
		cm.subscribe("/"+this.id+"/getAll", function(data) {
			this.getAll(data);
		}, this);
		cm.subscribe("/"+this.id+"/Get", function(data) {
			this.get(data);
		}, this);
		cm.subscribe("/"+this.id+"/Delete", function(data) {
			this.remove(data);
		}, this);
		
		//get response from remote service (8)
		cm.subscribe("/"+this.serviceName+"/Response", function(data) {
			//get back to components (9)
			cm.publish("/"+this.name+"/Create"+"/Response", {"url":this.url, "data":data})
		}, this);
		cm.subscribe("/"+this.serviceName+"/Edit"+"/Response", function(data) {
			//get back to components (9)
			cm.publish("/"+this.name+"/Edit"+"/Response", {"url":this.url, "data":data})
		}, this);
		cm.subscribe("/"+this.serviceName+"/getAll"+"/Response", function(data) {
			//get back to components (9)
			cm.publish("/"+this.name+"/getAll"+"/Response", {"url":this.url, "data":data})
		}, this);
		cm.subscribe("/"+this.serviceName+"/Get"+"/Response", function(data) {
			//get back to components (9)
			cm.publish("/"+this.name+"/Get"+"/Response", {"url":this.url, "data":data})
		}, this);
		cm.subscribe("/"+this.serviceName+"/Delete"+"/Response", function(data) {
			//get back to components (9)
			cm.publish("/"+this.name+"/Delete"+"/Response", {"url":this.url, "data":data})
		}, this);
	}
	
	//Request another service (RemoteService) (3)
	create(data) {
		cm.publish("/"+this.serviceName+"/Create", {"url":this.url, "data":data})
	}
	edit(data) {
		cm.publish("/"+this.serviceName+"/edit", {"url":this.url, "data":data})
	}
	getAll(data) {
		cm.publish("/"+this.serviceName+"/getAll", {"url":this.url, "data":data})
	}
	get(data) {
		cm.publish("/"+this.serviceName+"/get", {"url":this.url, "data":data})	
	}
	remove(data) {
		cm.publish("/"+this.serviceName+"/remove", {"url":this.url, "data":data})
	}
	
	
}
window.houseService = new HouseService()