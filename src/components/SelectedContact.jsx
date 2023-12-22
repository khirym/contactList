import React, { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`${API}/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return (
    <div>
      {contact ? (
        <>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Website: {contact.website}</p>
          <p>Company: {contact.company}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
