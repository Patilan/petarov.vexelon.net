/*
 * Configurations & Globals
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define([], function() {
    var config = {
    		server: {
    			baseUrl: location.protocol+'//'+location.hostname+(location.port ? ':' + location.port: '') + '/',
    		},
    		site: {
    			name: 'PETAROV',
    			avatar_link: 'http://www.gravatar.com/avatar/c19e7ea0c405ab71f87a2ce6077a958e.png',
    		},
    		google: {
    			apiKey: 'AIzaSyCpdmuyNHOGzOvLCsN2OmtZ7w_z-3wxnn8',
    			clientId: '101695111306977669026',
    			maxPosts: 3,
    		},
    		github: {
    			url: 'https://github.com/',
    			apiUrl: 'https://api.github.com',
    			atomUrl: 'https://github.com/petarov.atom',
    			maxPosts: 5,
    		}
    };
    
    return config;
});