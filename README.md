# Kubernetes Hello World

A lightweight, beautiful hello world application designed for Kubernetes. Shows the container name and features a modern, responsive design.

## Features

- Minimal footprint using Node.js on Alpine Linux
- Beautiful gradient UI with responsive design
- Displays the container/pod name
- Health checks configured
- Resource limits set for efficient operation
- Automated CI/CD pipeline with GitHub Actions

## CI/CD Pipeline

The project includes a GitHub Actions workflow that automatically:
1. Builds the Docker image
2. Tests the container (HTTP 200 check and content validation)
3. Pushes to GitHub Container Registry (GHCR)
4. Tags images as:
   - `ghcr.io/<username>/<repo>:master-<commit-sha>`
   - `ghcr.io/<username>/<repo>:latest`

The pipeline triggers on every push to `main` or `master` branch.

### Using Pre-built Images from GHCR

```bash
# Pull the latest image
docker pull ghcr.io/lucas2kdk/k8s-hello-world:latest

# Or pull a specific commit
docker pull ghcr.io/lucas2kdk/k8s-hello-world:master-abc123...
```

Update the Kubernetes deployment to use the GHCR image:
```yaml
image: ghcr.io/lucas2kdk/k8s-hello-world:latest
imagePullPolicy: Always
```

## Quick Start

### Build the Docker Image

```bash
docker build -t k8s-hello-world:latest .
```

### Test Locally

```bash
docker run -p 8080:8080 k8s-hello-world:latest
```

Visit http://localhost:8080 to see the application.

### Deploy to Kubernetes

```bash
# Apply the deployment and service
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Check the deployment
kubectl get pods
kubectl get service hello-world
```

### Access the Application

The service uses ClusterIP (internal to cluster). To access it locally:

```bash
kubectl port-forward service/hello-world 8080:80
```

Then visit http://localhost:8080

For production external access, use an Ingress or LoadBalancer service.

### View Different Pod Names

With 3 replicas running, refresh the page multiple times to see different container names as the load balancer routes to different pods.

## Image Size

The Docker image is approximately 130MB, using the official Node.js Alpine base image for minimal footprint.

## Resource Usage

- Memory request: 32Mi
- Memory limit: 64Mi
- CPU request: 50m
- CPU limit: 100m

## Clean Up

```bash
kubectl delete -f k8s/deployment.yaml
kubectl delete -f k8s/service.yaml
```
