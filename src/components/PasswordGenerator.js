import React, { useState } from 'react';
import PasswordDisplay from './PasswordDisplay';
import LastPasswords from './LastPasswords';

const PasswordGenerator = () => {
  const [lastFivePasswords, setLastFivePasswords] = useState([]);

  const addPassword = (password) => {
    const updatedPasswords = [password, ...lastFivePasswords.slice(0, 4)];
    setLastFivePasswords(updatedPasswords);
    localStorage.setItem('lastFivePasswords', JSON.stringify(updatedPasswords));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Random Password Generator</h1>
      <PasswordDisplay onPasswordGenerated={addPassword} />
      <LastPasswords passwords={lastFivePasswords} />
    </div>
  );
};

export default PasswordGenerator;
