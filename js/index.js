const canvas = document.getElementById('Matrix');
const contexto = canvas.getContext('2d');

canvas.width = window.screen.width;
canvas.height = window.screen.height;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeros = '0123456789';

const alfabeto = katakana + letras + numeros;

const fontSize = 16;
const colunas = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < colunas; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	contexto.fillStyle = 'rgba(0, 0, 0, 0.075)';
	contexto.fillRect(0, 0, canvas.width, canvas.height);
	
	contexto.fillStyle = '#0F0';
	contexto.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alfabeto.charAt(Math.floor(Math.random() * alfabeto.length));
		contexto.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);