import { useSelector, useDispatch } from 'react-redux';
import { X } from 'lucide-react';
import { selectMainDialog, toggleMainDialog } from '../store/slices/mainSlice';

const StartupDialog = () => {
  const dialog = useSelector(selectMainDialog);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleMainDialog());
  };

  if (!dialog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Dialog Content */}
        <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md mx-4">
          <img
            src="/static/seesummit.jpg"
            alt="SEE Summit"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StartupDialog;

