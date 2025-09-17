import { useState } from "react";
import useQuery from "./hooks/useQuery";

export default function App() {
  const [SelectedID, setSelectedID] = useState();

  const { data: guests } = useQuery("/guests");
  const { data: guest } = useQuery(SelectedID ? "/guests/" + SelectedID : null);

  // SelectedID must exists, then check for guest data successful fetch, then guest details renders with the guest prop passed in.
  return (
    <div className="page">
      <h1>Guest List</h1>
      <div className="main-content">
        <GuestList guests={guests || []} onGuestClick={setSelectedID} />
        {SelectedID && guest ? (
          <GuestDetails guest={guest} setSelectedID={setSelectedID} />
        ) : (
          <div className="placeholder">
            <p>Select a guest to see more details</p>
          </div>
        )}
      </div>
    </div>
  );
}

function GuestList({ guests, onGuestClick }) {
  return (
    <article className="guests">
      {guests.map((guest) => (
        <GuestCard key={guest.id} guest={guest} onGuestClick={onGuestClick} />
      ))}
    </article>
  );
}

function GuestCard({ guest, onGuestClick }) {
  return (
    <article className="guest" onClick={() => onGuestClick(guest.id)}>
      <h2>{guest.name} </h2>
      <footer>Email: {guest.email}</footer>
    </article>
  );
}

function GuestDetails({ guest, setSelectedID }) {
  return (
    <article className="guest-details">
      <h2>
        {guest.name} Guest ID: #{guest.id}
      </h2>
      <p>Employment: {guest.job}</p>
      <p>Interests: {guest.bio}</p>
      <footer>
        Email: {guest.email} Phone: {guest.phone}
      </footer>
      <button onClick={() => setSelectedID(null)}>Return</button>
    </article>
  );
}
