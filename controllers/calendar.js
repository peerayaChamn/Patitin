exports.getTest = (req,res,next) => {
  console.log('Getting the calendar test view.')
  let username = "Demo User"
    res.render("calendar/test", {
      title: 'Calendar Test',
      username: username
    })
}