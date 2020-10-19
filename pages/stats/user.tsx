import { Container, Navbar, Card, Table, Col, Row, Button } from "react-bootstrap";

export async function getServerSideProps(context) {
  const code = context.query.code;
  const url = `https://spotify-you.vercel.app/api/auth?code=` + code;
  const res = await fetch(url, {
    method: "GET",
  });
  const data = await res.json();
  return {
    props: { data },
  };
}

const Stats = ({ data }) => {
  return (
    <Container>
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
                    🎨 {d.name} &nbsp;
                  </a>);
                })}
              </div>
            }
          </Card.Text>
        </Card.Body>
      </Card>
      <div style={{ height: "2rem" }}></div>
      <Row>
        <Col md>
          <h1>Recently played</h1>
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
                      {d.track.name} by {d.track.artists.map(function (d, idx) {
                        return (<a
                          target="_blank"
                          href={d.external_urls.spotify}
                          key={idx}
                        >
                          🎨 {d.name} &nbsp;
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
          <h1>Top Artists</h1>
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
                        {d.name}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            );
          })}
        </Col>
        <Col md>
          <h1>Top Songs</h1>
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
                      {d.name} by {d.artists.map(function (d, idx) {
                        return (<a
                          target="_blank"
                          href={d.external_urls.spotify}
                          key={idx}
                        >
                         🎨 {d.name}
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
