const bnt_sim = document.querySelector("[data-btn='sim']")
const bnt_nao = document.querySelector("[data-btn='nao']")

bnt_nao.addEventListener("mouseover", (evt)=>{
  let target = evt.target;
  let posicaoAleatoria = Math.floor(Math.random() * 500)

  target.setAttribute(`style`,`position: absolute; top: ${posicaoAleatoria}px;`)

  target.addEventListener("click", ()=> {
    alert("Conseguiu")
  })
})

bnt_sim.addEventListener("click", ()=>{
  alert("Vamo embarcar nessa")
})