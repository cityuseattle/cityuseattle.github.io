# Use Ruby 2.6 as the base image
FROM ruby:2.6

# Set locale environment variables
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the Gemfile and Gemfile.lock to the container
COPY Gemfile Gemfile.lock ./

# Install Bundler and dependencies
RUN gem install bundler:2.2.33 && bundle install

# Copy the rest of the application code
COPY . .

# Expose the necessary ports
EXPOSE 4000
EXPOSE 4004
