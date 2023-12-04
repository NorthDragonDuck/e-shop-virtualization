FROM debian:stable-slim

RUN apt update && apt install python3 python3-pip -y
# Set the working directory
WORKDIR /app

# Copy the Python script into the container
COPY ./app.py /app/

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
CMD ["python3", "app.py"]