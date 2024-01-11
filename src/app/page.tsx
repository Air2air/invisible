import { Http2ServerResponse } from "http2";
import dynamic from "next/dynamic";

const ListBox = dynamic(() => import("./components/Listbox"), { ssr: false });

export default function Home() {

  const options = [
    { value: "1", label: "Option One" },
    { value: "2", label: "Option Two" },
    { value: "3", label: "Option Three" },
  ];

  const title = "Victor's Invisible test assignment for Todd Dunning";
  const description = "I did this without any CSS libraries.  I used overrides of the native Listbox package.";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>{title}</h2>
      <p>{description}</p>
      <ListBox options={options} />
    </main>
  );
}
