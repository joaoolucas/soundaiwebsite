import ParticleBackground from './components/particle-background'
import SonarWaves from './components/sonar-waves'
import Logo from './components/logo'
import PianoSound from './components/piano-sound'
import SocialLinks from './components/social-links'
import ClickEffect from './components/click-effect'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden">
      <ParticleBackground />
      <SonarWaves />
      <PianoSound />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center pointer-events-auto px-4">
          <Logo />
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-2 text-center">
            <span className="text-white">Nyx</span>
            <span className="text-orange-500">Sound</span>
          </h2>
          <h3 className="text-lg md:text-xl lg:text-2xl text-white text-center mt-2 mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
            Empowering the future of audio technology
          </h3>
          <SocialLinks />
        </div>
      </div>
      <ClickEffect />
    </main>
  )
}

