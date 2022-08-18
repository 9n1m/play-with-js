type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
};
export default Layout;
