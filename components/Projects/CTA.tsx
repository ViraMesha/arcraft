import StyledLink from "../ui/StyledLink";

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
              <StyledLink href={link} background="bg-[#eb2576]">
                {label}
              </StyledLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
