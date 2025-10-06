# Monitoring and Observability

## **Monitoring Stack**

  * **Frontend Monitoring**: **Sentry** to capture JavaScript errors and monitor Core Web Vitals.
  * **Backend Monitoring**: **Prometheus** for metrics collection and **Grafana** for dashboards.
  * **Error Tracking**: **Sentry** will be used for both frontend and backend for unified error aggregation and alerting.
  * **Logging**: The backend will output structured JSON logs, which will be collected by **Fluentd** or **Loki** in the Kubernetes cluster.

## **Key Metrics to Track**

  * **Frontend Metrics**:
      * Core Web Vitals (LCP, FID, CLS)
      * JavaScript error rate
      * API request latency (client-side)
  * **Backend Metrics**:
      * API Request Rate (requests per second)
      * API Error Rate (% of 4xx and 5xx responses)
      * API Latency (p95 and p99 response times)
      * Database query performance

