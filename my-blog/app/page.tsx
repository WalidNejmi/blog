import Posts from "./components/Posts"
import '@mantine/core/styles.css';
import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';


export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Walid</span>.
        </span>
      </p>
      <Posts />
    </main>
  )
}