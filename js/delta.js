function Delta(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let delta = (b*b)-4*a*c;
    document.getElementById("resposta").innerHTML = `Δ = ${delta}`;
     let x1 = (-b + Math.sqrt(delta)) / (2*a)
     let x2 = (-b + Math.sqrt(delta)) / (2*a)
     document.getElementById("resposta-x1").innerHTML = `Δ = ${x1}`;
     document.getElementById("resposta-x2").innerHTML = `Δ = ${x2}`;
}