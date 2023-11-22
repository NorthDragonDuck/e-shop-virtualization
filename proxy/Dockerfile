# Use the official Caddy image as a parent image
FROM caddy:2-alpine

# Set the working directory
WORKDIR /etc/caddy

# Copy the Caddyfile configuration into the image
COPY Caddyfile Caddyfile

# Expose the necessary ports
EXPOSE 80
EXPOSE 443

# Set the default command for the container
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
