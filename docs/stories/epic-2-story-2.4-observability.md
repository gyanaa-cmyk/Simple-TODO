# Story 2.4 Observability: metrics & structured logs

As a SRE,
I want `/metrics` exposing basic app metrics and structured pino logs,
so that we can monitor health and key indicators in staging/prod.

Acceptance Criteria
1. `/metrics` returns basic counters (uptime, total_connections, total_requests) in plain text or Prometheus format.
2. pino logger is configured and emits structured JSON on startup and errors.
