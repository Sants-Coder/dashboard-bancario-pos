//CardsModal.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import ModalCartoes from './ModalCartoes';


const CardsModal = () => {
  const [mostrarSaldo, setMostrarSaldo] = useState(true);
  const toggleSaldo = () => setMostrarSaldo((prev) => !prev);

  const [modalAberto, setModalAberto] = useState(false);
  const [tipoModal, setTipoModal] = useState<'configurar' | 'bloquear' | null>(null);
  const [cartaoSelecionado, setCartaoSelecionado] = useState<'fisico' | 'digital' | null>(null);

  const abrirModal = (tipo: 'configurar' | 'bloquear', cartao: 'fisico' | 'digital') => {
    setTipoModal(tipo);
    setCartaoSelecionado(cartao);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setTipoModal(null);
    setCartaoSelecionado(null);
  };

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

      {/* Modal cinza */}
      <div className="bg-[var(--color-cinza-escuro)] p-4 rounded-xl shadow -mt-[12px]">
        <h3 className="text-[var(--color-preto)] text-base font-bold mb-4">
          Meus cartões
        </h3>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6">

          {/* Cartão Físico */}
          <div className="fflex flex-col items-center w-full md:w-[220px]">
            <p className="text-[var(--color-preto)] text-center mb-1">Cartão físico</p>

            <div className="w-full h-[147px] rounded-lg bg-[var(--color-azul-escuro)] p-3 flex flex-col justify-between text-[var(--color-branco)] font-sans italic">
              <div>
                <p className="text-base font-bold">Byte</p>
                <p className="text-[12px] not-italic">Platinum</p>
              </div>
              <div>
                <p className="text-[12px] not-italic">Joana Fonseca Gomes</p>
                <p className="text-lg tracking-wider">*********</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1 mt-2 items-center">
              <button
                onClick={() => abrirModal('configurar', 'fisico')}
                className="w-[110px] bg-[var(--color-azul-claro)] hover:bg-[var(--color-azul-escuro)] text-[var(--color-branco)] text-sm py-1 px-3 rounded-full"
              >
                Configurar
              </button>

              <button
                onClick={() => abrirModal('bloquear', 'fisico')}
                className="w-[160px] text-[var(--color-erro)] border border-[var(--color-vermelho)] text-sm py-1 px-3 rounded-full hover:bg-[#ffe6e6]"
              >
                Bloqueio/Desbloqueio
              </button>
            </div>

            <p className="text-[var(--color-preto)] text-xs mt-1">Função: Débito/Crédito</p>
          </div>

          {/* Cartão Digital */}
          <div className="flex flex-col items-center w-full md:w-[220px]">
            <p className="text-[var(--color-preto)] text-center mb-1">Cartão digital</p>

            <div className="w-full h-[147px] rounded-lg bg-[#999999] p-3 flex flex-col justify-between text-[var(--color-branco)] font-sans italic">
              <div>
                <p className="text-base font-bold">Byte</p>
                <p className="text-[12px] not-italic">Platinum</p>
              </div>
              <div>
                <p className="text-[12px] not-italic">Joana Fonseca Gomes</p>
                <p className="text-lg tracking-wider">*********</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1 mt-2 items-center">
              <button
                onClick={() => abrirModal('configurar', 'digital')}
                className="w-[110px] bg-[var(--color-azul-claro)] hover:bg-[var(--color-azul-escuro)] text-[var(--color-branco)] text-sm py-1 px-3 rounded-full"
              >
                Configurar
              </button>

              <button
                onClick={() => abrirModal('bloquear', 'digital')}
                className="w-[160px] text-[var(--color-erro)] border border-[var(--color-vermelho)] text-sm py-1 px-3 rounded-full hover:bg-[#ffe6e6]"
              >
                Bloqueio/Desbloqueio
              </button>
            </div>

            <p className="text-[var(--color-preto)] text-xs mt-1">Função: Débito</p>
          </div>
        </div>
      </div>

      {/* Modal Cartões (backdrop-blur tela inteira) */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <ModalCartoes tipo={tipoModal} cartao={cartaoSelecionado} onClose={fecharModal} />
        </div>
      )}
    </div>
  );
};

export default CardsModal;
