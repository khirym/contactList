import React from "react";

export default function SelectedContact({ contact }) {
  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Username: {contact.username}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
    </div>
  );
}

