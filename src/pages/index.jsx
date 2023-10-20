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
    <div className="flex flex-col justify-center items-center text-black bg-white">
      <h1 className="mb-5 mt-8 text-2xl uppercase font-bold underline">My Repositories</h1>
      <ul className="bg-gray-900 px-6 py-4 mb-8 mt-5 mx-auto">
        {repos.map((repo) => (
          <li key={repo.id} className="bg-white text-center text-black px-6 py-4 my-3 rounded-[1.5rem] text-2xl font-bold uppercase">
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
