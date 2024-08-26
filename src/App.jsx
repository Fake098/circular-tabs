import "./index.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function App() {
	return (
		<>
			<Canvas flat camera={{ fov: 30 }}>
				<OrbitControls />
				<ambientLight />
				<Scene />
				<EffectComposer>
					<Bloom
						mipmapBlur
						intensity={12.0}
						luminanceThreshold={0}
						luminanceSmoothing={0}
					/>
				</EffectComposer>
			</Canvas>
		</>
	);
}

export default App;
