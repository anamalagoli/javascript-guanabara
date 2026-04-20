function enviar() {
  let res = document.getElementById('res')

  let nome = document.getElementById('nome').value.trim()
  let idade = document.getElementById('idade').value.trim()
  let cidade = document.getElementById('cidade').value.trim()
  let profissao = document.getElementById('profissao').value.trim()

  // ❌ Validação: campos vazios
  if (!nome || !idade || !cidade || !profissao) {
    res.innerHTML = "⚠️ Por favor, preencha todos os campos."
    res.style.color = "red"
    return
  }

  // ❌ Validação: idade inválida
  if (idade <= 0 || idade > 120) {
    res.innerHTML = "⚠️ Idade inválida."
    res.style.color = "red"
    return
  }

  // Criando objeto
  let pessoa = {
    nome: nome,
    idade: Number(idade),
    cidade: cidade,
    profissao: profissao,

    apresentar: function() {
      res.style.color = "#4b3a2a"

      res.innerHTML = `
        👤 <strong>${this.nome}</strong><br>
        💼 ${this.profissao}<br>
        🎂 ${this.idade} anos<br>
        📍 ${this.cidade}
      `
    }
  }

  pessoa.apresentar()

  // 🔥 Limpar campos depois de enviar
  document.getElementById('nome').value = ""
  document.getElementById('idade').value = ""
  document.getElementById('cidade').value = ""
  document.getElementById('profissao').value = ""
}