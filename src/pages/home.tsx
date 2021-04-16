import { Welcome } from '../components/Welcome';

export const HomePage = () => {
   return (
      <div className="flex flex-col justify-center items-center h-screen">
         <Welcome title="Hello world!" subtitle="Seems like it works." />
      </div>
   );
};
