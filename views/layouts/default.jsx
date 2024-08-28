const React = require('react')

function Default(html) {
  return (
    <html>
      <head>
        <title> {html.title || 'Default'}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css" integrity="sha512-GlNi+UC2s8FzkofjxQxqnY8s2G1t+NDuIl5S/2jPvvr+rH+lQV8IfiI1m7klfpNbN1DiYN1tWxrUM8eQMqhUkA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" integrity="sha512-5fsy+3xG8N/1PV5MIJz9ZsWpkltijBI48gBzQ/Z2eVATePGHOkMIn+xTDHIfTZFVb9GMpflF2wOWItqxAP2oLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/main.css"/>
      </head>
      <body>
        <div className="wrapper">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
        <h1>Welcome to the Party!</h1>
        <div className="container">
            {html.children}
        </div>
      </body>
    </html>
  )
}

module.exports = Default
