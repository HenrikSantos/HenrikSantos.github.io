export default function Sobre() {
	return (
		<aside
			id='sobre'
			className='
				primary top-[26rem] mx-auto my-5 flex flex-col justify-center
				md:sticky md:m-0 lg:w-4/12'
		>
			<div className='mx-8 flex flex-col md:mx-0'>
				<h1 className='text-4xl font-bold'>Henrik Santos</h1>
				<h2 className='text-xl font-light'>
					<span className='emphasis'>Desenvolvedor Web</span>
				</h2>
				<div className='my-3 space-y-2 font-thin'>
					<p>
						- Sou técnico de informática formado no IFSP e cursei um ano de ADS, às vezes brinco de fazer joguinhos com Unity/Unreal 🎮.
					</p>
					<p>
						- Tenho um canal no YouTube onde ensino programação 💻.
					</p>
					<p>
						- Meus hobbies são: programação, arte 2D/3D, jogos, criptografia e tecnologia 🎨.
					</p>
					<p>e-mail: henrik.ruan4@gmail.com</p>
				</div>
				<ul className='mt-3 flex items-stretch'>
					<li className="mr-3 text-xs">
						<a href="https://github.com/HenrikSantos" target="_blank" rel="noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#d5f6ff" className="h-6 w-6" aria-hidden="true">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
							</svg>
							<span className='sr-only'></span>
						</a>
					</li>
					<li className="mr-3 text-xs">
						<a href="https://www.linkedin.com/in/henrik-santos-dev/" target="_blank" rel="noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d5f6ff" className="h-6 w-6" aria-hidden="true">
								<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
							</svg>
							<span className='sr-only'></span>
						</a>
					</li>
					<li className="mr-3 text-xs">
						<a href="https://www.youtube.com/@gimmicodando730" target="_blank" rel="noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" fill="#d5f6ff" className="h-7 w-7" viewBox="-35.20005 -41.33325 305.0671 247.9995">
								<path d="M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849"/>
							</svg>
							<span className='sr-only'></span>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
}
