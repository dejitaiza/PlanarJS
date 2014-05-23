PlanarJS
=====

A lightweight JS library to work with planar ( 2D ) coordinates.

It supports the following coordinate systems :
* Cartesian ( complete )
* Polar ( complete )
* Geographic ( soon )

### Running the test suite

PlanarJS uses Mocha for functional testing. To run the tests you need to install mocha globally if you don't have it yet :

    npm install -g mocha

Then run the command :

    mocha test

### Announcements
22/05/2014 17:35 - The library is now usable in a CommonJS environment and is fully test-covered. Version bump to 0.2.0 to reflect the actual implementation design and specs. Check test/spec.js for details on how to use it.
The documentation for a proper use is coming soon !

### TODO :

* Provide a wrapper for CommonJS and AMD module formats
* Provide events for listening to changes in coordinates
* Wrap all coordinate systems in one object
* DONE - Implement conversion functions between coordinate systems
* Implement facilities for computing distances between points
