import React, { useState } from "react";

const PasswordToggle = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="password"></label>
      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          style={{
            position: "absolute",
            top: "50%",
            right: "8px",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "•••" : "•"}
        </span>
      </div>
    </div>
  );
};

export default PasswordToggle;
