import Header from './components/Header';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="wrapper">
      <div className="wrapper__cont">
        <Header />
        {children}
      </div>
    </div>
  );
};
export default Layout;
