import { useEffect, useRef } from "react";

interface Arc {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

interface GlobeConfig {
  pointSize: number;
  globeColor: string;
  showAtmosphere: boolean;
  atmosphereColor: string;
  atmosphereAltitude: number;
  emissive: string;
  emissiveIntensity: number;
  shininess: number;
  polygonColor: string;
  ambientLight: string;
  directionalLeftLight: string;
  directionalTopLight: string;
  pointLight: string;
  arcTime: number;
  arcLength: number;
  rings: number;
  maxRings: number;
  initialPosition: { lat: number; lng: number };
  autoRotate: boolean;
  autoRotateSpeed: number;
}

interface WorldProps {
  data: Arc[];
  globeConfig: GlobeConfig;
}

export function World({ data, globeConfig }: WorldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rotation = 0;

    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.8;

      // Draw globe
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = globeConfig.globeColor;
      ctx.fill();

      // Draw atmosphere
      if (globeConfig.showAtmosphere) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 1.1, 0, Math.PI * 2);
        ctx.strokeStyle = globeConfig.atmosphereColor;
        ctx.lineWidth = 10;
        ctx.globalAlpha = 0.3;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // Draw arcs
      data.forEach((arc, i) => {
        const progress = (rotation + i * 0.1) % 1;
        ctx.beginPath();
        ctx.strokeStyle = arc.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;
        
        const startAngle = (arc.startLng + rotation * 360) * Math.PI / 180;
        const endAngle = (arc.endLng + rotation * 360) * Math.PI / 180;
        
        const x1 = centerX + Math.cos(startAngle) * radius * 0.7;
        const y1 = centerY + Math.sin(startAngle) * radius * 0.7;
        const x2 = centerX + Math.cos(endAngle) * radius * 0.7;
        const y2 = centerY + Math.sin(endAngle) * radius * 0.7;
        
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(centerX, centerY - radius * arc.arcAlt, x2, y2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      if (globeConfig.autoRotate) {
        rotation += globeConfig.autoRotateSpeed * 0.001;
      }

      requestAnimationFrame(drawGlobe);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    drawGlobe();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [data, globeConfig]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
