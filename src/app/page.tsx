export default function Home() {
  return (
    <main className="flex flex-col gap-2 text-sm uppercase p-6">
      <h1 className="mb-4">brijr is a web developer</h1>
      <h2>
        &gt; website: <a href="https://bridger.to">bridger.to</a>
      </h2>
      <p>
        &gt; founder: <a href="https://wip.ac">WIP</a>
      </p>
      <p>
        &gt; github: <a href="https://github.com/brijr">@brijr</a>
      </p>
      <p>
        &gt; x: <a href="https://x.com/bridgertower">@bridgertower</a>
      </p>
      <p className="orange mt-4">&quot;i like to make websites&quot;</p>
      <p>© {new Date().getFullYear()} </p>
    </main>
  );
}
