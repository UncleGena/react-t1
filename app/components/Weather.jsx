var React = require('react');
var WeatherForm = require('app/components/WeatherForm');
var WeatherMessage = require('app/components/WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    console.log(location);

    var that = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function(response) {
      that.setState({
        location: location,
        temp: response,
        isLoading: false
      })
    }, function(error) {
      console.error(error);
      that.setState({
        isLoading: false
      })
    })
  },
  render: function() {
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h1 className="text-center">Fetching weather</h1>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather:</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather;
