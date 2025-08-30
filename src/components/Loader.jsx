const Loader = () => {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50">
      <div className="w-48 h-48 rounded-full border-8 border-gray-400 border-t-red-500 animate-spin shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] flex items-center justify-center bg-black">
        {/* Optional inner content */}
      </div>
    </div>
  );
};

export default Loader;
