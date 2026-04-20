let pessoas = []

let res = document.getElementById('res')
let lista = document.getElementById('lista')

function enviar() {
  let nome = document.getElementById('nome').value.trim()
  let idade = document.getElementById('idade').value.trim()
  let cidade = document.getElementById('cidade').value.trim()

  //Validação: campos vazios
  if (!nome || !idade || !cidade) {
    res.innerHTML = "⚠️ Por favor, preencha todos os campos."
    return
  }

  //Validação: idade inválida
  if (idade <= 0 || idade > 120) {
    res.innerHTML = "⚠️ Idade inválida."
    return
  }

  //Criando objeto
  let pessoa = {
      nome: nome,
      idade: Number(idade),
      cidade: cidade,
  }

  pessoas.push(pessoa)

  let item = document.createElement('option')
  item.text = `${pessoa.nome} - ${pessoa.idade} anos - ${pessoa.cidade}`
  lista.appendChild(item)

  document.getElementById('nome').value = ""
  document.getElementById('idade').value = ""
  document.getElementById('cidade').value = ""


}

function finalizar() {
      if (pessoas.length === 0) {
        res.innerHTML = "Adicione pessoas antes de finalizar!"
        return
      }

      let total = pessoas.length
      let soma = 0

      let maisVelha = pessoas[0]
      let maisNova = pessoas[0]

      for (let p of pessoas) { //“Para cada pessoa dentro do array pessoas...”
        soma += p.idade // soma idades

        if (p.idade > maisVelha.idade) {
          maisVelha = p //Se a pessoa atual (p) for mais velha que a atual "maisVelha": substitui
        }

        if (p.idade < maisNova.idade) {
          maisNova = p
        }
      }

      let media = soma / total

      res.innerHTML = `
        <strong>Total:</strong> ${total} <br>
        <strong>Mais velha:</strong> ${maisVelha.nome} (${maisVelha.idade}) <br>
        <strong>Mais nova:</strong> ${maisNova.nome} (${maisNova.idade}) <br>
        <strong>Média:</strong> ${media.toFixed(1)} anos
      `
    }

