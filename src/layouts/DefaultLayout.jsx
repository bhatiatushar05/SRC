import { Outlet } from 'react-router-dom';
import PrimaryAppBar from '../components/PrimaryAppBar';
import MasterFooter from '../components/MasterFooter';
import MasterFooterTwo from '../components/MasterFooterTwo';
import Cookie from '../components/Cookie';

const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PrimaryAppBar />
      <main className="flex-1">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
      <div className="border-t border-gray-200" />
      <MasterFooterTwo />
      <MasterFooter />
      <Cookie />
    </div>
  );
};

export default DefaultLayout;

