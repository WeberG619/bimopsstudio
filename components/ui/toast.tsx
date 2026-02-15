import * as React from "react";
import { cn } from "@/lib/utils";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

export type ToastVariant = "default" | "success" | "error" | "info";

export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
}

const variantStyles: Record<ToastVariant, string> = {
  default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
  success: "bg-white dark:bg-gray-800 border-green-500",
  error: "bg-white dark:bg-gray-800 border-red-500",
  info: "bg-white dark:bg-gray-800 border-electric-blue",
};

const variantIcons: Record<ToastVariant, React.ElementType> = {
  default: Info,
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const variantIconColors: Record<ToastVariant, string> = {
  default: "text-gray-500",
  success: "text-green-500",
  error: "text-red-500",
  info: "text-electric-blue",
};

export function ToastComponent({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: (id: string) => void;
}) {
  const variant = toast.variant || "default";
  const Icon = variantIcons[variant];

  React.useEffect(() => {
    const timer = setTimeout(() => onDismiss(toast.id), 4000);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border p-4 shadow-lg animate-slide-up",
        variantStyles[variant]
      )}
    >
      <Icon className={cn("h-5 w-5 mt-0.5 shrink-0", variantIconColors[variant])} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {toast.title}
        </p>
        {toast.description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {toast.description}
          </p>
        )}
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
