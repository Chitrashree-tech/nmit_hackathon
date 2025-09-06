// src/components/Auth.js
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export default function Auth({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async () => {
    if (isSignup) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), { uid: res.user.uid, email, name });
      setUser(res.user);
    } else {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 p-6">
      {isSignup && <input placeholder="Name" onChange={e => setName(e.target.value)} />}
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>{isSignup ? "Sign Up" : "Login"}</button>
      <p onClick={() => setIsSignup(!isSignup)} className="cursor-pointer text-blue-500">
        {isSignup ? "Already have an account? Login" : "New user? Sign up"}
      </p>
    </div>
  );
}

