//ServicesModal.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ServicesModal = () => {
  const [mostrarSaldo, setMostrarSaldo] = useState(true);
  const router = useRouter();

  const toggleSaldo = () => setMostrarSaldo((prev) => !prev);

  const servicos = [
    { nome: 'Empréstimos', icone: 'emprestimo.png' },
    { nome: 'Meus Cartões', icone: 'cartoes.png', navegar: true },
    { nome: 'Doações', icone: 'doacoes.png' },
    { nome: 'Pix', icone: 'pix.png' },
    { nome: 'Seguros', icone: 'seguros.png' },
    { nome: 'Créditos', icone: 'creditos.png' },
  ];

  return (
    <div className="flex flex-col space-y-6 w-full max-w-[600px] mx-auto">

      {/* Modal Azul */}
      <div className="bg-[var(--color-azul-escuro)] rounded-xl p-6 shadow w-full min-h-[300px] flex flex-col justify-between mt-4 sm:mt-12">
        <div className="space-y-1">
          <h2 className="text-[var(--color-branco)] text-xl font-bold">Olá, Joana! :)</h2>
          <p className="text-[var(--color-branco)] text-sm">Quinta-feira, 08/09/2024</p>
        </div>

        <div className="self-end text-right">
          <p className="text-[var(--color-branco)] text-center font-medium border-b border-[var(--color-branco)] inline-block pb-1 mb-1">
            Saldo
          </p>
          <p className="text-[var(--color-branco)] text-xs mb-2">Conta Corrente</p>
          <div className="flex items-center justify-end space-x-2">
            <span className="text-[var(--color-branco)] text-2xl font-semibold">
              {mostrarSaldo ? 'R$ 2.500,00' : '*********'}
            </span>
            <button onClick={toggleSaldo}>
              <Image
                src={`/icons/${mostrarSaldo ? 'olho' : 'olhofechado'}.png`}
                alt="Mostrar/ocultar saldo"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Serviços */}
      <div className="bg-[var(--color-fundo-principal)] rounded-xl p-6 shadow w-full">
        <h3 className="text-[var(--color-preto)] text-lg font-semibold mb-4">
          Confira outros serviços disponíveis:
        </h3>

        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicos.map((servico, index) => (
            <button
              key={index}
              onClick={() => servico.navegar && router.push('/cartoes')}
              className="flex flex-col items-center bg-[var(--color-branco)] p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
            >
              <Image
                src={`/icons/${servico.icone}`}
                alt={servico.nome}
                width={50}
                height={50}
              />
              <span className="mt-2 text-sm text-[var(--color-preto)] text-center font-medium">
                {servico.nome}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;


