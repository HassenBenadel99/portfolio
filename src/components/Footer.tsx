const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 text-center z-30">
      <p className="text-sm text-muted-foreground">
        © Copyright {currentYear} | Your Name, All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
