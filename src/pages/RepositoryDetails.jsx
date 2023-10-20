import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleRepo = () => {
  const { repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    // Fetch the details of the selected repo based on 'repoName'
    axios
      .get(`https://api.github.com/repos/ABDULAHMED19785/${repoName}`)
      .then((response) => {
        // Set the fetched repository details in the state
        setRepoDetails(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error fetching repository details: ', error);
      });
  }, [repoName]);

  return (
    <div className="container mx-auto mt-4">
      {repoDetails ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">{repoDetails.name}</h2>
          <p>Description: {repoDetails.language}</p>
          <p>Stars: {repoDetails.size}</p>
          {/* Display more details as needed */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SingleRepo;