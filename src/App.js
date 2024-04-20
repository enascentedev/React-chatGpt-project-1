import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [history, setHistory] = useState([]);

	const handleQuestionChange = (event) => {
		setQuestion(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!question) return;

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
	};
	return (
		<div className="flex flex-row bg-gray-400 overflow-y-auto">
			<aside className="w-1/5">
				<div className="mockup-code">
					<pre data-prefix="$"><code>conversa 1</code></pre>
					<pre data-prefix=">"><code>conversa 2.</code></pre>
					<pre data-prefix=">"><code>conversa 3</code></pre>
				</div>
			</aside>
			<div id="chatBoot">
				<div className="container-avatar">
					{/* Renderização condicional das mensagens */}
					{history.map((msg, index) => (
						<div key={index} className={`chat ${msg.name === 'Usuário' ? 'chat-start' : 'chat-end'} p-5`}>
							<div className="chat-image avatar rounded-md mx-5 border-warning-content">
								<figure className="w-20">
									<img alt="Avatar" src="https://media.licdn.com/dms/image/C4E03AQH7qqguks_2gA/profile-displayphoto-shrink_800_800/0/1661427371063?e=2147483647&v=beta&t=TS4txeO4uU8m2JHdGyNRYa9PXTYFgX-JBZVWxjQyuOM" className='rounded-md' />
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
					<input
						type="text"
						placeholder="Inicie a conversa aqui"
						className="text-gray-900 input input-bordered w-11/12 m-5"
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
