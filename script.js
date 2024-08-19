// Seleciona os elementos de entrada e saída
const userInput = document.getElementById('user-input');
const resultText = document.getElementById('result-text');

// Botões
const encodeBtn = document.getElementById("encode-btn");
const decodeBtn = document.getElementById("decode-btn");
const copyBtn = document.getElementById("copy-btn");

// Mapeamento das substituições
const cipherMap = [
    { letter: 'e', code: 'enter' },
    { letter: 'i', code: 'imes' },
    { letter: 'a', code: 'ai' },
    { letter: 'o', code: 'ober' },
    { letter: 'u', code: 'ufat' }
];

// Função para codificar o texto
const codificarTexto = (texto) => {
    cipherMap.forEach(map => {
        texto = texto.replace(new RegExp(map.letter, 'g'), map.code);
    });
    return texto;
};

// Função para decodificar o texto
const decodificarTexto = (texto) => {
    cipherMap.forEach(map => {
        texto = texto.replace(new RegExp(map.code, 'g'), map.letter);
    });
    return texto;
};

// Função para verificar o estado da saída
const atualizarEstadoOutput = () => {
    const outputSection = document.getElementById('output-content');
    const emptyState = document.getElementById('empty-state');

    if (resultText.value.trim() === "") {
        outputSection.style.display = 'none';
        emptyState.style.display = 'flex';
    } else {
        outputSection.style.display = 'flex';
        emptyState.style.display = 'none';
    }
};

// Função para limpar campos e copiar texto
copyBtn.addEventListener('click', () => {
    // Copiar o texto
    resultText.select();
    document.execCommand('copy');
    console.log('Texto copiado:', resultText.value);
    
    // Limpar os campos de entrada e saída
    userInput.value = '';
    resultText.value = '';

    // Chamar a função para verificar o estado do output
    atualizarEstadoOutput();
});

// Função para codificar o texto quando o botão de codificar é clicado
encodeBtn.addEventListener('click', () => {
    const encodedText = codificarTexto(userInput.value);
    resultText.value = encodedText;
    atualizarEstadoOutput();
});

// Função para decodificar o texto quando o botão de decodificar é clicado
decodeBtn.addEventListener('click', () => {
    const decodedText = decodificarTexto(userInput.value);
    resultText.value = decodedText;
    atualizarEstadoOutput();
});
