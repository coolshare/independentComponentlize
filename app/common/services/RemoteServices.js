class RemoteService {
	constructor(cm) {
		this.id = "RemoteService"
	};
	
	init() {
		//receive requests from other services (like studentService) or components (4)
		cm.subscribe("/"+this.id+"/Create", function(param) {
			this.create(param);
		}, this);
		cm.subscribe("/"+this.id+"/Edit", function(param) {
			this.edit(param);
		}, this);
		cm.subscribe("/"+this.id+"/GetAll", function(param) {
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
		//4.1
		$.post(param.url, param.data, function(res) {
			//4.2
			//return server result (5)
			cm.publish("/"+this.id+"/GetAll"+"/Response", res);
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
			cm.publish("/"+this.id+"/GetAll"+"/Response", res);
			if (param.handler) {
				param.handler(res)
			}
		});
	}
	get(param) {
		//$.get	
	}
	remove(param) {
		//$.delete	
	}

}
window.remoteService = new RemoteSerevice(cm)