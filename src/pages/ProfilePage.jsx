import { useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    medications: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });

      if (!response.ok) throw new Error("Failed to update profile");
      alert("Profile updated successfully.");
    } catch (error) {
      alert("Error updating profile: " + error.message);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Your Health Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Gender</label>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Weight (lbs)</label>
          <input
            type="number"
            name="weight"
            value={profile.weight}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Height</label>
          <input
            type="number"
            name="height"
            value={profile.height}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Current Medications</label>
          <textarea
            name="medications"
            value={profile.medications}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
