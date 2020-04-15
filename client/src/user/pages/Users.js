import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Fan Lu",
      image:
        "https://images.unsplash.com/photo-1586763365361-dfe8a05f66b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80",
      diseases: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
