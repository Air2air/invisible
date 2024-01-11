import ListBox from "./components/Listbox";

export default function Home() {
  const options = [
    { value: "1", label: "Option One" },
    { value: "2", label: "Option Two" },
    { value: "3", label: "Option Three" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ListBox options={options} />
    </main>
  );
}
