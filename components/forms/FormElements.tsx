export function FormItemWrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col gap-2">{children}</div>;
}
export function FormItemDescription({ children }: { children: string }) {
  return <p className="text-xs text-slate-500">{children}</p>;
}
export function FormItemError({ children }: { children?: string }) {
  return <p className="text-xs text-red-300">{children}</p>;
}
export function FormItemLabel({ children }: { children: string }) {
  return <label>{children}</label>;
}
