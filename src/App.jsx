import useQuery from "./hooks/useQuery";

export default function App() {
  const { data: guests } = useQuery("/guests");
  return (
    <>
      <h1>Guest List</h1>
      <GuestList guests={guests || []} />
    </>
  );
}

function GuestList({ guests }) {
  return (
    <article className="guests">
      {guests.map((guest) => (
        <GuestCard key={guest.id} guest={guest} />
      ))}
    </article>
  );
}

function GuestCard({ guest }) {
  return (
    <article className="guest">
      <h2>{guest.name} </h2>
      <footer>
        Email: {guest.email} Phone: {guest.phone}
      </footer>
    </article>
  );
}
