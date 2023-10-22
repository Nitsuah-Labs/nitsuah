import React from "react";
import "../styles/home.css";
import HomeBar from "../components/Homebar";
import HomeFooter from "../components/Footer";
import darkmoon from "../../assets/darkmoon.gif";
import nitsuah from "../../assets/NITSUAH.png";
import cat from "../../assets/cat.png";
import dev from "../../assets/dao.png";
import buildspace from "../../assets/buildspace.png";
import arf from "../../assets/arf.gif";
import arfg from "../../assets/arf-guild.gif";
import aiarf from "../../assets/arf-ai.png";
import blendeth from "../../assets/blend-eth.gif";
import aboutme from "../../assets/aboutme.jpg";
import hedge from "../../assets/hedge-ref.png";
import ngx from "../../assets/ng-game.png";
import nwb from "../../assets/nights+weekends.png";
import web3intro from "../../assets/web3-intro.png";
import web3mint from "../../assets/web3-mint.png";
import polyens from "../../assets/ens.gif";
import solana from "../../assets/solana-logo.png";
import solPay from "../../assets/sol-store.gif";
import solApp from "../../assets/sol-dapp.gif";
import spline from "../../assets/spline.gif";
import { Button, Box, Grid } from "@mui/material";

const Projects = () => {

	const renderProjsContainer = () => (
		<div className="projects-container">
			<table>
				<tr>
					<th scope="col"><h2>DEPLOYS</h2></th>
					<td scope="row">
						<div className="projects-title"><h3>PERSONAL</h3></div>
						<div className="projects-card bg-blur">
							<div className="projects-subtitle"><h4>GitHub</h4></div>
							<img alt="blue pixelated cat with a red hat" className="proj-logo" src={cat} onClick={() => window.open("https://github.com/nitsuah")} />
						</div>
					</td>
					<td scope="row">
						<div className="projects-title"><h3>LABS</h3></div>
						<div className="projects-card bg-blur">
							<div className="projects-subtitle"><h4>/labs</h4></div>
							<img alt="nitsuah concepts of proof logo" className="proj-logo" src={nitsuah} onClick={() => window.open("/labs/", "_self")} />
						</div>
					</td>
					<td scope="row">
						<div className="projects-title"><h3>SOLANA</h3></div>
						<div className="projects-card bg-blur">
							<div className="projects-subtitle"><h4>darkmoon.dev</h4></div>
							<img alt="darkmoon horizon" className="proj-logo" src={darkmoon} onClick={() => window.open("https://darkmoon.dev")} />
						</div>
					</td>
					<td scope="row">
						<div className="projects-title"><h3>3DX</h3></div>
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={spline} onClick={() => window.open("/", "_self")} />
						</div>
					</td>
					<td scope="row">
						<div className="projects-title"><h3>NEXTGEN</h3></div>
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={ngx} onClick={() => window.open("https://nft.darkmoon.dev/play")} />
						</div>
					</td>
				</tr>
				<tr>
					<th scope="col"><h2>BUILDSPACE.so</h2></th>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={buildspace} onClick={() => window.open("https://buildspace.so/@nitsuah")} />
							<div className="projects-subtitle">Profile</div>
						</div>
						<button className="eth-wallet" onClick={() => window.open("https://buildspace.so/join")}>Join me!</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={polyens} onClick={() => window.open("https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/18179")} />
						</div>
						<button className="eth-wallet" onClick={() => window.open("https://buildspace.so/p/build-polygon-ens")}>ENS NFT</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={solPay} onClick={() => window.open("https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/19051")} />
						</div>
						<button className="eth-wallet" onClick={() => window.open("https://buildspace.so/p/ship-solana-nft-collection")}>NFT Store</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={aboutme} onClick={() => window.open("https://spline.design/")} />
						</div>
						<button className="eth-wallet" onClick={() => window.open("https://spline.design/", "_self")}>Spline3D</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="game dev" className="proj-logo" src={hedge} filter={"invert(1)"} />
						</div>
						<button className="red-wallet" onClick={() => window.open("https://buildspace.so/p/create-turn-based-nft-game")}>NFT Game</button>
					</td>
				</tr>
				<tr>
					<th scope="row"></th>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="other" className="proj-logo" src={nwb} onClick={() => window.open("https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/22083")} />
						</div>
						<button className="eth-wallet" onClick={() => window.open("https://buildspace.so/nw")}>N+W S1</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={web3mint} onClick={() => window.open("https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/18857")} />
						</div>
						<button className="eth-wallet" onClick={() => window.open("https://buildspace.so/p/mint-nft-collection")}>ETH dApp</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={solApp} onClick={() => window.open("https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/19995")} />
						</div>
						<button className="eth-wallet" onClick={() => window.open("https://buildspace.so/p/build-solana-web3-app")}>SOL dApp</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={blendeth} onClick={() => window.open("https://opensea.io/assets/ethereum/0xc9154424b823b10579895ccbe442d41b9abd96ed/60508307908081726032856631071720531552206552958895219492912716481842215124994")} />
						</div>
						<button className="eth-wallet" onClick={() => window.open("https://www.youtube.com/watch?v=nIoXOplUvAw")}>Blender</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={arf} onClick={() => window.open("https://buildspace.so/@nitsuah")} />
						</div>
						<button className="red-wallet" onClick={() => window.open("https://buildspace.so/p/solana-core")}>AutoGPT</button>
					</td>
				</tr>
				<tr>
					<th scope="row"></th>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="dev dao" className="proj-logo" src={dev} />
						</div>
						<button className="red-wallet" onClick={() => window.open("https://buildspace.so/p/build-dao-with-javascript")}>DevDAO</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={web3intro} onClick={() => window.open("https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/18457")} />
						</div>
						<button className="eth-wallet" onClick={() => window.open("https://buildspace.so/p/build-solidity-web3-app")}>ETH Core</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={solana} filter={"invert(1)"} />
						</div>
						<button className="red-wallet" onClick={() => window.open("https://buildspace.so/p/solana-core")}>SOL Core</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={arfg} onClick={() => window.open("https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/60508307908081726032856631071720531552206552958895219492912716482941726752788")} />
						</div>
						<button className="eth-wallet" onClick={() => window.open("")}>Paint3D</button>
					</td>
					<td scope="row">
						<div className="projects-card bg-blur">
							<img alt="" className="proj-logo" src={aiarf} onClick={() => window.open("https://buildspace.so/p/build-ai-avatars")} />
						</div>
						<button className="red-wallet" onClick={() => window.open("https://buildspace.so/p/build-ai-avatars")}>ImaGen</button>
					</td>
				</tr>
			</table>
		</div>
	);

	return (
		<div className="App">
			<div className="container">
				<div className="content-container">
					<div className="header">
						<HomeBar />
					</div>
					<div className="projects-container">
						{renderProjsContainer()}
					</div>
					<div className="footer-container">
						<HomeFooter />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;