// ----------------------------------------------------------------------------
// Url
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


function URL(url)
        {
        if(url.length==0)
                {
                eval('throw "Invalid URL";');
                };
        this.url = url;
        this.port = -1;
        this.query = (this.url.indexOf('?') >= 0) ? this.url.substring( this.url.indexOf( '?' ) + 1 ) : '';
        this.protocol = '';
        this.host = '';
        var protocolSepIndex = this.url.indexOf( '://' );
        if( protocolSepIndex >= 0 )
                {
                this.protocol = this.url.substring( 0, protocolSepIndex ).toLowerCase();
                this.host = this.url.substring( protocolSepIndex + 3 );
                if(this.host.indexOf('/')>=0) this.host=this.host.substring( 0, this.host.indexOf( '/' ) );
                var atIndex = this.host.indexOf( '@' );
                if( atIndex >= 0 )
                        {
                        var credentials = this.host.substring( 0, atIndex );
                        var colonIndex = credentials.indexOf( ':' );
                        if(colonIndex>=0)
                                {
                                this.username = credentials.substring( 0, colonIndex );
                                this.password = credentials.substring( colonIndex+1 );
                                }
                        else
                                {
                                this.username = credentials;
                                };
                        this.host = this.host.substring( atIndex + 1 );
                        };
                var portColonIndex = this.host.indexOf( ':' );
                if( portColonIndex >= 0 )
                        {
                        this.port = this.host.substring( portColonIndex+1 );
                        this.host = this.host.substring( 0, portColonIndex );
                        };
                this.file = this.url.substring( protocolSepIndex + 3 );
                this.file = this.file.substring( this.file.indexOf( '/' ));
                }
        else
                {
                this.file=this.url;
                };
        if( this.file.indexOf( '?' ) >= 0 )
                {
                this.file = this.file.substring( 0, this.file.indexOf( '?' ) );
                };
        this.path = this.file;
        if( this.query.length > 0)
                {
                 this.file+= '?' + this.query;
                };
        };

/* Returns the port part of this URL, i.e. '8080' in the url 'http://server:8080/' */
URL.prototype.get_port = function( )
        {
        return this.port;
        };

        /* Returns the query part of this URL, i.e. 'Open' in the url 'http://server/?Open' */
        URL.prototype.get_query = function( )
                {
                return this.query;
                };

        /* Returns the protocol of this URL, i.e. 'http' in the url 'http://server/' */
        URL.prototype.get_protocol = function( )
                {
                return this.protocol;
                };

        /* Returns the host name of this URL, i.e. 'server.com' in the url 'http://server.com/' */
        URL.prototype.get_host = function( )
                {
                return this.host;
                };

        /* Returns the user name part of this URL, i.e. 'joe' in the url 'http://joe@server.com/' */
        URL.prototype.get_user_name = function( )
                {
                return this.username;
                };

        /* Returns the password part of this url, i.e. 'secret' in the url 'http://joe:secret@server.com/' */
        URL.prototype.get_password = function( )
                {
                return this.password;
                };

        /* Returns the file part of this url, i.e. everything after the host name. */
        URL.prototype.get_file = function( )
                {
                return this.file;
                };

        /* Returns the file path of this url, i.e. '/dir/file.html' in the url 'http://server/dir/file.html' */
        URL.prototype.get_path = function( )
                {
                return this.path;
                };

        /* Returns the FIRST matching value to the specified key in the query.
           If the url has a non-value argument, like 'Open' in '?Open&bla=12', this method
           returns the same as the key: 'Open'...
           The url must be correctly encoded, ampersands must encoded as &amp;
           I.e. returns 'value' if the key is 'key' in the url 'http://server/?Open&amp;key=value' */
        URL.prototype.get_argument_value = function(key)
                {
                var a = this.getArgumentValues( );
                if( a.length < 1 )
                        {
                        return '';
                        };
                for( i = 0; i < a.length; i++ )
                        {
                        if( a[ i ][ 0 ] == key )
                                {
                                return a[ i ][ 1 ];
                                };
                        };
                return '';
        };

        /* Returns all key / value pairs in the query as a two dimensional array */
        URL.prototype.get_argument_values = function( )
                {
                var a = new Array( );
                var paramvals = (this.url.indexOf('&') >= 0) ? this.url.substring( this.url.indexOf( '&' ) + 1 ) : '';
                var b = paramvals.split( '&' );
                var c =' ';
                if( b.length < 1 )
                        {
                        return a;
                        };
                for( i = 0; i < b.length; i++ )
                        {
                        c = b[ i ].split( '=' );
                        a[ i ] = new Array( c[ 0 ], ( ( c.length ==1 ) ? c[ 0 ] : c[ 1 ] ) );
                        };
                return a;
                };

        /* Returns a String representation of this url */
        URL.prototype.toString = function()
                {
                return this.url;
                };


