const fastify = require('fastify')({ logger: true });

fastify.get('/health', async (request, reply) => {
  return 'ok';
});

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await fastify.listen({ port, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
