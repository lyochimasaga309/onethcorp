import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-4 mt-10">
      <p>© {new Date().getFullYear()} OnethCorp. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
