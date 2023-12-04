#!/bin/bash

# Backup directory
BACKUP_DIR="/backup"

echo "Starting database backup at $(date)"
# Ensure backup directory exists
mkdir -p $BACKUP_DIR

# Function to wait for PostgreSQL to be ready
wait_for_db() {
  while ! pg_isready -h $DATABASE_HOST -p 5432 -U $POSTGRES_USER; do
    echo "Waiting for database to be ready..."
    sleep 2
  done
}

# Wait for the database to be ready
wait_for_db

# Perform the backup, making sure to use the correct database name
pg_dump -U "$POSTGRES_USER" -h "$DATABASE_HOST" -d "$POSTGRES_DB" > "${BACKUP_DIR}/db-$(date +%Y%m%d%H%M%S).sql"
