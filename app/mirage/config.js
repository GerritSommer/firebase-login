export default function() {

  /*
    this.timing = 400;      // delay for each request

    Function fallback. Manipulate data in the db via
      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)
  */

  this.pretender.handledRequest = function(verb, path) {
    console.log('a '+ verb +' request has been made to '+ path);
  };

  this.pretender.unhandledRequest = function(verb, path) {
    console.log('a '+ verb +' request to '+ path +' has not been handled');
  };

  // Mocking authentication with firebase
  // TODO: Fix iframe request mocking
  this.get('https://auth.firebase.com/**', function(db, request) {
    let { email, password } = request.queryParams;

    if ( email, password ) {
      let user = db.users.where({email: email});

      if (user) {
        return {
          provider: 'password',
          uid:      user.id,
          token:    'abc123',
          password: {
            email:                user.email,
            isTemporaryPassword:  false,
            profileImageURL:      'https://secure.gravatar.com/avatar/a8a195b797911d7f03fbc98c849225f4?d=retro'
          }
        }
      }

    } else {
      return  {
        error: {
          code:     'INVALID_EMAIL',
          message:  'The specified email address is invalid.'
        }
      };

    }
  });

  this.get('/users');
  this.post('/users');
  this.get('/users/:id');
  this.put('/users/:id');
  this.del('/users/:id');

}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
