import { GlassHeader } from "@/components/layout/GlassHeader";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlassHeader />
      <main className="flex-1">{children}</main>
    </>
  );
}
