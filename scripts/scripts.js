 /* Cards */
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
    formContent.classList.remove('popup__lowFade--out')
    formContent.classList.add('popup__lowFade--in')
    formContent.removeAttribute('showFormulario')
  } else {
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
    formContent2.classList.remove('popup__lowFade--out')
    formContent2.classList.add('popup__lowFade--in')
    formContent2.removeAttribute('showFormulario')
  } else {
    formContent2.classList.remove('popup__lowFade--in')
    formContent2.classList.add('popup__lowFade--out')
    setTimeout(() => {
      formContent2.classList.remove('popup__lowFade--out')
      formContent2.setAttribute('showFormulario', '')
    }, 1000);
  }

  handleForms2 = !handleForms2
}


// Scroll personalizado: O GSAP é utilizado para animar o scroll suave
gsap.registerPlugin(ScrollToPlugin);

let scrollY = 0;
const scrollSpeed = 70;  // A velocidade da rolagem personalizada

// Função para scroll suave
function customScroll() {
  window.addEventListener("wheel", function(event) {
    event.preventDefault();
    if (event.deltaY > 0) scrollY += scrollSpeed;
    else scrollY -= scrollSpeed;
    scrollY = Math.max(0, Math.min(scrollY, document.body.scrollHeight - window.innerHeight));
    gsap.to(window, {
      scrollTo: { y: scrollY, autoKill: false }, 
      ease: "power2.out"
    });
  }, { passive: false });
}

customScroll();  // Inicializa o scroll suave

function abrirLink() {
  console.log('aqui');
  
  window.open('https://bit.ly/3FE3Kow', '_blank'); // Abre o link em uma nova aba
}
