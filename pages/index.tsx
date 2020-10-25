import { Container, Jumbotron, Button, Navbar, Image } from "react-bootstrap";
import getAuthCodeUrl from './lib/getAuthCodeUrl'
import Head from 'next/head';

export default function Home() {
  const url = getAuthCodeUrl();
  return (
    <Container>
      <Head>
        <title>Spotify-You - Home</title>
        <meta name="description" content="Spotify listening statistics, recently played tracks, top artist and more!" />
      </Head>
      <Navbar>
        <Navbar.Brand>Spotify-You 🎵</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <p>Hello!</p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron>
        <h1>Spotify-you</h1>
        <p>
          Check out your listening stats on spotify!
        </p>
        <p>
          <Button href={url} variant="primary">Click here!</Button>
        </p>
      </Jumbotron>
      <h2 className="text-center">Check out project's repo on GitHub!</h2>
      <a target="_blank" href="https://github.com/arekminajj/spotify-you">
      <Image className="mx-auto d-block" height={280} width={280} src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} alt="GitHub" />
      </a>
    </Container>
  );
}
