import Fastify from 'fastify'
import Enhance from '@enhance/fastify-plugin'
import path from 'path'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify({ logger: console.log })

app.register(import("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: '/_public'
});

app.register(Enhance)

app.listen({ port: 3000 }, console.log)
