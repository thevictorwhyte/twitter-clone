import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import Widgets from '../components/Widgets'
import Modal from '../components/Modal'
import { getProviders, getSession, useSession } from 'next-auth/react'
import Feed from '../components/Feed'
import { modalState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil'

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)

  if (!session) return <Login providers={providers} />
  return (
    <div className="">
      <Head>
        <title>Twitter clone by Victor Whyte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {isOpen && <Modal />}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch(
    'https://jsonkeeper.com/b/3FFA',
  ).then((res) => res.json())
  const followResults = await fetch(
    'https://jsonkeeper.com/b/04I9',
  ).then((res) => res.json())
  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  }
}
