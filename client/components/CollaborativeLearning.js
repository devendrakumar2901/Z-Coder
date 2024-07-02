import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollaborativeLearning = () => {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const fetchSolutions = async () => {
      const response = await axios.get('/api/solutions');
      setSolutions(response.data);
    };

    fetchSolutions();
  }, []);

  return (
    <div>
      <h1>Collaborative Learning</h1>
      <ul>
        {solutions.map(solution => (
          <li key={solution.id}>
            <p>{solution.code}</p>
            <p>{solution.comments.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollaborativeLearning;
