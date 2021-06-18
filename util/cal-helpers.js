// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const month = new Date().getMonth();


// console.log(`${months[month]} has ${daysInMonth(month, 2021)} days.`);

module.exports.daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
}