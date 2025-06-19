// src/components/Contacts/Captcha.jsx
import React, { useEffect, useRef } from 'react';

const Captcha = ({ code, regenerate }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Фон
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Шум
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * 150, Math.random() * 50);
      ctx.lineTo(Math.random() * 150, Math.random() * 50);
      ctx.strokeStyle = '#cbd5e1';
      ctx.stroke();
    }

    // Код
    ctx.font = '28px Arial';
    ctx.fillStyle = '#111827';
    ctx.setTransform(
      1 + Math.random() * 0.1,
      Math.random() * 0.1,
      Math.random() * 0.1,
      1,
      Math.random() * 2,
      Math.random() * 2
    );
    ctx.fillText(code, 20, 35);

    ctx.setTransform(1, 0, 0, 1, 0, 0); // Сброс
  }, [code]);

  return (
    <div className="flex items-center gap-4">
      <canvas ref={canvasRef} width="150" height="50" className="border rounded" />
      <button
        type="button"
        onClick={regenerate}
        className="text-sm text-blue-600 hover:underline"
      >
        Обновить
      </button>
    </div>
  );
};

export default Captcha;
