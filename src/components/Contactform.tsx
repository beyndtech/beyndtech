import { useRef, useState } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";

export default function Contactform() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const serviceKey = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICEKEY;
  const templateKey = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATEKEY;
  const publicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLICKEY;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);

    if (fullName.length < 3) return setError("Full name must be at least 3 characters");
    if (email.length < 5 || !email.includes("@")) return setError("Invalid email address");
    if (phoneNumber.length < 3) return setError("No country was selected");
    if (budget === "none") return setError("Please select a budget range");
    if (message.length < 2) return setError("Invalid message");

    setLoading(true);

    emailjs
      .send(
        serviceKey,
        templateKey,
        { fullName, email, phoneNumber, budget, message },
        { publicKey },
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess("Your Message was delivered successfully");
        },
        (error) => {
          console.log("FAILED...", error);
          setError("Error sending message, please try again");
        },
      )
      .finally(() => {
        setLoading(false);
        formRef.current?.reset();
      });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="mt-2 space-y-5">
          <input
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            type="text"
            className="p-4 pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700/10 rounded-xl"
            placeholder="Full Name"
          />

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            className="p-4 pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700/10 rounded-xl"
            placeholder="example@gmail.com"
          />

          <input
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type="text"
            className="p-4 pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700/10 rounded-xl"
            placeholder="Phone Number"
          />

          <select
            value={budget}
            onChange={(e) => {
              setBudget(e.target.value);
            }}
            className="text-gray-600 p-4 pe-9 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700/10 rounded-xl"
          >
            <option value="none">Select Budget Range</option>
            <option value="$100 - $1000">$100 - $1000</option>
            <option value="$1000 - $10,000">$1000 - $10,000</option>
            <option value="$10,000 - $100,000">$10,000 - $100,000</option>
          </select>

          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="p-4 pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700/10 rounded-xl"
            placeholder="Enter Your Message Here."
            rows={4}
          />
        </div>
      </form>

      {error && (
        <div className="w-full p-4 rounded-xl my-7 font-medium text-sm text-red-600 bg-red-600/5 border border-red-600/40">
          {error}
        </div>
      )}
      {success && (
        <div className="w-full p-4 rounded-xl my-7 font-medium text-sm text-green-600 bg-green-600/5 border border-green-600/40">
          {success}
        </div>
      )}

      <div className="mt-5 flex justify-start gap-x-2">
        <Button onClick={handleSubmit}>
          {loading ? "Loading..." : "Send Your message"}
        </Button>
      </div>
    </div>
  );
}
