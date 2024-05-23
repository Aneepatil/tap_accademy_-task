import React from 'react';

const LastPasswords = ({ passwords }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Last 5 Passwords</h2>
      <ul>
        {passwords.map((password, index) => (
          <li key={index}>{password}</li>
        ))}
      </ul>
    </div>
  );
};

export default LastPasswords;
