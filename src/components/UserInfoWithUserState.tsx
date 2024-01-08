import { useState } from "react";

const UserInfoWithUserState = () => {
  const [user, setUser] = useState({ name: "", age: "", hobbies: [] });
  console.log(user);
  return (
    <div className="border p-10 my-10">
      <h3>User Info with State</h3>
      <form className="mt-4">
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="input"
        />
        <input
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          className="input"
        />
        <input
          onBlur={(e) =>
            setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
          }
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="Hobbies"
          className="input"
        />
        <input type="submit" className="btn-primary" />
      </form>
    </div>
  );
};

export default UserInfoWithUserState;
