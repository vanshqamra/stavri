interface Props {
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
}

export const ProductCategoryCard = ({ title, description, active, onClick }: Props) => (
  <button
    onClick={onClick}
    className={`w-full rounded-full border px-6 py-3 text-left text-sm font-semibold tracking-wide transition ${
      active
        ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-sm'
        : 'border-transparent bg-slate-100/70 text-slate-600 hover:border-slate-300'
    }`}
  >
    <span className="block text-xs uppercase tracking-[0.3em] text-slate-500">{description}</span>
    <span className="block text-base text-slate-900">{title}</span>
  </button>
);
