export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
  server.create('user', { email: 't@t.de' });
  server.createList('user', 10);
}
