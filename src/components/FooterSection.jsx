const FooterSection = ({ title, items, icon }) => {
  return (
    <div className="px-3 mb-8">
      {title && (
        <h1 className="cursor-pointer font-bold text-[22px]">{title}</h1>
      )}
      {items.map((item, index) => (
        <span key={index} className="block py-2 cursor-pointer text-[16px]">
          {icon ? icon : " "} {item}
        </span>
      ))}
    </div>
  );
};

export default FooterSection;
