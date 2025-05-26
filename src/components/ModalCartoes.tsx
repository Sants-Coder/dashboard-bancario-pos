//ModalCartoes.tsx

import React, { useState } from 'react';
import ConfirmacaoBloqueioModal from './ConfirmacaoBloqueioModal';

interface ModalCartoesProps {
    tipo: 'configurar' | 'bloquear' | null;
    cartao: 'fisico' | 'digital' | null;
    onClose: () => void;
}

const ModalCartoes: React.FC<ModalCartoesProps> = ({ tipo, cartao, onClose }) => {
    const [opcoes, setOpcoes] = useState({
        nfc: false,
        internacionais: false,
        debito: false,
        credito: true,
    });

    const [bloqueado, setBloqueado] = useState(false);
    React.useEffect(() => {
        console.log("bloqueado:", bloqueado);
    }, [bloqueado]);
    const [showConfirmacao, setShowConfirmacao] = useState(false);

    const toggleOpcao = (campo: keyof typeof opcoes) => {
        setOpcoes((prev) => ({ ...prev, [campo]: !prev[campo] }));
    };

    const handleConfirmBloqueio = () => {
        setBloqueado(!bloqueado);
        setShowConfirmacao(false);
        console.log(`Cartão ${!bloqueado ? 'bloqueado' : 'desbloqueado'}.`);
    };

    const renderCartao = () => {
        const cor = cartao === 'fisico' ? 'bg-[var(--color-azul-escuro)]' : 'bg-[#999999]';
        return (
            <div className={`w-[280px] h-[147px] rounded-lg ${cor} p-3 flex flex-col justify-between text-[var(--color-branco)] text-left font-sans italic mx-auto mb-4`}>
                <div>
                    <p className="font-bold">Byte</p>
                    <p className="text-[12px] not-italic">Platinum</p>
                </div>
                <div>
                    <p className="text-[12px] not-italic">Joana Fonseca Gomes</p>
                    <p className="text-lg tracking-wider">*********</p>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="bg-[var(--color-fundo-principal)] w-full h-full sm:max-w-[665px] sm:h-[670px] p-6 sm:rounded-xl shadow-lg relative flex flex-col overflow-y-auto">
                <div className="bg-[var(--color-azul-escuro)] text-[var(--color-branco)] text-center text-xl font-bold py-4 rounded-md">
                    {tipo === 'configurar' ? 'Configurar Cartão' : bloqueado ? 'Desbloquear Cartão' : 'Bloquear Cartão'}
                </div>

                <button onClick={onClose} className="absolute top-6 right-9 text-[var(--color-branco)] text-xl">x</button>

                <div className="mt-6 text-center">
                    <p className="text-[var(--color-preto)] text-sm font-medium mb-2">
                        {cartao === 'fisico' ? 'Cartão físico' : 'Cartão digital'}
                    </p>

                    {renderCartao()}

                    {tipo === 'configurar' && (
                        <>
                            <p className="text-[var(--color-preto)] text-base font-bold mb-4">Personalize as funções do seu cartão.</p>

                            <div className="flex flex-col gap-4 items-start ml-[110px]">
                                {[
                                    { chave: 'nfc', label: 'Ativar/Desativar aproximação (NFC)' },
                                    { chave: 'internacionais', label: 'Ativar/Desativar compras internacionais' },
                                    { chave: 'debito', label: 'Ativar/Desativar função débito' },
                                    { chave: 'credito', label: 'Ativar/Desativar função crédito' },
                                ].map(({ chave, label }) => (
                                    <label key={chave} className="flex items-center gap-3 text-sm text-[var(--color-preto)]">
                                        <input
                                            type="checkbox"
                                            checked={opcoes[chave as keyof typeof opcoes]}
                                            onChange={() => toggleOpcao(chave as keyof typeof opcoes)}
                                            className="w-5 h-5 text-[var(--color-azul-escuro)] border rounded"
                                        />
                                        {label}
                                    </label>
                                ))}
                            </div>

                            <div className="mt-12 flex justify-center gap-6">
                                <button
                                    onClick={onClose}
                                    className="w-[180px] py-2 border-2 border-[var(--color-azul-escuro)] text-[var(--color-azul-escuro)] font-semibold rounded-full hover:bg-[#e9f1ff]"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={onClose}
                                    className="w-[180px] py-2 bg-[var(--color-azul-claro)] text-[var(--color-branco)] font-semibold rounded-full hover:bg-[var(--color-azul-escuro)]"
                                >
                                    Salvar Configurações
                                </button>
                            </div>
                        </>
                    )}

                    {tipo === 'bloquear' && (
                        <div className="text-center mt-4 flex flex-col items-center">
                            <p className="text-[var(--color-preto)] text-base font-bold mt-2 mb-1">
                                Gerencie seu cartão com liberdade.
                            </p>
                            <p className="text-[var(--color-preto)] text-base font-bold mb-3">
                                {bloqueado
                                    ? 'Você pode desbloqueá-lo para voltar a usar.'
                                    : 'Bloqueie temporariamente ou desbloqueie quando quiser.'}
                            </p>
                            <p className="text-sm text-[var(--color-preto)] mb-10">
                                {bloqueado
                                    ? 'Clique abaixo para reativar seu cartão.'
                                    : 'Você poderá desbloqueá-lo ou solicitar um novo depois.'}
                            </p>

                            <div className="flex justify-center gap-6 mb-10">
                                <button
                                    onClick={onClose}
                                    className="w-[180px] py-2 border-2 border-[var(--color-azul-escuro)] text-[var(--color-azul-escuro)] font-semibold rounded-full hover:bg-[#e9f1ff]"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => setShowConfirmacao(true)}
                                    className={`w-[180px] py-2 border-2 font-semibold rounded-full ${bloqueado
                                        ? 'border-[var(--color-azul-escuro)] text-[var(--color-azul-escuro)] hover:bg-[#e9f1ff]'
                                        : 'border-[var(--color-erro)] text-[var(--color-erro)] hover:bg-[#ffe6e6]'
                                        }`}
                                >
                                    {bloqueado ? 'Desbloquear' : 'Bloquear'}
                                </button>
                            </div>

                            <p className="text-xs text-[var(--color-preto)] font-medium">
                                {bloqueado
                                    ? 'O cartão está inativo. Desbloqueie para voltar a usá-lo.'
                                    : 'Atenção: Cartões bloqueados não poderão ser usados para compras até o desbloqueio.'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <ConfirmacaoBloqueioModal
                isOpen={showConfirmacao}
                onConfirm={handleConfirmBloqueio}
                onCancel={() => setShowConfirmacao(false)}
                bloqueado={bloqueado}
            />
        </>
    );
};

export default ModalCartoes;



