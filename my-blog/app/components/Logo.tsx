import Image from "next/image";

export default function Logo() {
  return (
    <section>
      <Image
        src="/images/homebase-logo.png"
        width={200}
        height={150}
        alt="Homebase Logo"
        priority={true}
        onClick={() => window.location.href = "/"}
        className="cursor-pointer"
      />
    </section>
  );
};
