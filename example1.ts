var microBenchmark = require('micro-benchmark');

var N = 10000;
var result = microBenchmark.suite({
    duration: 100, // optional
    maxOperations: 1000, // optional
    specs: [{
        name: 'sin(i)',
        fn: function () {
            for (var i = 0; i < N; ++i) Math.sin(i);
        }
    }, {
        name: 'sqrt(i)',
        fn: function () {
            for (var i = 0; i < N; ++i) Math.sqrt(i);
        }
    }, {
        name: 'pow(i, 2)',
        fn: function () {
            for (var i = 0; i < N; ++i) Math.pow(i, 2);
        }
    }]
});

var report = microBenchmark.report(result, { chartWidth: 10 /* 30 is default */ });
console.log(report);