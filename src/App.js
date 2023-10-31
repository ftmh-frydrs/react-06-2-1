import React from 'react';
import users from './users.json';
import "./App.css";

function renderUser(user) {
  const nameStyle = {
    color: user.gender === 'Male' ? 'blue' : 'red',
  };

  return (
    <div className="max-w-xs border rounded-lg m-2 p-2">
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={user.avatar}
          alt={user.first_name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900" style={nameStyle}>
          {user.first_name}
        </h5>
        <span className="text-sm text-gray-500">{user.last_name}</span>
        <p className="mt-4">{user.gender}</p>
      </div>
    </div>
  );
}

function renderUsers() {
  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user, id) => (
        <div key={id}>{renderUser(user)}</div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className='h-screen flex items-center justify-center'>
      {renderUsers()}
    </div>
  );
}

export default App;
