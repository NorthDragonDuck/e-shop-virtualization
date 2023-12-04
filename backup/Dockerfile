# Use the official Postgres image as a base
FROM postgres:latest

# Copy the backup script into the container
COPY /backup-db.sh /usr/local/bin/backup-db.sh

# Make the script executable
RUN chmod +x /usr/local/bin/backup-db.sh

# Set the entrypoint to run the backup script 
ENTRYPOINT ["sh", "-c"]
CMD ["while :; do /usr/local/bin/backup-db.sh && sleep 180; done"]
