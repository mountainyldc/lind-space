'use client';

import { useEffect } from 'react';

export default function AIPage() {
  useEffect(() => {
    window.location.href = '/ai/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1d1d1f] mx-auto mb-4"></div>
        <p className="text-[#1d1d1f]/60">正在加载 Lind-AI 医疗助手...</p>
      </div>
    </div>
  );
}