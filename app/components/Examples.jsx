var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// })


var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here our a few example locations to try out:</p>
      <ol>
        <li><Link to='/?locations=Kiev'>Kiev, Ukraine</Link></li>
        <li><Link to='/?locations=Moscow'>Moscow, Russia</Link></li>
      </ol>
    </div>
  )
}



module.exports = Examples;
