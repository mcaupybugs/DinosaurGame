import Dinosaur from "./components/dinosaur";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="border border-1">
        <Dinosaur></Dinosaur>
      </div>
    </div>
  );
}
