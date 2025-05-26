//ConfirmacaoBloqueioModal.tsx

interface ConfirmacaoBloqueioModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    bloqueado: boolean;
}

export default function ConfirmacaoBloqueioModal({
    isOpen,
    onConfirm,
    onCancel,
    bloqueado,
}: ConfirmacaoBloqueioModalProps) {
    if (!isOpen) return null;

    const textoPrincipal = bloqueado
        ? 'Tem certeza que deseja desbloquear o seu cartão?'
        : 'Tem certeza que deseja bloquear o seu cartão?';

    const textoBotao = bloqueado ? 'Desbloquear' : 'Bloquear';

    {/* Pequeno modal de confirmar bloqueio */}
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gradient-to-b from-[var(--color-branco)] to-[var(--color-gradiente-azul-claro-fim)] rounded-2xl p-10 shadow-lg w-[400px]">
                <p className="text-center text-lg font-semibold text-[var(--color-preto)] mb-6">
                    {textoPrincipal}
                </p>
                <div className="flex justify-around">
                    <button
                        onClick={onCancel}
                        className="px-6 py-2 rounded-xl border-2 border-[var(--color-azul-escuro)] bg-[var(--color-branco)] text-[var(--color-azul-escuro)] font-medium hover:brightness-95 transition"
                    >
                        Manter
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-6 py-2 rounded-xl bg-[var(--color-erro)] text-[var(--color-branco)] font-medium hover:brightness-110 transition"
                    >
                        {textoBotao}
                    </button>
                </div>
            </div>
        </div>
    );
}
