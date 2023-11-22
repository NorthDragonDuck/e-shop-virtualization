# Use a base image with Java 17
FROM openjdk:17-slim

# Set a working directory in the container
WORKDIR /app

# Copy the Gradle wrapper executable and wrapper files
COPY gradlew .
COPY gradle gradle

# Copy the Gradle build file
COPY build.gradle .
COPY settings.gradle .

# Copy the source code of the application
COPY src src

# Give execution rights to the Gradlew script
RUN chmod +x ./gradlew

# Install Gradle and download dependencies
# This is done separately from building to take advantage of Docker layer caching
RUN ./gradlew --no-daemon dependencies

# Build the application using Gradle
# The `--no-daemon` option is used to avoid running the Gradle daemon in the container, which is not necessary
RUN ./gradlew --no-daemon build -x test


# Expose the port the application runs on
EXPOSE 8080

# Run the Spring Boot application
# Change 'your-application.jar' to the name of your generated jar file
CMD ["java", "-jar", "build/libs/backend-0.0.1-SNAPSHOT.jar"]

