import "./App.css";


function App() {

	return (
		<div class="flex flex-row bg-gray-400">
			<aside class="w-1/5">
				<div class="mockup-code">
					<pre data-prefix="$"><code>conversa 1</code></pre>
					<pre data-prefix=">"><code>conversa 2.</code></pre>
					<pre data-prefix=">"><code>conversa 3</code></pre>
				</div>
			</aside>
			<div id="chatBoot">

				<div class="container-avatar">

					<div class="chat chat-start p-5">
						<div class="chat-image avatar">
							<figure class="w-10 rounded-full">
								<img alt="Tailwind CSS chat bubble component"
									src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
							</figure>
						</div>
						<div class="chat-header">
							Usuário X
							<time class="text-xs opacity-50">12:45</time>
						</div>
						<div class="chat-bubble">mensagem usuário</div>
						<div class="chat-footer opacity-50">
							enviado
						</div>
					</div>

					<div class="chat chat-end p-5">
						<div class="chat-image avatar">
							<figure class="w-10 rounded-full">
								<img alt="Tailwind CSS chat bubble component"
									src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
							</figure>
						</div>

						<div class="chat-header">
							Robô
							<time class="text-xs opacity-50">12:46</time>
						</div>
						<div class="chat-bubble">mensagem robô</div>
						<div class="chat-footer opacity-50">
							visualizado 12:46
						</div>
					</div>

				</div>

				<div class="w-full flex items-end my-20">
					<input type="text" placeholder="Inicie a conversa aqui " class=" text-gray-900 input input-bordered w-11/12 mx-5" />
					<button class="btn btn-outline mx-10">Enviar</button>
				</div>

			</div>
		</div>
	);
}

export default App;