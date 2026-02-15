import { ToastComponent } from "./toast";
import { useToast } from "@/lib/useToast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm">
      {toasts.map((toast) => (
        <ToastComponent key={toast.id} toast={toast} onDismiss={dismiss} />
      ))}
    </div>
  );
}
