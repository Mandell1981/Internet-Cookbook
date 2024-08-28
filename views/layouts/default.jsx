const React = require('react')

function Default(html) {
  return (
    <html>
      <head>
        <title>International Guide to Cooking</title>
      </head>
      <body>
        <h1>Welcome to the Party!</h1>
        <div className="container">
            {html.children}
        </div>
      </body>
    </html>
  )
}

module.exports = Default
