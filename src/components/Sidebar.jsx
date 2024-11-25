import React from "react";

const Sidebar = ({ contacts }) => {
  return (
    <div className="w-1/4 h-full bg-gray-100 p-4">
      <h2 className="mb-4 text-lg font-bold">Contactos</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="p-2 mb-2 bg-white rounded shadow">
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
