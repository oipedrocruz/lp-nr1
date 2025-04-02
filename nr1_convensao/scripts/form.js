
// Função para obter parâmetros UTM da URL
function getUTMParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParameters = {};
  utmParameters["str_utm_source"] = urlParams.get("utm_source") || "";
  utmParameters["str_utm_medium"] = urlParams.get("utm_medium") || "";
  utmParameters["str_utm_campaign"] = urlParams.get("utm_campaign") || "";
  utmParameters["str_utm_term"] = urlParams.get("utm_term") || "";
  return utmParameters;
}

document.addEventListener("DOMContentLoaded", function () {

  let measurement_id__c = 'G-3RPJSREWE0'

  let client_id__c = function get_ga_clientid() {
      var cookie = {};
      document.cookie.split(';').forEach(function (el) {
          var splitCookie = el.split('=');
          var key = splitCookie[0].trim();
          var value = splitCookie[1];
          cookie[key] = value;
      });
      return cookie["_ga"].substring(6);
  }

  var cookie = {};
  document.cookie.split(';').forEach(function (el) {
      var splitCookie = el.split('=');
      var key = splitCookie[0].trim();
      var value = splitCookie[1];
      cookie[key] = value;
  });
  cookie["_ga"].substring(6)
  function get_ga_clientid() {
      var cookie = {};
      document.cookie.split(';').forEach(function (el) {
          var splitCookie = el.split('=');
          var key = splitCookie[0].trim();
          var value = splitCookie[1];
          cookie[key] = value;
      });
      return cookie["_ga"].substring(6);
  }

  let botaoEnviar = document.querySelectorAll("#submitButton");
  botaoEnviar.forEach(obj => {

    obj.addEventListener("click", function (e) {
      e.preventDefault();
      const isWhatsapp = obj.getAttribute('whatsapp') == "true"

      let isSomethingMissing = false

      inputs.forEach(input => {
        const errorElement = input.parentElement.querySelector(".form__error")
        errorElement.style.display = "none"
        errorElement.textContent = ""
        const container = input.closest(".form__inputCtn")
        
        isSomethingMissing = validadorInputs(input, container, errorElement, isWhatsapp)
        
        input.addEventListener('click', () => { // Remove o erro ao clicar novamente no input
          container.classList.remove('form__error-err')
          errorElement.style.display = 'none'
        })
      })

      const checkboxs = isWhatsapp ? document.querySelector('input[name="option_cliente2"]:checked') : document.querySelector('input[name="option_cliente"]:checked')

      if (isSomethingMissing || checkboxs == null) {
        alert('Preencha todos os campos antes de processeguir')
        return // Caso esteja faltando algo, impede a função de seguir
      }

      const nome = isWhatsapp ? document.getElementById('nome2').value : document.getElementById('nome').value;
      const email = isWhatsapp ? document.getElementById('email2').value : document.getElementById('email').value;
      const cargo = isWhatsapp ? true : document.getElementById('cargo').value;
      const empresa = isWhatsapp ? document.getElementById('empresa2').value : document.getElementById('empresa').value;
      const colaboradores = isWhatsapp ? true : document.getElementById('colaboradores').value;
      const option_cliente = isWhatsapp ? document.querySelector('input[name="option_cliente2"]:checked') : document.querySelector('input[name="option_cliente"]:checked')

      // Formatar a data e hora no padrão brasileiro
      let dataHoraFormatada = new Date().toLocaleString("pt-BR");
      if (
          !nome ||
          !email ||
          !cargo ||
          !empresa ||
          !option_cliente ||
          !colaboradores
          ) {
          alert("Por favor, preencha todos os campos obrigatórios.");
          return;
      }
      if (!(/^\S+@\S+\.\S+$/.test(email))) {
          alert('O e-mail está inválido!')
          return
      }
      const utmParameters = getUTMParameters()
      const data = JSON.stringify({
          str_lp_name: 'Manual do PAT - 2025',
          str_user_name: nome,
          str_email: email,
          str_cargo: cargo,
          str_company_name: empresa,
          str_employees_number: colaboradores,
          fl_Client: option_cliente.value,
          dt_created_date: dataHoraFormatada,
          measurement_id__c: measurement_id__c,
          client_id__c: client_id__c(),
          ...utmParameters// Inclui os parâmetros UTM mapeados corretamente
      });

      fetch("https://conteudo.caju.com.br/integracao-pat-2025", {
          method: "POST",
          body: data,
          headers: {
              "Content-Type": "application/json; charset=utf-8"
          }
      })
          .then(resposta => resposta.text())
          .then((resposta) => {
              const json = JSON.parse(resposta.replace("System.Collections.ArrayList", ""))
              if (json.statusCode === 200) {

                  // Mostra mensagem de email enviado...
                  document.getElementById('showFormulario').setAttribute('showFormulario', showFormulario)
                  document.getElementById('showSendMessage').setAttribute('showSendMessage', showSendMessage)
                  if(obj.getAttribute('whatsapp') == true) window.open('https://bit.ly/3FE3Kow', '_blank'); // Abre o link em uma nova aba
                  if (typeof dataLayer !== 'undefined') {
                      dataLayer.push({
                          event: "e_003_001_001_059_018_001",
                          parameters: {
                              email_domain: domainEmail(email)
                          }
                      });
                  }
                  window.location.href = "https://conteudo.caju.com.br/ebook-pat-2025-a-caminho";
              } else {
                  alert("Erro ao inserir dados.");
              }
          }).catch(err => console.log(err));
  });
}) 
});

//split email domain

function domainEmail(email) {
  const dominios = [
      'gmail.com',
      'hotmail.com',
      'outlook.com',
      'yahoo.com',
      'icloud.com',
      'aol.com',
      'live.com',
      'protonmail.com',
      'mail.com',
      'gmx.com',
      'zoho.com',
      'me.com',
      'yandex.com',
      'msn.com',
      'fastmail.com'
  ]
  let emailDomain = email.split('@')[1]
  if (dominios.includes(emailDomain)) {
      return 'personal'
  } else {
      return 'corp'
  }

}
//input colaboradores, para não permitir letras/caracteres especiais e delimitar a quantidade de números inseridos
function onlyNumber(input) {
  input.value = input.value.replace(/[a-zA-Z]/g, "").replace(/\D/g, '');
  if (input.value < 1) {
      input.value = ''
      return
  }
}

document.getElementById('nome').addEventListener('input', (event) => {
  // Remove todos os caracteres que não são letras
  const regex = /[0-9]/g;
  event.target.value = event.target.value.replace(regex, '').replace(/[!@#$%^&\(\)\_\=\+\-\¨\<\,\>\.\:\;\~\}\]\[\´\{\**]/g, "");

});

function validacaoEmail(email) {

  usuario = email.value.substring(0, email.value.indexOf("@"));
  dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);

  if (!(/^\S+@\S+\.\S+$/.test(email.value))) {
      alert('O e-mail está inválido!')
      return
  }
}

/* Scripts do formulário */
const message = {
  ['nome']: "* Nome é obrigatório",
  ['cargo']: "* Seu cargo é obrigatório",
  ['empresa']: "* Nome da empresa é obrigatório",
  ['colaboradores']: "* Quantidade de funcionários é obrigatório",
}

const validadorInputs = (input, container, errorElement, isWhatsapp) => {
  
  const validadeWhatsapp = input.getAttribute('isWhatsapp') == 'input'
  if(!validadeWhatsapp && isWhatsapp || validadeWhatsapp && isWhatsapp == false) return
  
  let isValid = false
  
  if (input.id === "email" && !validateEmail(input.value)) { // input
    container.classList.add('form__error-err')
    errorElement.textContent = "* Email corporativo é obrigatório"
    errorElement.style.display = "block"
    isValid = true
  } else if (input.value == '') { // Seletor
    container.classList.add('form__error-err')
    errorElement.textContent = message[input.id]
    errorElement.style.display = "block"
    isValid = true
  }
  return isValid
}

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const inputs = document.querySelectorAll(".form__input, .form__select")
inputs.forEach(input => { // Criar elementos de erro para cada campo
  
  const errorElement = document.createElement("p")
  errorElement.classList.add("form__error")
  errorElement.style.display = "none"
  input.parentElement.appendChild(errorElement)

  errorElement.parentElement.querySelector(".form__error")
  const container = input.closest(".form__inputCtn")
  
  input.addEventListener('blur', () => {
    validadorInputs(input, container, errorElement)
  })

  input.addEventListener('click', () => {
    container.classList.remove('form__error-err')
    errorElement.style.display = 'none'
  })
  
})
document.getElementById("nome").addEventListener("input", (e) => {
  e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/g, '')
})

document.getElementById("colaboradores").addEventListener("input", (e) => {
  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '') // Remove tudo que não for número
})
