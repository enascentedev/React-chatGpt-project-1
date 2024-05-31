import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [history, setHistory] = useState([]);
	const [loading, setLoading] = useState(false);
	const userAvatar = "https://media.licdn.com/dms/image/C4E03AQH7qqguks_2gA/profile-displayphoto-shrink_800_800/0/1661427371063?e=2147483647&v=beta&t=TS4txeO4uU8m2JHdGyNRYa9PXTYFgX-JBZVWxjQyuOM"; // URL da foto do usuário
	const botAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6HCnbbPoVAW22W0GK_KwZc37vp6tsppS9g&s"; // URL da foto do Robô

	const handleQuestionChange = (event) => {
		setQuestion(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!question) return;
		setLoading(true); // Começar a carregar

		const userMessage = { name: 'Usuário', message: question, timestamp: new Date().toISOString() };
		setQuestion('');

		try {
			const response = await axios.post('http://localhost:8080/pergunta', { question });
			const botMessage = { name: 'Robô', message: response.data, timestamp: new Date().toISOString() };

			// Atualize o histórico uma única vez, incluindo a pergunta e a resposta
			setHistory(prevHistory => [...prevHistory, userMessage, botMessage]);
			setAnswer(response.data);
		} catch (error) {
			console.error('Erro ao enviar pergunta:', error);
		}
		setLoading(false); // Parar de carregar
	};
	return (
		<div className="flex flex-row bg-base-100 overflow-y-auto h-screen w-full">

			<aside className="w-60 bg-base-100">
				<div className="mockup-code !bg-base-100 text-primary">
					<pre data-prefix="$"><code>conversa 1</code></pre>
				</div>
			</aside>
			<div id="chatBoot">
				<div className="container-avatar">
					<div className=' w-full flex justify-end'>
						<div class="dropdown mb-72">
							<div tabindex="0" role="button" class="btn m-1">
								Estilos
								<svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
							</div>
							<ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-40">
								<li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Design-1" value="default" /></li>
								<li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Design-2" value="retro" /></li>
								<li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Design-3" value="cyberpunk" /></li>
								<li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Design-4" value="valentine" /></li>
								<li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Design-5" value="aqua" /></li>
							</ul>
						</div>
					</div>
					{/* Renderização condicional das mensagens */}
					{history.map((msg, index) => (
						<div key={index} className={`chat ${msg.name === 'Usuário' ? 'chat-start' : 'chat-end'} p-5`}>
							<div className="chat-image avatar rounded-md mx-5 border-warning-content">
								<figure className="w-20">
									<img alt={msg.name} src={msg.name === 'Usuário' ? userAvatar : botAvatar} className='rounded-md' />
								</figure>
							</div>
							<div className="chat-header gap-2">
								{msg.name}
								<time className="text-xs opacity-50 px-2">{new Date(msg.timestamp).toLocaleTimeString()}</time>
							</div>
							<div className="chat-bubble">{msg.message}</div>
							<div className="chat-footer opacity-50">
								{msg.name === 'Usuário' ? 'enviado' : 'visualizado'}
							</div>
						</div>
					))}

				</div>

				<form onSubmit={handleSubmit} className="w-full flex items-end my-20">
					{loading && (
						<div className="loading-container">
							<span className="loading">Carregando...</span>
						</div>
					)}
					<input
						type="text"
						placeholder="Inicie a conversa aqui"
						className="text-primary input input-bordered w-11/12 my-5"
						value={question}
						onChange={handleQuestionChange}
					/>
					<button type="submit" className="btn btn-outline m-5">Enviar</button>
				</form>
			</div>
		</div>
	);
}

export default App;
