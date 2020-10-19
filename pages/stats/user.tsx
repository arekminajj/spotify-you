import { Container } from 'react-bootstrap';

export async function getServerSideProps(context) {
  const code = context.query.code;
  const url = `http://localhost:3000/api/auth?code=` + code;
  const res = await fetch(url, {
    method: 'GET'
  });
  const data = await res.json()
  return {
    props: { data }, 
  }
}

const Stats = ({data}) => {
  return (
    <Container>
      hello
    </Container>
  )
}

export default Stats
