const Validation = () => {
  const subject = document.forms["myForm"]["subject"].value;

  const title = document.forms["myForm"]["title"].value;
  const location = document.forms["myForm"]["location"].value;

  const timing = document.forms["myForm"]["timing"].value;

  const fixfee = document.forms["myForm"]["fixfee"].value;

  if (
    title === "" ||
    subject === "" ||
    location === "" ||
    fixfee === "" ||
    timing === ""
  ) {
    alert("Required feild cannot be blank");
    return false;
  } else {
    return true;
  }
};

export default Validation;
