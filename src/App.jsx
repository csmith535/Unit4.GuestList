import useQuery from "./hooks/useQuery";

export default function App() {
  const { data: guests } = useQuery();
  return (
    <>
      <h1>Guest List</h1>
    </>
  );
}
