import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;
  const updateCounter = () => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };

  // Debounce click event using Lodash
  const debouncedUpdateCounter = _.debounce(updateCounter, 1000);

  // Bind click event to button
  $('#startButton').on('click', debouncedUpdateCounter);
});
