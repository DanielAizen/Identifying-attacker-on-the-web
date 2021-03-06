export const config = {
	// Please specify server's IP address. Express.js App and all the TCP ports will be listening on this IP Address
	server_ip: '127.0.0.1',
	// Hostname of the server, e.g. tail-f.shmakov.net
	hostname: 'localhost',
	// Set to true if you would like to serve only HTTPS traffic. Requires configuring Nginx as a Reverse Proxy
	https_only: false,
	// Please set to true if you are using Nginx as a Reverse Proxy
	nginx_reverse_proxy: false,
	// Port on which Express.js will listen in the case of Nginx as a Reverse Proxy configuration
	// @see ./etc/nginx.conf.template
	express_js_alternative_port: 30101,

	// Optional MySQL configuration below
	// Please make sure you are using custom port for the MySQL (33060 in the example below)
	mysql_connection_string: {
		connectionLimit: 100,
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: 'D@n!764IzEn',
		database: 'finalproject'
	},
};

if (config.hostname.length === 0) config.hostname = config.server_ip;
