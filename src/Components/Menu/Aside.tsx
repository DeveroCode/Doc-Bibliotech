import AsideLink from "./AsideLink"
export default function Aside() {
  return (
    <aside className="rounded-md w-[248px]">
        <nav className="w-full">
        <AsideLink
          title="Iniciando!"
          items={[
            { label: "Guías de instalación", href: "/start" }
          ]}
        />
        <AsideLink
          title="Iniciando!"
          items={[
            { label: "Guías de instalación", href: "/start" }
          ]}
        />
        </nav>
    </aside>
  )
}
