import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

document.querySelector('#button').addEventListener("click",()=>{
  const request = new Promise((res,rej)=>{
    setTimeout(() => {
      rej('Error!')
    }, 1000);
    const value = document.querySelector('#input').value
    fetch(`http://localhost:8080/hello?name=${value}`).then((v)=>{
      res(v.text())
    })
  })
  request.then((res)=>{
    document.querySelector('#message').innerHTML=res
  }).catch((err)=>{
    document.querySelector('#message').innerHTML=err
  })
})