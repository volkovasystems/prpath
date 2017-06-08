"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "prpath",
			"path": "prpath/prpath.js",
			"file": "prpath.js",
			"module": "prpath",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/prpath.git",
			"test": "prpath-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Get parent path.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"mtch": "mtch",
			"protype": "protype"
		}
	@end-include
*/

const falzy = require( "falzy" );
const mtch = require( "mtch" );
const protype = require( "protype" );

const LAST_SEPARATOR_PATTERN = /\b\/$|\b\\$/
const SEPARATOR_PATTERN = /^\/\b|^\\\b|\b\/\b|\b\\\b/;

const prpath = function prpath( path ){
	/*;
		@meta-configuration:
			{
				"path:required": "string"
			}
		@end-meta-configuration
	*/

	if( falzy( path ) || !protype( path, STRING ) ){
		throw new Error( "invalid path" );
	}

	path = path.replace( LAST_SEPARATOR_PATTERN, "" );

	let separator = mtch( path, SEPARATOR_PATTERN, 0 );

	return path.split( SEPARATOR_PATTERN ).reverse( ).splice( 1 ).reverse( ).join( separator );
};

module.exports = prpath;
