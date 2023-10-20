import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can log the error to a service like Sentry here
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message as needed
      return (
        <div className="flex flex-col justify-center items-center text-white m-3 p-3">
          <h2>Oops! Something went wrong.</h2>
          <p>We're sorry, but an error occurred.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;