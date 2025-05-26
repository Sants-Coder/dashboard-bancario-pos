//DashboardLayout.tsx

import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();
  const rotaAtual = router.pathname;



  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => setMenuAberto((prev) => !prev);

  return (
    // Wrapper geral com empilhamento no mobile e colunas no desktop
    <main
      className="flex flex-col lg:flex-row justify-center gap-6 min-h-screen"
      style={{ backgroundColor: "var(--color-fundo-principal)" }}
    >
      {/* Cabeçalho fixo no topo */}
      <header className="w-full h-[80px] bg-[var(--color-azul-escuro)] fixed top-0 left-0 z-50 px-4 flex items-center">
        <div className="flex justify-between items-center w-full">

          {/* Hamburguer (apenas mobile) */}
          <button className="block sm:hidden ml-2" onClick={toggleMenu}>
            <Image
              src="/icons/hamburguer.png"
              alt="Menu"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </button>

          <div className="ml-auto">
            <Image
              src="/icons/avatar.png"
              alt="Avatar do Usuário"
              width={40}
              height={40}
              className="rounded-full cursor-pointer max-w-[32px] sm:max-w-[36px] md:max-w-[40px]"
            />
          </div>
        </div>
      </header>


      <div className="h-[80px] w-full lg:hidden" />

      {/* Menu Hamburguer (Mobile) */}
      {/* Celular 640px- */}
      {menuAberto && (
        <div className="absolute top-[80px] left-0 w-full bg-[var(--color-fundo-principal)] shadow-md px-4 py-3 z-40 sm:hidden flex flex-col gap-2 text-sm">
          {['Início', 'Transferências', 'Investimentos', 'Outros serviços'].map((item) => (
            <button
              key={item}
              className={`text-left border-b pb-2 ${rotaAtual === '/' && item === 'Outros serviços'
                ? 'text-[var(--color-preto)] font-bold'
                : 'text-[var(--color-azul-escuro)] font-semibold'
                }`}
              onClick={() => {
                if (item === 'Outros serviços') router.push('/');
                setMenuAberto(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Menu lateral esquerdo que vira menu horizontal no mobile */}
      {/* tablet: 640px até 1023px */}
      <nav className="hidden sm:flex lg:hidden w-full bg-white p-4 rounded-lg shadow-md">
        <ul className="flex flex-row justify-around text-sm text-center gap-2 w-full">
          {['Início', 'Transferências', 'Investimentos', 'Outros Serviços'].map((item) => (
            <li
              key={item}
              onClick={() => item === 'Outros Serviços' && router.push('/')}
              className={`cursor-pointer border-b border-gray-300 py-2 ${rotaAtual === '/' && item === 'Outros Serviços'
                  ? 'text-[var(--color-preto)] font-bold'
                  : 'text-[var(--color-azul-escuro)] font-semibold'
                }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu LATERAL desktop: 1024px+ */}
      <nav className="hidden lg:block bg-white p-4 rounded-lg shadow-md w-[180px] mt-[114px]">
        <ul className="flex flex-col text-sm text-center gap-2">
          {['Início', 'Transferências', 'Investimentos', 'Outros Serviços'].map((item) => (
            <li
              key={item}
              onClick={() => item === 'Outros Serviços' && router.push('/')}
              className={`cursor-pointer border-b border-gray-300 py-2 ${rotaAtual === '/' && item === 'Outros Serviços'
                  ? 'text-[var(--color-preto)] font-bold'
                  : 'text-[var(--color-azul-escuro)] font-semibold'
                }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>


      {/* Conteúdo central */}
      <section className="flex flex-col items-center justify-start w-full lg:w-[600px] max-w-full px-4 lg:px-0 mt-4 lg:mt-[68px] relative">
        {children}
      </section>

      {/* Menu lateral direito extrato */}
      <aside className="bg-white p-4 rounded-lg shadow-md w-full lg:w-[282px] lg:mt-[114px]">

        <div className="font-bold text-[var(--color-preto)] mb-2">Extrato</div>
        <ul className="text-sm space-y-2">
          <li className="text-[var(--color-azul-escuro)] font-bold">Novembro</li>
          <li className="flex justify-between text-[var(--color-preto)]">
            <span>Depósito</span>
            <span className="text-xs">18/11/2022</span>
          </li>
          <li className="text-[var(--color-preto)] font-bold border-b border-green-300 py-2">R$ 150</li>

          <li className="text-[var(--color-azul-escuro)] font-bold">Novembro</li>
          <li className="flex justify-between text-[var(--color-preto)]">
            <span>Depósito</span>
            <span className="text-xs">21/11/2022</span>
          </li>
          <li className="text-[var(--color-preto)] font-bold border-b border-green-300 py-2">R$ 100</li>

          <li className="text-[var(--color-azul-escuro)] font-bold">Novembro</li>
          <li className="flex justify-between text-[var(--color-preto)]">
            <span>Depósito</span>
            <span className="text-xs">21/11/2022</span>
          </li>
          <li className="text-[var(--color-preto)] font-bold border-b border-green-300 py-2">R$ 50</li>

          <li className="text-[var(--color-azul-escuro)] font-bold">Novembro</li>
          <li className="flex justify-between text-[var(--color-preto)]">
            <span>Transferência</span>
            <span className="text-xs">21/11/2022</span>
          </li>
          <li className="text-black font-bold border-b border-red-300 py-2 text-[var(--color-erro)]">-R$ 500</li>
        </ul>
      </aside>
    </main>
  );
};

export default DashboardLayout;


