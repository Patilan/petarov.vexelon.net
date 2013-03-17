PETAROV
==========================

Nothing but a personal blog page containing sections like:

	* Microblog (posts fetched from public Google profile)
	* Coding (RSS fetched form Github profile)
	* Games (JSONP locally fetched data)
	* Open Source (JSONP locally fetched data)
	* Anything else you may think of ... 

The whole web page is build using Javascript and with the exception of some JSONP data, served by a simple 
_fetch.php_ PHP script, no othre server side code is used. 

# Setup
## Configure local test environment

Open your Apache Virtual Hosts configurations, e.g. _apache\conf\httpd-vhosts.conf_ in XAMPP, and add the following:

		<VirtualHost *:80>
		    DocumentRoot /path-to-project
		    ServerName project-name.com
		    ServerAlias www.project-name.com
		    <Directory /path-to-project>
		        Options FollowSymLinks MultiViews -Indexes
		        AllowOverride All
		        Order allow,deny
		        Allow from all
		    </Directory>
		</VirtualHost>
		
If you are under Linux adjust your host in _/etc/hosts_

		127.0.0.1       project-name.com     project-name
		
For Windows, go to _%WINDOWS%/system32/drivers/etc/hosts_ and add the hostname.
		

## Configure client side

There are many things to adjust but you should start from _js/app/conf.js_ where you can change the Google API key,
clientId and GitHub profile link parameters.

# Open Source Libraries
The following open source libraries are used:

  * [Bootstrap](http://twitter.github.com/bootstrap/) - Sleek, intuitive, and powerful front-end framework for faster and easier web development.
  * [Knockout](http://knockoutjs.com/) - Simplify dynamic JavaScript UIs by applying the Model-View-View Model (MVVM) pattern.  
  * [jQuery](http://jquery.com/) - The Write Less, Do More, JavaScript Library.
  * [Require.js](http://requirejs.org/) - RequireJS is a JavaScript file and module loader.
  * [Underscore.js](http://underscorejs.org/) - utility-belt library for JavaScript.
  * [Googole Plus Javascript API](https://github.com/AdminSpot/Google-Plus-javascript-API) - Google Plus Javascript API.
  * [Holder.js](http://imsky.github.com/holder/) - Holder renders image placeholders entirely on the client side.  
  * [PageDown](https://code.google.com/p/pagedown/) - is the version of Attacklab's Showdown and WMD as used on Stack Overflow and the other Stack Exchange sites.  
  * [Modernizr](http://modernizr.com/) - Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user's browser.

# License
Read the [LICNESE]() file for more info.

