# Load test the Varnish instance

This repo is just here to share how to quickly perform a load test against a Varnish instance that is in front of a SPARQL endpoint.

Varnish is agnostic of the exact SPARQL queries used (once preloaded) and thus can be concluded that as long as similar queries and response sizes are given it is expected to behave similarly.

## Requirements

- [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/)

## Usage

```sh
k6 run --vus 10 --duration 10s test.js
```

You can adjust the number of virtual users and the duration of the test as needed.

The test will send a SPARQL query against the cached SPARQL endpoint, and check if the returned status code is 200.
The first time it will be run, the amount of queries would be very low, as no queries are cached yet.
Once you ensure that all queries are cached, the amount of queries will be higher, as the queries are cached.

## Example

Let's run the test with 100 virtual users for 10 seconds, after we ensured that all entries are cached:

```sh
k6 run --vus 100 --duration 10s test.js
```

Here are the results:

```sh
     ✓ is status 200

     checks.........................: 100.00% ✓ 1151       ✗ 0
     data_received..................: 512 MB  46 MB/s
     data_sent......................: 12 MB   1.0 MB/s
     http_req_blocked...............: avg=27.9ms   min=0s      med=0s       max=369.58ms p(90)=1µs      p(95)=314.53ms
     http_req_connecting............: avg=8.64ms   min=0s      med=0s       max=131.23ms p(90)=0s       p(95)=95.78ms
     http_req_duration..............: avg=889.8ms  min=40.05ms med=141.77ms max=8.45s    p(90)=2.39s    p(95)=3.07s
       { expected_response:true }...: avg=889.8ms  min=40.05ms med=141.77ms max=8.45s    p(90)=2.39s    p(95)=3.07s
     http_req_failed................: 0.00%   ✓ 0          ✗ 1151
     http_req_receiving.............: avg=746.24ms min=12µs    med=38.77ms  max=8.33s    p(90)=2.16s    p(95)=2.85s
     http_req_sending...............: avg=49.97µs  min=17µs    med=41µs     max=1.71ms   p(90)=75µs     p(95)=88µs
     http_req_tls_handshaking.......: avg=14.44ms  min=0s      med=0s       max=192.45ms p(90)=0s       p(95)=166.92ms
     http_req_waiting...............: avg=143.51ms min=18.69ms med=119.08ms max=1.61s    p(90)=231.14ms p(95)=313.16ms
     http_reqs......................: 1151    103.417913/s
     iteration_duration.............: avg=917.93ms min=97.78ms med=357ms    max=8.45s    p(90)=2.39s    p(95)=3.07s
     iterations.....................: 1151    103.417913/s
     vus............................: 8       min=8        max=100
     vus_max........................: 100     min=100      max=100


running (11.1s), 000/100 VUs, 1151 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  10s
```

This means that the Varnish endpoint was able to handle aroud 100 requests per second, once entries are cached.

## Related projects

- [Varnish](https://varnish-cache.org/), a caching solution
- [varnish-post](https://github.com/zazuko/varnish-post), used to cache POST requests
- [clear-sparql-cache-endpoint](https://github.com/zazuko/clear-sparql-cache-endpoint), used to purge the cache for some particular Varnish tags, using a SPARQL query
