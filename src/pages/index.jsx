import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RepoList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_GITHUB_USERNAME' with your GitHub username
    const githubUsername = 'ABDULAHMED19785';

    axios
      .get(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => {
        // Set the fetched repositories in the state
        setRepos(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error fetching repositories: ', error);
      });
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-4">My Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="py-2">
            <Link to={`/repo/${repo.name}`}>
              {repo.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;