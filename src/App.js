import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './pages/ErrorBoundary';
import NotFound from './pages/NotFound';
import RepoList from './pages/index';
import SingleRepo from './pages/RepositoryDetails';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<RepoList />} />
          <Route path="/repo/:repoName" element={<SingleRepo />} />
          <Route element={<NotFound />} />
          <Route path="" />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;