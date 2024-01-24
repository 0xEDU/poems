async function getPoem() {
  const res = await fetch('https://poetrydb.org/random', { cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

interface Poem {
  title: String,
  author: String,
  lines: String[],
  linecount: String
}

export default async function Home() {
  const poem: Poem[] = await getPoem()
  const poemData: Poem = poem[0]

  return (
    <div className="flex flex-col items-center text-gray-900 font-bold">
      <h3 className="mb-10 text-2xl leading-none tracking-tight md:text-2xl lg:text-3xl dark:text-black"> Read a poem! </h3>
      <p className="text-3xl text-wrap">{poemData.title}</p>
      <p className="text-1md mb-4">By {poemData.author}</p>
      <div className="border-2 overflow-scroll h-96 flex flex-col items-start">{poemData.lines.map(line => <p>{line}</p>)}</div>
    </div>
  );
}
