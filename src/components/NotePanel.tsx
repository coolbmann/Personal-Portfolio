import { ReactNode } from "react";
import { Info, AlertTriangle, Lightbulb, StickyNote } from "lucide-react";

type Variant = "info" | "note" | "warning" | "tip";

const variantStyles: Record<
  Variant,
  { border: string; bg: string; iconClass: string; label: string }
> = {
  info: {
    border: "border-l-custom-orange",
    bg: "bg-orange-50",
    iconClass: "text-custom-orange",
    label: "Info",
  },
  note: {
    border: "border-l-custom-orange",
    bg: "bg-orange-50",
    iconClass: "text-custom-orange",
    label: "Note",
  },
  warning: {
    border: "border-l-amber-400",
    bg: "bg-amber-50",
    iconClass: "text-amber-400",
    label: "Warning",
  },
  tip: {
    border: "border-l-green-400",
    bg: "bg-green-50",
    iconClass: "text-green-400",
    label: "Tip",
  },
};

const icons: Record<Variant, ReactNode> = {
  info: <Info size={14} />,
  note: <StickyNote size={14} />,
  warning: <AlertTriangle size={14} />,
  tip: <Lightbulb size={14} />,
};

interface NotePanelProps {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}

const NotePanel = ({ variant = "note", title, children }: NotePanelProps) => {
  const { border, bg, iconClass, label } = variantStyles[variant];

  return (
    <div
      className={`flex gap-3 border-l-4 ${border} ${bg} px-4 py-3 rounded-r`}
    >
      <div className={`mt-0.5 shrink-0 ${iconClass}`}>{icons[variant]}</div>
      <div className="flex flex-col gap-1">
        <div className="text-xs font-semibold tracking-wide-custom uppercase">
          {title ?? label}
        </div>
        <div className="text-xs font-light tracking-wide-custom leading-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NotePanel;
