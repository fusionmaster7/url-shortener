console.log("Working");
const clickHandler = async () => {
  const originalUrl = document.getElementById("original-url").value;
  const uniqueName = document.getElementById("unique-name").value;
  const res = await axios({
    method: "POST",
    url: "/createShortLink",
    data: {
      originalUrl,
      uniqueName,
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  console.log(res.data);
  if (res.data.ok) {
    const anchor = document.createElement("a");
    anchor.setAttribute("target", "_blank");
    anchor.innerHTML = ` ${res.data.shortUrl}`;
    anchor.setAttribute("href", `/${uniqueName}`);
    document.getElementsByClassName("content")[0].appendChild(anchor);
  } else {
    alert("Entered URL already exists, please enter again");
  }
};
