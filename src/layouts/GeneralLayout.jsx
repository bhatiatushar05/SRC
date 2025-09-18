import { Outlet } from 'react-router-dom';

const GeneralLayout = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GeneralLayout;

