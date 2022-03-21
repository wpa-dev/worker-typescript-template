export async function handleRequest(request: Request, env: Env, context: ExecutionContext) {
  return new Response('Hello worker!', {
    headers: {
      'content-type': 'text/plain',
    },
  });
}

