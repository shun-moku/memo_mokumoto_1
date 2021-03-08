function check() {
  const notes = document.querySelectorAll(".content_post");
  notes.forEach(function (note) {
    if (note.getAttribute("data-load") != null) {
      return null;
    }
    note.setAttribute("data-load", "true");
    note.addEventListener("click", () => { 
      const noteId = note.getAttribute("data-id");
      // XMLHttpRequestのメソッドを使用できるようになる
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/notes/${noteId}`, true);
      XHR.responseType = "json";
      XHR.send();

      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        const item = XHR.response.note;
        if (item.checked === true) {
          note.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          note.removeAttribute("data-check");
        }
      };
    });
  });

}
setInterval(check, 1000);

// function check() {
//   const notes = document.querySelectorAll(".content_post");
//   notes.forEach(function (note) {
//     if (note.getAttribute("data-load") != null) {
//       return null;
//     }
//     note.addEventListener("click", () => { 
//       console.log("ok")

//     });
//   });

// }

// window.addEventListener('load', check)