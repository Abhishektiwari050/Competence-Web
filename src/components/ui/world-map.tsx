import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Dot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

interface WorldMapProps {
  dots?: Dot[];
}

export default function WorldMap({ dots = [] }: WorldMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const latLngToPixel = (lat: number, lng: number) => {
      const x = ((lng + 180) / 360) * width;
      const y = ((90 - lat) / 180) * height;
      return { x, y };
    };

    ctx.clearRect(0, 0, width, height);

    dots.forEach((dot) => {
      const start = latLngToPixel(dot.start.lat, dot.start.lng);
      const end = latLngToPixel(dot.end.lat, dot.end.lng);

      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.quadraticCurveTo(
        (start.x + end.x) / 2,
        Math.min(start.y, end.y) - 50,
        end.x,
        end.y
      );
      ctx.strokeStyle = "rgba(59, 130, 246, 0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(start.x, start.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#3b82f6";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(end.x, end.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#3b82f6";
      ctx.fill();
    });
  }, [dots]);

  return (
    <div className="w-full h-[500px] relative">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
