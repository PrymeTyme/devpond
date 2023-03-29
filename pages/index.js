import Head from 'next/head'
import { Heading,Button,Text,Code } from '@chakra-ui/react'
import { useAuth } from '@/lib/auth'




const Home = () => {
  const auth = useAuth()
  return (
    <>
      <Head>
        <title>DevPond</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div >
          <Heading>DevPond</Heading>
        </div>

        <Text>Current User:&nbsp;
          <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>)
        }


      </main>
    </>
  )
}

export default Home;
