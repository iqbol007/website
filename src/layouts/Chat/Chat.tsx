import React from 'react';
import './style.css';
const Chat = () => {
	return (
		<div>
			<div className="wrapper">
				<input type="checkbox" checked className="night" id="night" />
				<div className="app">
					{/* <!-- Main nav --> */}
					<div className="main-nav custom-scrollbar">
						<div className="main-nav__section">
							<button className="main-nav__compose-btn">
								<span>
									{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M384,224V408a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V168a40,40,0,0,1,40-40H271.48" style="
											fill: none;
											stroke: #fff;
											stroke-linecap: round;
											stroke-linejoin: round;
											stroke-width: 32px;
										" />
                <path d="M459.94,53.25a16.06,16.06,0,0,0-23.22-.56L424.35,65a8,8,0,0,0,0,11.31l11.34,11.32a8,8,0,0,0,11.34,0l12.06-12C465.19,69.54,465.76,59.62,459.94,53.25Z" />
                <path d="M399.34,90,218.82,270.2a9,9,0,0,0-2.31,3.93L208.16,299a3.91,3.91,0,0,0,4.86,4.86l24.85-8.35a9,9,0,0,0,3.93-2.31L422,112.66A9,9,0,0,0,422,100L412.05,90A9,9,0,0,0,399.34,90Z" />
              </svg> */}
								</span>
								<span>{/* Compose */}</span>
							</button>
						</div>

						{/* <!-- Primary menu start --> */}
						<nav className="primary-nav main-nav__section">
							<ul>
								<li>
									<a href="#">
										<span>
											{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M320,96H88a40,40,0,0,0-40,40V376a40,40,0,0,0,40,40H422.73a40,40,0,0,0,40-40V239" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                    <polyline points="112 160 256 272 343 206.33" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                    <circle cx="431.95" cy="128.05" r="47.95" />
                    <path d="M432,192a63.95,63.95,0,1,1,63.95-63.95A64,64,0,0,1,432,192Zm0-95.9a32,32,0,1,0,31.95,32A32,32,0,0,0,432,96.1Z" />
                  </svg> */}
										</span>
										<span>Inbox</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>
											{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                  </svg> */}
										</span>
										<span>Dearest</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>
											{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <rect x="96" y="48" width="320" height="416" rx="48" ry="48" style="
													fill: none;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                    <line x1="176" y1="128" x2="336" y2="128" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                    <line x1="176" y1="208" x2="336" y2="208" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                    <line x1="176" y1="288" x2="256" y2="288" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                  </svg> */}
										</span>
										<span>Drafts</span>
										<span className="primary-nav__badge">3</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>
											{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M53.12,199.94l400-151.39a8,8,0,0,1,10.33,10.33l-151.39,400a8,8,0,0,1-15-.34L229.66,292.45a16,16,0,0,0-10.11-10.11L53.46,215A8,8,0,0,1,53.12,199.94Z" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                    <line x1="460" y1="52" x2="227" y2="285" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                  </svg> */}
										</span>
										<span>Sent</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>
											{/* <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                    <path d="M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                    <rect x="32" y="64" width="448" height="80" rx="16" ry="16" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                    <line x1="312" y1="240" x2="200" y2="352" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                    <line x1="312" y1="352" x2="200" y2="240" style="
													fill: none;
													stroke-linecap: round;
													stroke-linejoin: round;
													stroke-width: 32px;
												" />
                  </svg> */}
										</span>
										<span>Trash</span>
									</a>
								</li>
							</ul>
						</nav>
						{/* <!-- Primary menu end --> */}

						{/* <!-- Label start --> */}
						<div className="main-nav__section">
							<div>
								<h2 className="label__title">
									<span>Label</span>
								</h2>
							</div>

							<ul className="label">
								<li className="label__item">
									<a href="#">
										<span className="label__icon label__icon--friends"></span>
										<span>Friends</span>
									</a>
								</li>
								<li className="label__item">
									<a href="#">
										<span className="label__icon label__icon--clients"></span>
										<span>Clients</span>
									</a>
								</li>
								<li className="label__item">
									<a href="#">
										<span className="label__icon label__icon--family"></span>
										<span>Family</span>
									</a>
								</li>
								<li className="label__item">
									<a href="#">
										<span className="label__icon label__icon--work"></span>
										<span>Work</span>
									</a>
								</li>
							</ul>

							<button className="theme" title="Toggle Theme">
								<label htmlFor="night" className="theme__toggle"></label>
							</button>
						</div>
						{/* <!-- Label end --> */}
					</div>
					{/* <!-- Main nav end --> */}

					<div className="messages">
						{/* <!-- Search form start --> */}
						<form action="#" method="get" className="messages__search">
							<input
								placeholder="Search"
								type="text"
								name="q"
								className="messages__search--box"
							/>
							<button
								type="submit"
								title="Search"
								className="messages__search--btn">
								{/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512;" xml:space="preserve">
              <path d="M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153
								c36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z
								 M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2
								c32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z" />
            </svg> */}
							</button>
						</form>
						{/* <!-- Search form end --> */}

						{/* <!-- Messages start--> */}
						<div className="messages__container custom-scrollbar">
							{/* <!-- Message 1 start--> */}
							<div className="message">
								<div className="message__label label__icon--friends"></div>
								<div className="message__header">
									<div className="message__thumb">
										<img
											className="message__thumb--img"
											src="img/users/logique.png"
											alt="Photo of Logique"
										/>
									</div>

									<div className="message__info">
										<h2 className="message__sender">
											<a href="#">logique</a>
										</h2>
										<h3 className="message__subject">
											<a href="#">Lorem ipsum dolor sit.</a>
										</h3>
									</div>

									<p className="message__time">Just now</p>
								</div>

								<p className="message__text">
									<a href="#">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</a>
								</p>
							</div>
							{/* <!-- Message 1 end --> */}

							{/* <!-- Message 2 start--> */}
							<div className="message message__active">
								<div className="message__label label__icon--work"></div>

								<div className="message__header">
									<div className="message__thumb">
										<img
											className="message__thumb--img"
											src="img/users/supacode.jpg"
											alt="Photo of Maverick"
										/>
									</div>

									<div className="message__info">
										<h2 className="message__sender">
											<a href="#">Maverick</a>
										</h2>
										<h3 className="message__subject">
											<a href="#">Open for Entry Level Roles</a>
										</h3>
									</div>

									<p className="message__time">12 min</p>
								</div>

								<p className="message__text">
									<a href="#">
										Architecto, aperiam. Porro fugit repellat assumenda vitae...
									</a>
								</p>
							</div>
							{/* <!-- Message 2 end --> */}

							{/* <!-- Message 3 start--> */}
							<div className="message">
								<div className="message__label label__icon--clients"></div>

								<div className="message__header">
									<div className="message__thumb">
										<img
											className="message__thumb--img"
											src="img/users/alan-walker.jpg"
											alt="Photo of Alan Walker"
										/>
									</div>

									<div className="message__info">
										<h2 className="message__sender">
											<a href="#">Alan Walker</a>
										</h2>
										<h3 className="message__subject">
											<a href="#"> Listened to Diamond Heart yet?</a>
										</h3>
									</div>

									<p className="message__time">33 min</p>
								</div>

								<p className="message__text">
									<a href="#">
										Architecto, aperiam. Porro fugit repellat assumenda vitae...
									</a>
								</p>
							</div>
							{/* <!-- Message 2 end --> */}
						</div>
					</div>
					{/* <!-- Messages end --> */}

					{/* <!-- Message boy start --> */}

					<div className="mail">
						{/* <!-- Mail options start --> */}
						<div className="mail__options">
							<ul className="mail__options--left">
								<li>
									<button title="Forward">
										{/* <svg viewBox="0 0 512 512">
                  <path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style="
												fill: none;
												stroke-linejoin: round;
												stroke-width: 32px;
											" />
                </svg> */}
									</button>
								</li>

								<li title="Like Message">
									<button>
										{/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512;" xml:space="preserve">
                  <path d="M352,56C352,56,352,56,352,56C352,56,352,56,352,56c-0.3,0-0.7,0-1,0c-39.7,0-74.8,21-95,52c-20.2-31-55.3-52-95-52
	c-0.3,0-0.7,0-1,0c0,0,0,0,0,0c0,0,0,0,0,0C98.1,56.6,48,106.9,48,169c0,37,16.2,89.5,47.8,132.7C156,384,256,456,256,456
	s100-72,160.2-154.3C447.8,258.5,464,206,464,169C464,106.9,413.9,56.6,352,56z M393.6,285.2C351,343.5,286.1,397.3,256,420.8
	c-30.1-23.5-95-77.4-137.6-135.7C89.1,245.1,76,198,76,169c0-22.6,8.8-43.8,24.6-59.8c15.9-16,37-24.9,59.6-25.1c0,0,0,0,0.1,0
	c0.2,0,0.4,0,0.6,0l0.2,0c14.3,0,28.5,3.7,41.1,10.8c12.2,6.9,22.8,16.7,30.4,28.5c5.2,7.9,14,12.7,23.5,12.7s18.3-4.8,23.5-12.7
	c7.7-11.8,18.2-21.6,30.4-28.5c12.6-7.1,26.8-10.8,41.1-10.8l0.2,0c0.2,0,0.4,0,0.6,0c0,0,0,0,0.1,0c22.5,0.2,43.7,9.1,59.6,25.1
	c15.9,16,24.6,37.3,24.6,59.8C436,198,422.9,245.1,393.6,285.2z" />
                </svg> */}
									</button>
								</li>

								<li title="Change folder">
									<button>
										{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64,192V120a40,40,0,0,1,40-40h75.89a40,40,0,0,1,22.19,6.72l27.84,18.56A40,40,0,0,0,252.11,112H408a40,40,0,0,1,40,40v40" style="
												fill: none;
												stroke-linecap: round;
												stroke-linejoin: round;
												stroke-width: 32px;
											" />
                  <path d="M479.9,226.55,463.68,392a40,40,0,0,1-39.93,40H88.25a40,40,0,0,1-39.93-40L32.1,226.55A32,32,0,0,1,64,192h384.1A32,32,0,0,1,479.9,226.55Z" style="
												fill: none;
												stroke-linecap: round;
												stroke-linejoin: round;
												stroke-width: 32px;
											" />
                </svg> */}
									</button>
								</li>

								<li title="Delete Message">
									<button>
										{/* <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                  <path d="M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144" style="
												fill: none;
												stroke-linecap: round;
												stroke-linejoin: round;
												stroke-width: 32px;
											" />
                  <rect x="32" y="64" width="448" height="80" rx="16" ry="16" style="
												fill: none;
												stroke-linecap: round;
												stroke-linejoin: round;
												stroke-width: 32px;
											" />
                  <line x1="312" y1="240" x2="200" y2="352" style="
												fill: none;
												stroke-linecap: round;
												stroke-linejoin: round;
												stroke-width: 32px;
											" />
                  <line x1="312" y1="352" x2="200" y2="240" style="
												fill: none;
												stroke-linecap: round;
												stroke-linejoin: round;
												stroke-width: 32px;
											" />
                </svg> */}
									</button>
								</li>
							</ul>

							<ul className="mail__options--right">
								<li>
									<button>
										{/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512;" xml:space="preserve">
                  <path d="M217.9,256L345,129c9.4-9.4,9.4-24.6,0-33.9c-9.4-9.4-24.6-9.3-34,0L167,239c-9.1,9.1-9.3,23.7-0.7,33.1L310.9,417
	c4.7,4.7,10.9,7,17,7c6.1,0,12.3-2.3,17-7c9.4-9.4,9.4-24.6,0-33.9L217.9,256z" />
                </svg> */}
									</button>
								</li>

								<li>
									<button>
										{/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512;" xml:space="preserve">
                  <path d="M294.1,256L167,129c-9.4-9.4-9.4-24.6,0-33.9s24.6-9.3,34,0L345,239c9.1,9.1,9.3,23.7,0.7,33.1L201.1,417
	c-4.7,4.7-10.9,7-17,7c-6.1,0-12.3-2.3-17-7c-9.4-9.4-9.4-24.6,0-33.9L294.1,256z" />
                </svg> */}
									</button>
								</li>
							</ul>
						</div>
						{/* <!-- Mail options end --> */}

						<div className="msg-main__container custom-scrollbar">
							{/* <!-- Main message start --> */}
							<div className="msg-main">
								<div className="msg-main__head">
									<div className="msg-main__head--img">
										<img src="img/users/supacode.jpg" alt="Photo of Maverick" />
									</div>
									<div className="msg-main__head--subject">
										<h2>Open for Entry Level Roles</h2>
										<p className="msg-main__head--time">
											<time>12 minutes ago</time>
										</p>
									</div>
								</div>

								<div className="msg-main__body">
									<p>
										Hi there <br />
										My name is Michael (Maverick) , a self-taught developer
										based in Nigeria. I'm fairly comfortable working on both
										front and backend.
									</p>

									<p>
										I'm currently open for Fullstack Roles. I use Javascript,
										React, Typescript and VueJS on the frontend and
										NodeJS/ExpressJS, MySQL, PostgreSQL, MongoDB on the reverse
										side.
									</p>

									<p>Open to learn new technologies on the job as well.</p>

									<div className="social">
										{/* <!-- Twitter --> */}
										<p>
											<a
												target="_blank"
												className="social__link social__twitter"
												title="Send me an E-mail"
												href="https://twitter.com/supacode">
												{/* <svg className="social__twitter--icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512;" xml:space="preserve">
                      <path d="M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5
											C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1c-80.5-4-151.9-42.6-199.6-101.3
											c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.2,63.3,43.2,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95
											c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5
											c-7.8,0-15.5-0.5-23.1-1.4C62.8,432,113.7,448,168.3,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5
											C462.6,146,479,129,492,109.5z" />
                    </svg> */}
											</a>
										</p>

										{/* <!-- E-mail --> */}
										<p>
											<a
												target="_blank"
												className="social__link social__email"
												title="Send me an E-mail"
												href="mailto:supacode@gmail.com">
												{/* <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" className="social__email--icon" viewBox="0 0 512 512">
                      <path d="M320,254.27c-4.5,51-40.12,80-80.55,80s-67.34-35.82-63.45-80,37.12-80,77.55-80S323.88,210.27,320,254.27Z" style="
														fill: none;
														stroke-linecap: round;
														stroke-linejoin: round;
														stroke-width: 32px;
													" />
                      <path d="M319.77,415.77c-28.56,12-47.28,14.5-79.28,14.5-97.2,0-169-78.8-160.49-176s94.31-176,191.51-176C381,78.27,441.19,150,432.73,246c-6.31,71.67-52.11,92.32-76.09,88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25" style="
														fill: none;
														stroke-linecap: round;
														stroke-linejoin: round;
														stroke-width: 32px;
													" />
                    </svg> */}
											</a>
										</p>

										{/* <!-- Github --> */}
										<p>
											<a
												href="http://github.com/demicoder"
												title="Github"
												target="_blank"
												className="social__link social__github">
												{/* <svg version="1.1" className="social__github--icon" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512;" xml:space="preserve">
                      <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9c1.4,0.3,2.6,0.4,3.8,0.4c8.3,0,11.5-6.1,11.5-11.4
	c0-5.5-0.2-19.9-0.3-39.1c-8.4,1.9-15.9,2.7-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6
	c-19.5-13.7-0.1-14.1,1.4-14.1c0.1,0,0.1,0,0.1,0c22.5,2,34.3,23.8,34.3,23.8c11.2,19.6,26.2,25.1,39.6,25.1c10.5,0,20-3.4,25.6-6
	c2-14.8,7.8-24.9,14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,1.6-0.5,5-0.5
	c8.1,0,26.4,3.1,56.6,24.1c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7c30.2-21,48.5-24.1,56.6-24.1c3.4,0,5,0.5,5,0.5
	c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3c8,7.1,15.2,21.1,15.2,42.5
	c0,30.7-0.3,55.5-0.3,63c0,5.4,3.1,11.5,11.4,11.5c1.2,0,2.6-0.1,4-0.4C415.9,449.2,480,363.1,480,261.7C480,134.9,379.7,32,256,32z
	" />
                    </svg> */}
											</a>
										</p>

										{/* <!-- Linkedin --> */}
										<p>
											<a
												href="http://linkedin.com/in/demicoder"
												title="Linkedin"
												target="_blank"
												className="social__link social__linkedin">
												{/* <svg version="1.1" className="social__linkedin--icon" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512;" xml:space="preserve">
                      <g>
                        <path d="M417.2,64H96.8C79.3,64,64,76.6,64,93.9v321.1c0,17.4,15.3,32.9,32.8,32.9h320.3c17.6,0,30.8-15.6,30.8-32.9V93.9
		C448,76.6,434.7,64,417.2,64z M183,384h-55V213h55V384z M157.4,187H157c-17.6,0-29-13.1-29-29.5c0-16.7,11.7-29.5,29.7-29.5
		c18,0,29,12.7,29.4,29.5C187.1,173.9,175.7,187,157.4,187z M384,384h-55v-93.5c0-22.4-8-37.7-27.9-37.7
		c-15.2,0-24.2,10.3-28.2,20.3c-1.5,3.6-1.9,8.5-1.9,13.5V384h-55V213h55v23.8c8-11.4,20.5-27.8,49.6-27.8
		c36.1,0,63.4,23.8,63.4,75.1V384z" />
                      </g>
                    </svg> */}
											</a>
										</p>

										{/* <!-- Supacode.me --> */}
										<p>
											<a
												href="http://supacode.me"
												target="_blank"
												className="social__link social__supacode"
												title="Supacode.me">
												{/* <svg className="social__supacode--icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <path d="M256,48C141.124,48,48,141.125,48,256c0,114.875,93.124,208,208,208c114.875,0,208-93.125,208-208
	C464,141.125,370.875,48,256,48z M234.451,432.999c-39.464-4.726-75.978-22.392-104.519-50.932
	C96.258,348.393,77.714,303.622,77.714,256c0-42.87,15.036-83.424,42.601-115.659c0.71,8.517,2.463,17.648,2.014,24.175
	c-1.64,23.795-3.988,38.687,9.94,58.762c5.426,7.819,6.759,19.028,9.4,28.078c2.583,8.854,12.902,13.498,20.019,18.953
	c14.359,11.009,28.096,23.805,43.322,33.494c10.049,6.395,16.326,9.576,13.383,21.839c-2.367,9.862-3.028,15.937-8.13,24.723
	c-1.557,2.681,5.877,19.918,8.351,22.392c7.498,7.497,14.938,14.375,23.111,21.125C254.396,404.351,240.494,417.954,234.451,432.999
	z M382.067,382.067c-25.633,25.633-57.699,42.486-92.556,49.081c4.94-12.216,13.736-23.07,21.895-29.362
	c7.097-5.476,15.986-16.009,19.693-24.352c3.704-8.332,8.611-15.555,13.577-23.217c7.065-10.899-17.419-27.336-25.353-30.781
	c-17.854-7.751-31.294-18.21-47.161-29.375c-11.305-7.954-34.257,4.154-47.02-1.417c-17.481-7.633-31.883-20.896-47.078-32.339
	c-15.68-11.809-14.922-25.576-14.922-42.997c12.282,0.453,29.754-3.399,37.908,6.478c2.573,3.117,11.42,17.042,17.342,12.094
	c4.838-4.043-3.585-20.249-5.212-24.059c-5.005-11.715,11.404-16.284,19.803-24.228c10.96-10.364,34.47-26.618,32.612-34.047
	s-23.524-28.477-36.249-25.193c-1.907,0.492-18.697,18.097-21.941,20.859c0.086-5.746,0.172-11.491,0.26-17.237
	c0.055-3.628-6.768-7.352-6.451-9.692c0.8-5.914,17.262-16.647,21.357-21.357c-2.869-1.793-12.659-10.202-15.622-8.968
	c-7.174,2.99-15.276,5.05-22.45,8.039c0-2.488-0.302-4.825-0.662-7.133c14.376-6.365,29.587-10.791,45.31-13.152l14.084,5.66
	l9.944,11.801l9.924,10.233l8.675,2.795l13.779-12.995L282,87.929v-8.339c27.25,3.958,52.984,14.124,75.522,29.8
	c-4.032,0.361-8.463,0.954-13.462,1.59c-2.065-1.22-4.714-1.774-6.965-2.623c6.531,14.042,13.343,27.89,20.264,41.746
	c7.393,14.801,23.793,30.677,26.673,46.301c3.394,18.416,1.039,35.144,2.896,56.811c1.788,20.865,23.524,44.572,23.524,44.572
	s10.037,3.419,18.384,2.228C421.055,330.798,405.103,359.029,382.067,382.067z" />
                    </svg> */}
											</a>
										</p>

										<p>
											<a
												href="http://codepen.io/demicoder"
												title="Codepen"
												target="_blank"
												className="social__link social__codepen">
												{/* <svg version="1.1" id="Layer_1" className="social__codepen--icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g>
                        <path d="M241.239,303.936c-15.322-10.357-30.742-20.569-46.062-30.93c-2.03-1.373-3.43-1.472-5.502-0.029l-38.871,26.154
		C181.966,319.905,244,361.317,244,361.317v-53.786C243.988,306.307,242.447,304.751,241.239,303.936z" />
                        <path d="M195.092,240.666c15.454-10.16,30.851-20.409,46.109-30.86c1.486-1.018,2.775-3.509,2.799-5.334v-51.706
		c0,0-62.033,41.124-93.262,61.942c13.7,9.159,26.671,17.913,39.787,26.443C191.545,241.813,193.921,241.435,195.092,240.666z" />
                        <path d="M269.838,209.354c15.811,10.703,31.683,21.314,47.627,31.815c0.916,0.604,2.92,0.602,3.839,0l39.751-26.467L268,152.484
		v53.35C268.01,207.035,268.805,208.655,269.838,209.354z" />
                        <path d="M258.109,230.369c-1.21-0.802-3.611-0.528-4.743,0.168c-4.817,2.962-9.463,6.203-14.164,9.355
		c-8.248,5.53-25.356,17.023-25.356,17.023l38.842,25.865c1.748,1.157,4.436,1.22,6.26,0.111l39.014-25.993
		C297.963,256.898,263.883,234.197,258.109,230.369z" />
                        <polygon points="141,237.116 141,276.725 170.622,256.887 	" />
                        <path d="M256,32C132.288,32,32,132.288,32,256s100.288,224,224,224s224-100.288,224-224S379.712,32,256,32z M395,297.006
		c0,5.785-2.652,9.868-7.511,13.094c-41.142,27.314-82.251,54.714-123.286,82.188c-5.854,3.918-11.174,3.754-16.984-0.137
		c-40.783-27.314-81.719-54.546-122.625-81.676c-5.11-3.389-7.594-7.557-7.594-13.73v-79.729c0-6.141,2.521-10.332,7.624-13.716
		c40.906-27.13,81.939-54.363,122.724-81.676c5.818-3.896,11.094-4.007,16.938-0.095c41.036,27.474,82.126,54.869,123.261,82.195
		c4.678,3.106,7.453,6.943,7.453,12.66V297.006z" />
                        <path d="M316.247,273.234c-15.054,10.222-30.188,20.326-45.386,30.332c-2.412,1.588-2.888,3.318-2.861,6.189v51.346l93.039-62.004
		l-38.527-25.882C320.167,271.611,318.582,271.648,316.247,273.234z" />
                        <polygon points="370,276.676 370,237.06 340.41,256.933 	" />
                      </g>
                    </svg> */}
											</a>
										</p>
									</div>
								</div>
							</div>
							{/* <!-- Main message end --> */}
						</div>
					</div>

					{/* <!-- Message boy end --> */}
				</div>
			</div>
		</div>
	);
};

export default Chat;
