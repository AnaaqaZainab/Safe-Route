import React, { useState } from "react";

function Contacts() {

  const [contacts, setContacts] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = (e) => {

    e.preventDefault();

    if (!name || !phone) {
      alert("Please enter name and phone number.");
      return;
    }

    const newContact = {
      id: Date.now(),
      name: name,
      phone: phone
    };

    setContacts([...contacts, newContact]);

    setName("");
    setPhone("");
  };


  const deleteContact = (id) => {

    setContacts(
      contacts.filter((contact) => contact.id !== id)
    );

  };


  return (
    <div className="page">

      <section className="contacts-page">

        <div className="page-heading">

          <span>👥 TRUSTED NETWORK</span>

          <h1>Trusted Contacts</h1>

          <p>
            Add people you trust so you can contact them quickly
            during an emergency.
          </p>

        </div>


        <div className="contacts-layout">


          {/* ADD CONTACT */}

          <div className="contact-form-card">

            <div className="form-icon">
              👤+
            </div>

            <h2>Add Trusted Contact</h2>

            <p>
              Keep important people ready for emergencies.
            </p>


            <form onSubmit={addContact}>

              <label>Name</label>

              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />


              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />


              <button type="submit" className="add-btn">
                + Add Contact
              </button>

            </form>

          </div>


          {/* CONTACT LIST */}

          <div className="contact-list-card">

            <div className="contact-list-heading">

              <div>
                <h2>Your Contacts</h2>

                <p>
                  {contacts.length} trusted contact
                  {contacts.length !== 1 ? "s" : ""}
                </p>
              </div>

              👥

            </div>


            {contacts.length === 0 ? (

              <div className="empty-contacts">

                <div>📱</div>

                <h3>No contacts added</h3>

                <p>
                  Add someone you trust to get started.
                </p>

              </div>

            ) : (

              <div className="contacts-list">

                {contacts.map((contact) => (

                  <div className="contact-item" key={contact.id}>

                    <div className="contact-avatar">
                      {contact.name.charAt(0).toUpperCase()}
                    </div>

                    <div className="contact-info">

                      <h3>{contact.name}</h3>

                      <p>{contact.phone}</p>

                    </div>

                    <div className="contact-actions">

                      <a href={`tel:${contact.phone}`}>
                        📞
                      </a>

                      <button
                        onClick={() => deleteContact(contact.id)}
                      >
                        🗑️
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>


        <div className="privacy-note">

          🔒 <strong>Privacy:</strong> This demo stores contacts
          only in the current browser session.

        </div>

      </section>

    </div>
  );
}

export default Contacts;