var microBenchmark = require('micro-benchmark');
const data = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
var result = microBenchmark.suite({
    duration: 1e7,
    maxOperations: 1e7,
    specs: [
        {
            name: 'Object.keys',
            fn: () => {
                Object.keys(data);
            }
        },
        {
            name: 'iteration',
            fn: () => {
                var x: any[] = [];
                for (var i in data) {
                    x.push(i);
                }
            }
        },
    ]
});

var report = microBenchmark.report(result, { chartWidth: 10 /* 30 is default */ });
console.log(report);