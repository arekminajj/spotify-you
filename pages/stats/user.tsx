import { Container, Navbar, Card, Table, Col, Row, Image } from "react-bootstrap";
import Head from 'next/head';
import getAuthCodeUrl from '../lib/getAuthCodeUrl';

export async function getServerSideProps(context) {
  const code = context.query.code;
  const url = process.env.BASE_URL + code;
  const res = await fetch(url, {
    method: "GET",
  });
  const data = await res.json();
  return {
    props: { data },
  };
}

const Stats = ({ data }) => {
  let type = typeof(data.data.user.display_name);
  if(type=='undefined') {
    return(
      <Container>
        <Head>
        <title>Spotify-You - You are not loged in!</title>
        </Head>
        <Navbar>
        <Navbar.Brand href="/">Spotify-You 🎵</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <div style={{ height: "2rem" }}></div>
      <h1 className="justify-content-center">You are not loged in no more😔 Click <a href={getAuthCodeUrl()}>here</a> to log in again.</h1>
      <div style={{ height: "4rem" }}></div>
      <h2 className="text-center">Check out project's repo on GitHub!</h2>
      <a target="_blank" href="https://github.com/arekminajj/spotify-you">
      <Image className="mx-auto d-block" height={280} width={280} src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} />
      </a>
      </Container>
    )
  }
  return (
    <Container>
      <Head>
        <title>Spotify-You - Statistics</title>
      </Head>
      <Navbar>
        <Navbar.Brand href="https://spotify-you.vercel.app/">Spotify-You 🎵</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a target="_blank" href={data.data.user.external_urls.spotify}>
              {data.data.user.display_name}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <div style={{ height: "2rem" }}></div>
      <Row className="text-center">
        <Col className="d-flex justify-content-center">
         <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={data.data.user.images[0].url} />
           <Card.Body>
              <Card.Title>{data.data.user.display_name}</Card.Title>
              <Card.Text>
             {data.data.currentlyPlaying.is_playing == true &&
                <div>
                 Now playing: {data.data.currentlyPlaying.item.name} by: {data.data
                   .currentlyPlaying.item.artists.map(function (d, idx) {
                      return (<a
                        target="_blank"
                        href={d.external_urls.spotify}
                        key={idx}
                      >
                        💥 {d.name} &nbsp;
                     </a>);
                    })}
                 </div>
                }
             </Card.Text>
           </Card.Body>
          </Card>
        </Col>
        <Col>
          <div style={{ height: "2rem" }}></div>
          <h1 className="text-center">Spotify-You 🎵</h1>
          <h4 className="text-center">Check out project's repo on GitHub!</h4>
          <a target="_blank" href="https://github.com/arekminajj/spotify-you">
          <Image className="mx-auto d-block" height={200} width={200} src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} />
          </a>
        </Col>
      </Row>
      <div style={{ height: "2rem" }}></div>
      <Row>
        <Col md>
          <h1 className="text-center">Recently played</h1>
          {data.data.recentlyPlayed.items.map(function (d, idx) {
            return (
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th style={{ width: "3rem" }}>#</th>
                    <th>Track</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{idx + 1}</td>
                    <td>
                    <Image height={45} width={45} src={d.track.album.images[0].url} rounded />
                    🔥{d.track.name} by {d.track.artists.map(function (d, idx) {
                        return (<a
                          target="_blank"
                          href={d.external_urls.spotify}
                          key={idx}
                        >
                          💥 {d.name} &nbsp;
                        </a>);
                      })}
                    </td>
                  </tr>
                </tbody>
              </Table>
            );
          })}
        </Col>
        <Col md>
          <h1 className="text-center">Top Artists 🧑</h1>
          {data.data.topArtists.items.map(function (d, idx) {
            return (
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th style={{ width: "3rem" }}>#</th>
                    <th>Artist</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{idx + 1}</td>
                    <td>
                      <a target="_blank" href={d.external_urls.spotify}>
                      <Image height={45} width={45} src={d.images[0].url} rounded />
                      🔥{d.name}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            );
          })}
        </Col>
        <Col md>
          <h1 className="text-center">Top Songs 🎸</h1>
          {data.data.topTracks.items.map(function (d, idx) {
            return (
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th style={{ width: "3rem" }}>#</th>
                    <th>Track</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{idx + 1}</td>
                    <td>
                    <Image height={45} width={45} src={d.album.images[0].url} rounded />
                    🔥{d.name} by {d.artists.map(function (d, idx) {
                        return (<a
                          target="_blank"
                          href={d.external_urls.spotify}
                          key={idx}
                        >
                         💥 {d.name}
                        </a>);
                      })}
                    </td>
                  </tr>
                </tbody>
              </Table>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;
