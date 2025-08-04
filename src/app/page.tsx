export default function Home() {
  return (
    <main className="flex flex-col gap-2 text-sm uppercase p-6">
      <h1>brijr is a web developer</h1>
      <Spacer />
      <h2>
        &gt; website: <a href="https://bridger.to">bridger.to</a>
      </h2>
      <p>
        &gt; github: <a href="https://github.com/brijr">@brijr</a>
      </p>
      <p>
        &gt; x: <a href="https://x.com/bridgertower">@bridgertower</a>
      </p>
      <Spacer />
      <p className="orange">"i like to make websites"</p>
      <p>© {new Date().getFullYear()} </p>
    </main>
  );
}

const Spacer = () => <div className="h-4" />;
