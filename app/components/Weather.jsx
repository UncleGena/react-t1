var React = require('react');
var WeatherForm = require('app/components/WeatherForm');
var WeatherMessage = require('app/components/WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('app/components/ErrorModal');

var Weather = React.createClass({
  render: function() {
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message="{errorMessage}"/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather:</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  },

  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    console.log(location);

    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(response) {
      that.setState({
        location: location,
        temp: response,
        isLoading: false
      })
    }, function(error) {
      console.log(error);
      that.setState({
        isLoading: false,
        errorMessage: error.message
      })
    })
  },

  componentDidMount: function() {
    var location = this.props.location.query.location;
    console.log(location);

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;
    console.log(location);

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
})

module.exports = Weather;
