let Benchmarkify = require("benchmarkify");

// Create a new benchmark
// The `.printHeader` method will print the name of benchmark & some
// information from the OS/PC to the console.
let benchmark = new Benchmarkify("Simple example").printHeader();

let i = 0;

// Create a test suite
let bench1 = benchmark.createSuite("Increment integer");

// Add first func
bench1.add("Increment with ++", (done) => {
	i++;
	done();
});

// Add second func. This result will be the reference
bench1.ref("Increment with i + 1", (done) => {
	i = i + 1;
	done();
});

bench1.run();