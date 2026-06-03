/** Преміальний mockup ноутбука + телефону (зображення) */
export default function DeviceShowcase() {
  return (
    <div className="relative flex w-full items-center justify-center lg:justify-end">
      <img
        src="/hero-devices.png"
        alt="Ноутбук та смартфон з преміальним сайтом"
        width={1200}
        height={900}
        draggable={false}
        className="h-auto w-full max-w-[520px] object-contain object-center sm:max-w-[580px] lg:max-w-full lg:w-[min(100%,720px)] lg:object-right xl:w-[min(100%,800px)] pointer-events-none select-none"
      />
    </div>
  )
}
