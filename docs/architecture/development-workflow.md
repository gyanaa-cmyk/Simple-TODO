# Development Workflow

## **Local Development Setup**

### **Prerequisites**

  * Git
  * Node.js (for package management)
  * Docker & Docker Compose

### **Initial Setup**

```bash
# 1. Clone the repository
git clone <repository_url>
cd gamified-todo-app

# 2. Build the Docker images
docker-compose build
```

### **Development Commands**

```bash
# Start all services in the background
docker-compose up -d

# Stop all running services
docker-compose down

# View logs from all services
docker-compose logs -f
```

-----
