/* Cardss */
const data = [
  { // 1
    ['faq__element']: 'O que é a NR-1 e por que ela é importante?',
    ['faq__card--content']: `A Norma Regulamentadora nº 1 (NR-1) estabelece diretrizes gerais de segurança e saúde no trabalho, incluindo a obrigatoriedade de programas de bem-estar e gerenciamento de riscos ocupacionais. Estar em conformidade com a NR-1 é essencial para evitar penalidades e garantir um ambiente seguro para os colaboradores.`
  },
  { // 2
    ['faq__element']: 'Como a Caju pode ajudar minha empresa a se adequar à NR-1?',
    ['faq__card--content']: `A Caju oferece soluções que integram saúde mental, bem-estar e qualidade de vida em uma única plataforma. Com o <strong>Caju Mais</strong>, sua empresa atende às exigências da NR-1 de forma prática, oferecendo suporte psicológico, equilíbrio entre vida profissional e pessoal e ações preventivas para um ambiente de trabalho mais seguro.`
  },
  { // 3
    ['faq__element']: 'Quais benefícios minha empresa tem ao se adequar à NR-1?',
    ['faq__card--content']: `Além de garantir segurança jurídica e evitar multas, estar em conformidade com a NR-1 melhora a qualidade de vida dos colaboradores, reduz afastamentos por problemas de saúde e fortalece a marca empregadora, tornando sua empresa mais atrativa no mercado.`
  },
  { // 4
    ['faq__element']: 'Quais são os riscos de não seguir a NR-1?',
    ['faq__card--content']: `Empresas que não se adequarem à NR-1 podem enfrentar <strong>multas, ações trabalhistas, aumento de acidentes de trabalho</strong> e impactos negativos na reputação. Além disso, a falta de ações preventivas pode gerar custos elevados com afastamentos e baixa produtividade.`
  },
  { // 5
    ['faq__element']: 'Os benefícios flexíveis ajudam na adequação à NR-1?',
    ['faq__card--content']: `Sim! Com benefícios flexíveis, os colaboradores têm mais autonomia para cuidar da própria saúde e bem-estar. A Caju permite integrar soluções que promovem qualidade de vida, como <strong>apoio psicológico, incentivo à prática de atividades físicas e ações de saúde ocupacional</strong>, tudo dentro das diretrizes da NR-1.`
  },
  { // 6
    ['faq__element']: 'Como a Caju garante segurança jurídica na gestão de benefícios?',
    ['faq__card--content']: `Nossa plataforma é 100% auditável e transparente, garantindo que os benefícios oferecidos estejam sempre em conformidade com as leis trabalhistas e regulamentações da NR-1. Além disso, o Caju Mais simplifica a gestão de bem-estar corporativo, reduzindo riscos trabalhistas e fiscais.`
  },
  { // 7
    ['faq__element']: 'Como posso começar a adequação da minha empresa à NR-1 com a Caju?',
    ['faq__card--content']: `É simples! Entre em contato com nossos especialistas e descubra como a Caju pode ajudar sua empresa a se adequar à NR-1, garantindo mais segurança, eficiência e bem-estar para seus colaboradores.`
  },
 
]
const column1 = document.querySelector('.column--2')
const column2 = document.querySelector('.column--1')
let handle = 1
data.forEach(obj => {
  const div = document.createElement('div')
  div.classList.add('faq__card')
  div.innerHTML = `
    <div class="faq__button">
      <p class="faq__element">${obj['faq__element']}</p>
      <button class="faq__arrow">
        <img src="https://image.fala.caju.com.br/lib/fe3211737164047b701270/m/1/fd229096-ad7d-40bc-b202-286610fdd803.png" alt="">
        </button>
    </div>
    <div class="faq__card--content">${obj['faq__card--content']}</div>
  `
  handle = handle+1
  handle % 2 == 0 ? column2.appendChild(div) : column1.appendChild(div)
})
const faq__card = document.querySelectorAll('.faq__card')
faq__card.forEach(obj => {
  obj.addEventListener('click', (e) => {
    
    
    const card = e.currentTarget
    if(Array.from(card.classList).some(obj => obj == 'open')) {
      card.classList.remove('open')
    } else {
      const openClass = document.querySelector('.open')
      if(openClass != null) openClass.classList.remove('open')
      card.classList.add('open')
    }
  })
})
// Popup - Mostra quando o mouse sai da página
const popup = document.getElementById('popup')
let callPopup = true
document.addEventListener('mouseleave', () => {
  if(!callPopup) return 
  const closed = document.querySelector('[closed]')
  if (closed) {
    closed.classList.remove('popup__lowFade--out')
    closed.classList.add('popup__lowFade--in')
    popup.removeAttribute('closed')
  }
  callPopup = false
})
const closed = document.getElementById('popup')
const showPopup = () => {
  console.log('Fechar popup');
  closed.classList.remove('popup__lowFade--in')
  closed.classList.add('popup__lowFade--out')
  setTimeout(() => {
    closed.classList.remove('popup__lowFade--out')
    popup.setAttribute('closed', '')
  }, 1000);
}
// Popup formulário
let handleForms = true
const formContent = document.getElementById('formContent')
const openFormulario = () => {
  console.log(formContent);
  if(handleForms) {
    document.body.style.overflow = 'hidden'
    formContent.classList.remove('popup__lowFade--out')
    formContent.classList.add('popup__lowFade--in')
    formContent.removeAttribute('showFormulario')
  } else {
    document.body.style.overflow = 'initial'
    formContent.classList.remove('popup__lowFade--in')
    formContent.classList.add('popup__lowFade--out')
    setTimeout(() => {
      formContent.classList.remove('popup__lowFade--out')
      formContent.setAttribute('showFormulario', '')
    }, 1000);
  }
  handleForms = !handleForms
}
let handleForms2 = true
const formContent2 = document.getElementById('formContent2')
const openFormulario2 = () => {
  if(handleForms2) {
    document.body.style.overflow = 'hidden'
    formContent2.classList.remove('popup__lowFade--out')
    formContent2.classList.add('popup__lowFade--in')
    formContent2.removeAttribute('showFormulario2')
  } else {
    document.body.style.overflow = 'initial'
    formContent2.classList.remove('popup__lowFade--in')
    formContent2.classList.add('popup__lowFade--out')
    setTimeout(() => {
      formContent2.classList.remove('popup__lowFade--out')
      formContent2.setAttribute('showFormulario2', '')
    }, 1000);
  }
  handleForms2 = !handleForms2
}

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
document.querySelectorAll('.form__inputCtn').forEach(obj => {
  obj.querySelector('[inputStatus]').addEventListener('focus', (e) => {
    e.currentTarget.parentElement.classList.add('form__input--focus')
  })
  obj.querySelector('[inputStatus]').addEventListener('blur', (e) => {
    e.currentTarget.parentElement.classList.remove('form__input--focus')
  })
})
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
      const colaboradores = isWhatsapp ? document.getElementById('colaboradores2').value : document.getElementById('colaboradores').value;
      const dor = isWhatsapp ? true : document.getElementById('dor').value;
      const option_cliente = isWhatsapp ? document.querySelector('input[name="option_cliente2"]:checked') : document.querySelector('input[name="option_cliente"]:checked')
      // Formatar a data e hora no padrão brasileiro
      let dataHoraFormatada = new Date().toLocaleString("pt-BR");
      if (
          !nome ||
          !email ||
          !cargo ||
          !empresa ||
          !option_cliente ||
          !colaboradores ||
          !dor
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
          str_lp_name: 'NR-1 Conversão - 2025',
          str_user_name: nome,
          str_email: email,
          str_cargo: cargo == true ? '' : cargo,
          str_company_name: empresa,
          str_employees_number: colaboradores,
          fl_Client: option_cliente.value,
          str_desafio: dor == true ? '' : dor,
          dt_created_date: dataHoraFormatada,
          measurement_id__c: measurement_id__c,
          client_id__c: client_id__c(),
          ...utmParameters// Inclui os parâmetros UTM mapeados corretamente
      });
      fetch("https://conteudo.caju.com.br/integration-consolidado-lps", {
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

                  if(isWhatsapp) {
                    window.open('https://bit.ly/NR1_adequacao', '_blank'); // Abre o link em uma nova aba
                  } else {
                    // Mostra mensagem de email enviado...
                    document.getElementById('showFormulario').setAttribute('showFormulario', 'showFormulario')
                    document.getElementById('showSendMessage').setAttribute('showSendMessage', 'showSendMessage')
                  }
                  if(obj.getAttribute('whatsapp') == true) window.open('https://bit.ly/NR1_adequacao', '_blank'); // Abre o link em uma nova aba
                  if (typeof dataLayer !== 'undefined') {
                      dataLayer.push({
                          event: "e_003_001_001_059_018_001",
                          parameters: {
                              email_domain: domainEmail(email)
                          }
                      });
                  }
/*                   window.location.href = "https://conteudo.caju.com.br/ebook-pat-2025-a-caminho";
 */              } else {
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
  ['dor']: "* Maior dor é obrigatório",
}
const validadorInputs = (input, container, errorElement, isWhatsapp) => {
  
  const validadeWhatsapp = input.getAttribute('isWhatsapp') == 'input'
  if(!validadeWhatsapp && isWhatsapp || validadeWhatsapp && isWhatsapp == false) return
  
  let isValid = false
  
  if (input.name === "email" && !validateEmail(input.value)) { // input
    container.classList.add('form__error-err')
    errorElement.textContent = "* Email corporativo é obrigatório"
    errorElement.style.display = "block"
    isValid = true
  } else if (input.value == '') { // Seletor
    container.classList.add('form__error-err')
    errorElement.textContent = message[input.name]
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
