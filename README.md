# E-Shop Virtualization Project

## Overview

This documentation provides all necessary information to set up and manage the virtualized development environment for the E-Shop project. The environment is containerized using Docker and managed with Docker Compose.

## Prerequisites

- Docker
- Docker Compose
- Git (for version control)

## Service Components

### Backend Service

- Stack: Java 17 with Spring Framework 3.1.6
- Location: backend/
- Access Point: Accessed through the proxy at http://vhost1.localhost/api/.
- Access Port: Accessed at port 8080
- Build Command: docker-compose build backend

### Frontend Service

- Stack: Angular 14.0.0
- Location: frontend/
- Access Point: Accessed through the proxy at http://vhost1.localhost.
- Access Port: Accessed at port 80
- Build Command: docker-compose build frontend

### Database Service

- Stack: PostgreSQL
- Location: database/
- Initialization:
  - Schema: scripts/init-postgres.sql
  - Seed Data: scripts/insert-data.sql
- Build Command: docker-compose build database

### Backup Service

- Location: backup/
- Function: Periodic backup of the PostgreSQL database.
- Script: backup-db.sh
- Build Command: docker-compose build backup

### vHost1 & vHost2 Services

- Location: vhost1/, vhost2/
- Function: vhost1 routes to frontend and backend services; vhost2 hosts a Python application.
- Access Point: vhost2 accessible at http://vhost2.localhost with basic authentication.

### Proxy Service

- Stack: Caddy
- Location: proxy/
- Configuration: Caddyfile
- Build Command: docker-compose build proxy

## Docker Compose Usage

To manage the application:

Open the terminal, navegate to the project directory using 'cd path/to/working_directory/e-shop-virtualization"

# To start all services:
docker-compose up. In case to not see all the logs directly specify the "-d" option

# To stop all services:
docker-compose down

# To rebuild and start services after making changes:
docker-compose up --build -d

# To rebuild specific service:
docker build --no-cache <service-name>. !Note: --no-chace option not nessesary

## Networking

The services are defined on multiple networks for security and isolation:

- net1: Used for internal communication between frontend, backend, and proxy services.
- net2: Used for backend and database communication.
- net3: Additional network, specify its use as per project requirements.

## Persistent Data Volumes

- db_data: Stores the persistent database data.
- backup_data: Stores the database backup files.

## Accessing the Application

Navigate to the following URLs in your web browser:

- Angular/Java application service route: http://vhost1.localhost
- Python application service route: http://vhost2.localhost (requires basic authentication provided in Caddyfile)

## Maintenance and Updates

To update any service, make the required changes to the source or configuration, rebuild the Docker image, and recreate the container using the Docker Compose commands provided.

## Troubleshooting

If you encounter issues with services not starting, database connectivity, or other operational challenges, please review the Docker and service logs for detailed error messages and diagnostics.