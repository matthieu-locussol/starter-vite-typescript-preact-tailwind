type WelcomeProps = {
   title: string;
   subtitle: string;
};

export const Welcome = ({ title, subtitle }: WelcomeProps) => {
   return (
      <>
         <h1 className="text-4xl mb-2">{title}</h1>
         <p className="text-xl italic">{subtitle}</p>
      </>
   );
};
