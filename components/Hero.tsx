import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Mouse tracking
    const mouse = {
      x: -1000, // Start off screen
      y: -1000,
      radius: 200 // Radius of interaction
    };

    const handleMouseMove = (event: MouseEvent) => {
       const rect = canvas.getBoundingClientRect();
       mouse.x = event.clientX - rect.left;
       mouse.y = event.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handling
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Standard movement
        if (this.x > canvas!.width || this.x < 0) {
           this.directionX = -this.directionX;
        }
        if (this.y > canvas!.height || this.y < 0) {
           this.directionY = -this.directionY;
        }

        // Mouse interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
           // Gentle attraction/float around cursor
           const forceDirectionX = dx / distance;
           const forceDirectionY = dy / distance;
           const force = (mouse.radius - distance) / mouse.radius;
           
           // Move towards mouse slightly faster when close
           this.x += forceDirectionX * force * 2;
           this.y += forceDirectionY * force * 2;
        } else {
           // Default movement
           this.x += this.directionX;
           this.y += this.directionY;
        }

        this.draw();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      // Brand colors + white, with transparency
      const colors = ['rgba(50, 87, 184, 0.7)', 'rgba(255, 140, 66, 0.7)', 'rgba(255, 255, 255, 0.3)'];
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 1) - 0.5;
        let directionY = (Math.random() * 1) - 0.5;
        let color = colors[Math.floor(Math.random() * colors.length)];

        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
    };

    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    animate();

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white min-h-screen flex items-center">
      
      {/* Interactive Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-transparent to-slate-900/80 pointer-events-none z-0"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
                Fast. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Reliable.</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-200">Local.</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow">
                Revolutionizing delivery for Daystar University & Athi River. From books to burgers, we deliver joy in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://www.apple.com/app-store/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg border border-white/20"
                >
                  <i className="fa-brands fa-apple text-3xl"></i>
                  <div className="text-left leading-tight">
                    <span className="block text-xs font-light opacity-80">Download on the</span>
                    <span className="block text-sm font-semibold">App Store</span>
                  </div>
                </a>
                
                <a 
                  href="https://play.google.com/store" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  <i className="fa-brands fa-google-play text-2xl"></i>
                  <div className="text-left leading-tight">
                    <span className="block text-xs font-light opacity-80">GET IT ON</span>
                    <span className="block text-sm font-semibold">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 border-8 border-white/10 backdrop-blur-md">
                  <img 
                    src="assets/hero-jumping.png" 
                    alt="Happy student jumping" 
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
               </div>
               
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce text-gray-900">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                     <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                     <p className="text-xs text-gray-500">Delivery Status</p>
                     <p className="font-bold text-gray-900">Arriving in 5m</p>
                  </div>
               </div>
            </div>

          </div>
      </div>
    </section>
  );
};

export default Hero;