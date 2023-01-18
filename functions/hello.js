// domain/.netlify/functions/hello
const items = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
]
export async function handler (event, context) {
  return {
    statusCode: 200,
    body: 'hello world',
  }
}
