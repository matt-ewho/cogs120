$(document)
  .ready(function() {
    $('.ui.form')
      .form({
        fields: {
          email: {
            identifier  : 'email'
          },
          password: {
            identifier  : 'password'
          }
        }
      });
  });