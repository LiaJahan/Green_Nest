import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const testFirebase = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      "test@example.com",
      "123456"
    );
    console.log("User logged in:", userCredential.user);
  } catch (err) {
    console.log("Error:", err.message);
  }
};

testFirebase();
