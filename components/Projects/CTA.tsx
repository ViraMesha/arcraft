import Link from "next/link";

type CTAProps = {
  className: string;
  title: string;
  description: string;
  label: string;
  link: string;
};

const CTA = ({ className, title, description, label, link }: CTAProps) => {
  return (
    <section className={`${className}`}>
      <div className="wrapper">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl items-center mx-auto text-center">
            <h2 className="text-white text-6xl font-medium mb-8">{title}</h2>
            <p className="text-white text-lg opacity-60 leading-relaxed mb-8">
              {description}
            </p>
            <p>
              <Link
                href={link}
                className="transition inline-block text-[11.5px] tracking-[2px] font-bold uppercase bg-[#eb2576] py-4 px-5 text-white hover:bg-white hover:text-blue-600 hover:shadow-2xl"
              >
                {label}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
