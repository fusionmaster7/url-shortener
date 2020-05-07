console.log("Working");
let username = null;

//URL Controllers
const genTableUrl = (urlObj) => {
  const urlDiv = document.createElement("div");
  const customDiv = document.createElement("div");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", `/${username}/${urlObj.customName}`);
  anchor.setAttribute("target", "_blank");
  anchor.innerText = urlObj.customName;
  customDiv.append(anchor);
  urlDiv.setAttribute("class", "url");
  const dateDiv = document.createElement("div");
  dateDiv.innerText = urlObj.created;
  urlDiv.append(customDiv);
  urlDiv.append(dateDiv);
  document.getElementsByClassName("urls")[0].append(urlDiv);
};

const getAll = async () => {
  const res = await axios.get(`/${username}`);
  res.data.urls.forEach((e) => genTableUrl(e));
};

const addUrl = async () => {
  const originalUrl = document.getElementById("base").value;
  const customName = document.getElementById("custom").value;
  const res = await axios.post(
    "/add",
    { username, originalUrl, customName },
    { headers: { "Content-type": "application/json" } }
  );
  genTableUrl({ originalUrl, customName, created: Date.now() });
  document.getElementById("base").value = null;
  document.getElementById("custom").value = null;
};

//User controllers
const signUpHandler = async () => {
  username = document.getElementById("usrname").value;
  const res = await axios.post(
    "/signup",
    { username },
    { headers: { "Content-type": "application/json" } }
  );
  if (res.data.okay) {
    document.getElementsByClassName("content")[0].style.display = "block";
    document.getElementsByClassName(
      "content-heading"
    )[0].innerHTML = `URLs Stored by ${res.data.username}`;
    await getAll();
  } else {
    alert("Username already exists");
  }
};
const loginHandler = async () => {
  username = document.getElementById("usrname").value;
  const res = await axios.post(
    "/login",
    { username },
    { headers: { "Content-type": "application/json" } }
  );
  if (res.data.okay) {
    document.getElementsByClassName("content")[0].style.display = "block";
    document.getElementsByClassName(
      "content-heading"
    )[0].innerHTML = `URLs Stored by ${res.data.username}`;
    await getAll();
  } else {
    alert("User does not exist. Please Signup");
  }
};
