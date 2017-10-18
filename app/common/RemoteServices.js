class RemoteService {
	constructor() {
		this.id = "RemoteService"
		this.init();
	};
	
	init() {
		//receive requests from other services (like HouseService) or components (4)
		cm.subscribe("/"+this.id+"/Create", function(param) {
			this.create(param);
		}, this);
		cm.subscribe("/"+this.id+"/Edit", function(param) {
			this.edit(param);
		}, this);
		cm.subscribe("/"+this.id+"/getAll", function(param) {
			this.getAll(param);
		}, this);
		cm.subscribe("/"+this.id+"/Get", function(param) {
			this.get(param);
		}, this);
		cm.subscribe("/"+this.id+"/Delete", function(param) {
			this.remove(param);
		}, this);
	}
	
	create(param) {
		//5
		$.post(param.url, param.data, function(res) {
			//6
			//return server result (7)
			cm.publish("/"+this.id+"/getAll"+"/Response", res);
			if (param.handler) {
				param.handler(res)
			}
		});
	}
	edit(param) {
		//$.put	
	}
	getAll(param) {
		$.get(param.url, function(res) {
			cm.publish("/"+this.id+"/getAll"+"/Response", res);
			if (param.handler) {
				param.handler(res)
			}
		});
	}
	remove(param) {
		//$.delete	
	}		
	
	
}
window.remoteService = new RemoteService()