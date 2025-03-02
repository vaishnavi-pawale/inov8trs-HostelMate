import React from "react";

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>{children}</div>;
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
//cardheader component
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`flex items-center p-4 ${className}`}>{children}</div>;
};

//cardfooter component

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

//cardbody component

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

//cardtitle component

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
};

//cardsubtitle component

export const CardSubtitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <p className={`text-sm font-semibold ${className}`}>{children}</p>;
};

//cardlink component

export const CardLink: React.FC<{ children: React.ReactNode; className?: string; href: string; target?: string }> = ({ children, className, href, target }) => {
  return (
    <a href={href} target={target} className={`text-blue-500 hover:text-blue-700 ${className}`}>
      {children}
    </a>
  );
};

//cardimage component

export const CardImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`w-full h-64 object-cover ${className}`} />;
};

//cardicon component

export const CardIcon: React.FC<{ icon: React.ReactNode; className?: string }> = ({ icon, className }) => {
  return <div className={`flex items-center justify-center w-8 h-8 rounded-full ${className}`}>{icon}</div>;
};

//carddivider component

export const CardDivider: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={`border-t border-gray-200 ${className}`} />;
};

//cardtext component

export const CardText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <p className={`text-sm ${className}`}>{children}</p>;
};

//cardbadge component

export const CardBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-gray-700 bg-gray-100 ${className}`}>
    {children}
  </span>;
};

//cardbutton component

export const CardButton: React.FC<{ children: React.ReactNode; className?: string; onClick: () => void }> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md ${className}`}>
      {children}
    </button>
  );
};

//cardaction component

export const CardAction: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`flex items-center justify-end ${className}`}>{children}</div>;
};

//cardgroup component

export const CardGroup: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`flex flex-wrap ${className}`}>{children}</div>;
};

//cardrow component

export const CardRow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`flex items-center justify-between ${className}`}>{children}</div>;
};

//cardcol component

export const CardCol: React.FC<{ children: React.ReactNode; className?: string; span?: number }> = ({ children, className, span }) => {
  return <div className={`w-[100%/${span}] px-4 ${className}`}>{children}</div>;
};

//cardheadergroup component

export const CardHeaderGroup: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};

//cardfootergroup component

export const CardFooterGroup: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`flex items-center justify-end ${className}`}>{children}</div>;

};