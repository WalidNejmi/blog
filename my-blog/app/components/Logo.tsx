import Image from "next/image";

export default function Logo() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/homebase-logo.png"
        width={200}
        height={200}
        alt="Homebase Logo"
        priority={true}
      />
    </section>
  );
};
