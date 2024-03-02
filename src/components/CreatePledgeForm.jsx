import React, { useState } from 'react';
import postCreatePledge from '../api/post-createpledge';
import { useNavigate } from "react-router-dom";


function CreatePledgeForm({ projectId }) {
  const navigate = useNavigate();

  const [pledgeData, setPledgeData] = useState({
    amount: 0,
    comment: "",
    anonymous: false,
    project: projectId,
  });

  console.log(pledgeData);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledgeData((prevPledgeData) => ({
        ...prevPledgeData,
        [id]: value,
    }));
};

const handleSubmit = (event) => {
  event.preventDefault();
    if (pledgeData.amount > 0 && pledgeData.comment) {
      postCreatePledge(pledgeData)
        .then((response) => {
          // Handle the response if needed
          console.log('Pledge created successfully:', response);

          // Redirect the user to the project detail page or any desired location
          navigate(`/project/${projectId}`);
        })
        .catch((error) => {
          // Handle errors, e.g., show an error message to the user
          console.error('Error creating pledge:', error);
          navigate(`/ErrorPage`)
        });
    }
}
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter pledge amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Message:</label>
          <textarea
            id="comment"
            placeholder="Leave a message..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
          <input
            type="checkbox"
            checked={pledgeData.anonymous}
            onChange={() => setPledgeData({ ...pledgeData, anonymous: !pledgeData.anonymous })}
          />
            Keep my identity anonymous
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
  
export default CreatePledgeForm;