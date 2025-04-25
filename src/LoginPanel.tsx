import React from 'react';

interface ChildProps {
  updatePanelToApp: () => void;
}

const LoginPanel: React.FC<ChildProps> = ({ updatePanelToApp }) => {
  const handleClick = () => {
    // Call the parent's function to update its state directly
    updatePanelToApp();
  };

  return (
    <div>
      <h1> dit is de login panel </h1>
      <button onClick={handleClick}>Log in</button>
    </div>
  );
}

export default LoginPanel;

