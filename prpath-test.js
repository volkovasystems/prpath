
const assert = require( "assert" );
const prpath = require( "./prpath.js" );

assert.equal( prpath( "/hello/world/yeah" ), "/hello/world", "should be equal" );

assert.equal( prpath( "/hello/world/yeah/" ), "/hello/world", "should be equal" );

assert.equal( prpath( "http://www.yahoo.com/hello/world/yeah/" ), "http://www.yahoo.com/hello/world", "should be equal" );

assert.equal( prpath( "C:\\yeah\\hello\\world" ), "C:\\yeah\\hello", "should be equal" );

console.log( "ok" );
