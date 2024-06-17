import Posts from './components/Posts';
import '@mantine/core/styles.css';



export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-6 mb-12 text-3xl text-center">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          We are <span className="font-bold">Homebase</span>.
        </span>
      </p>
      <Posts />
    </main>
  )
}