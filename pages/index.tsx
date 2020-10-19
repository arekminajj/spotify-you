import { Container, Jumbotron, Button, Navbar, Image } from "react-bootstrap";
import getAuthCodeUrl from './lib/getAuthCodeUrl'

export default function Home() {
  const url = getAuthCodeUrl();
  return (
    <Container>
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
    </Container>
  );
}
