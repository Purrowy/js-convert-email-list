javascript: (() => {
    let text = prompt("paste data", "here");
    text = text.replaceAll(" ", "");
    const result = text.split(",");
    alert(result);
   })(); 