var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//
//     return (
//       <div>
//         <p>Weather message... It's {temp} in {location}</p>
//       </div>
//     )
//   }
// });


// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//
//   return (
//     <div>
//       <p>Weather message... It's {temp} in {location}</p>
//     </div>
//   )
// }


var WeatherMessage = ({temp, location}) => {

  return (
    <div>
      <p className="text-center big-paragraph">It's {temp} in <b>{location}</b></p>
    </div>
  )
}

module.exports = WeatherMessage;
