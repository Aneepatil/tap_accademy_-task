import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const PasswordDisplay = ({ onPasswordGenerated }) => {
  const [useNumbers, setUseNumbers] = useState(true);
  const [useAlphabets, setUseAlphabets] = useState(true);
  const [useSpecialChars, setUseSpecialChars] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const generatePassword = () => {
    const numbers = "0123456789";
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charset = "";
    if (useNumbers) charset += numbers;
    if (useAlphabets) charset += alphabets;
    if (useSpecialChars) charset += specialChars;

    let password = "";
    for (let i = 0; i < 12; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setGeneratedPassword(password);
    onPasswordGenerated(password);
  };

  const handleCopy = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="mb-8">
      <input
        className="border border-gray-300 rounded px-3 py-2 mb-3 w-full"
        type="text"
        value={generatedPassword}
        readOnly
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={generatePassword}
      >
        Generate Password
      </button>
      <CopyToClipboard text={generatedPassword} onCopy={handleCopy}>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Copy to Clipboard
        </button>
      </CopyToClipboard>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Password copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PasswordDisplay;
