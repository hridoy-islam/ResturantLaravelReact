import { useEffect, useState } from "react";

const UseRole = (user) => {
  console.log(user)
    const [userRole, setUserRole] = useState("");
    useEffect(() => {
        if (user) {
          fetch(`http://localhost:5000/auth/signup/${user?.email}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      }, [user]);
  return [userRole];
};

export default UseRole;