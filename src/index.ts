import { handleRequest } from './handler';

export default {
  async fetch(request: Request, env: Env, context: ExecutionContext) {
    return await handleRequest(request, env, context);
  }
}
