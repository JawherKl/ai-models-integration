import client from "prom-client";

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const requestCount = new client.Counter({
  name: "api_requests_total",
  help: "Total API requests",
});

const requestDuration = new client.Histogram({
  name: "api_response_time_seconds",
  help: "API response time in seconds",
  buckets: [0.1, 0.3, 0.5, 1, 2, 5]
});

export function trackRequests(req, res, next) {
  requestCount.inc();
  const start = process.hrtime();

  res.on("finish", () => {
    const duration = process.hrtime(start);
    requestDuration.observe(duration[0] + duration[1] / 1e9);
  });

  next();
}

export function metricsHandler(req, res) {
  res.set("Content-Type", client.register.contentType);
  client.register.metrics().then(metrics => res.end(metrics));
}
