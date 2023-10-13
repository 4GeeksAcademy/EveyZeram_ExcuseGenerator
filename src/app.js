function onLoad() {
  let who = [`Mi perro`, `Mi pareja`, `My tatarabuelo`, `Mi casero`, `Mi ex`];
  let what = [`comió`, `cogió`, `robó`, `machacó`, `hizo papiroflexia con`];
  let thing = [`deberes`, `trabajo`, `documentos`];
  let when = [`hoy`, `hace 84 años`, `mientras comía`, `mientras yo dormía`];
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseGenerator(who, what, thing, when);
}

function excuseGenerator(param1, param2, param3, param4) {
  let aWho = Math.floor(Math.random() * param1.length);
  let aWhat = Math.floor(Math.random() * param2.length);
  let aThing = Math.floor(Math.random() * param3.length);
  let aWhen = Math.floor(Math.random() * param4.length);
  return (
    param1[aWho] +
    ` ` +
    param2[aWhat] +
    ` ` +
    param3[aThing] +
    ` ` +
    param4[aWhen]
  );
}

window.onload = onLoad;
