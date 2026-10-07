function verificarIdade() {
  const elementoNome = document.getElementById("campoNome");
  const elementoInput = document.getElementById("campoIdade");
  const elementoResultado = document.getElementById("mensagemResultado");
  const nome = elementoNome.value.trim();
  const idadeDigitada = parseInt(elementoInput.value);
  if (nome === "") {
    elementoResultado.innerText = "Por favor, digite seu nome completo.";
    elementoResultado.style.color = "#dc2626";
    console.log("Validação: nome não informado.");
    return;
  }
  if (isNaN(idadeDigitada) || idadeDigitada < 0) {
    elementoResultado.innerText = "Por favor, digite uma idade válida.";
    elementoResultado.style.color = "#dc2626";
    console.log(`Validação: idade inválida informada por ${nome}.`);
    return;
  }
  const anosRestantes = 18 - idadeDigitada;
  if (idadeDigitada <= 11) {
    elementoResultado.innerText = `Olá, ${nome}! Você tem ${idadeDigitada} anos e é uma criança.`;
    elementoResultado.style.color = "#2563eb";
    console.log(`Classificação: ${nome} é uma criança (${idadeDigitada} anos).`,);
  } else if (idadeDigitada >= 12 && idadeDigitada <= 17) {
    elementoResultado.innerText = `Olá, ${nome}! Você tem ${idadeDigitada} anos e é um adolescente. ` + `Faltam ${anosRestantes} ano(s) para atingir a maioridade.`;
    elementoResultado.style.color = "#d97706";
    console.log(`Classificação: ${nome} é adolescente (${idadeDigitada} anos). Faltam ${anosRestantes} ano(s) para a maioridade.`,);
  } else if (idadeDigitada >= 18 && idadeDigitada <= 59) {
    elementoResultado.innerText = `Olá, ${nome}! Você tem ${idadeDigitada} anos e é um adulto. ` + `Seu acesso foi liberado com sucesso.`;
    elementoResultado.style.color = "#16a34a";
    console.log(`Classificação: ${nome} é adulto (${idadeDigitada} anos). Acesso liberado.`,);
  } else if (idadeDigitada >= 60) {
    elementoResultado.innerText = `Olá, ${nome}! Você tem ${idadeDigitada} anos e pertence à terceira idade. ` + `Atendimento preferencial.`;
    elementoResultado.style.color = "#7c3aed";
    console.log(`Classificação: ${nome} pertence à terceira idade (${idadeDigitada} anos). Atendimento preferencial.`,);
  }
}
