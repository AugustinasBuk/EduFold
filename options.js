window.onload = (event) => {

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme")
  } else {
    document.body.classList.remove("dark-theme")
  }


  if(localStorage.getItem("heading") === "default"){
    document.body.classList.add("default-size")
  }
  if(localStorage.getItem("heading") === "medium"){
    document.body.classList.add("medium-size")
  }
  if(localStorage.getItem("heading") === "large"){
    document.body.classList.add("large-size")
  }


  if(localStorage.getItem("color") === "default"){
    document.body.classList.add("default-color")
  }
  if(localStorage.getItem("color") === "green"){
    document.body.classList.add("green-color")
  }
  if(localStorage.getItem("color") === "yellow"){
    document.body.classList.add("yellow-color")
  }
};

