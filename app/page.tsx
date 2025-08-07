import MemecoinList from "@/components/memecoins/memecoinList";
import SwapForm from "@/components/swap/swapForm";

export default function Home() {
  return (
    <div className="max-w-5xl w-full text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Top Performing Memecoins, All in One Place
      </h1>
      <p className="text-white/60 mb-10 text-sm md:text-base">
        Naxis makes it easy to track and buy high performing memecoins fast, gas efficient, and curated in realtime.
      </p>

      <MemecoinList />
      <SwapForm />
    </div>
  );
}
