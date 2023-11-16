import { Screenb } from "../components/screenb";
import { Screena } from "../components/screena";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <div className="font-inter bg-gray-200">
        <Screena />
        <Screenb />
      </div>
    </main>
  )
}
