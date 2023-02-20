import { Userconsumer } from "../MyContext";
type HeaderProps = {
  title: string;
};
const Header = ({ title }: HeaderProps) => {
  const context = Userconsumer();
  console.log(context?.user.firstname);

  return (
    <header className="header">
      <h2>
        {context?.myUser}, {title}
      </h2>
    </header>
  );
};

Header.defaultProps = { title: "Task Tracker" };

export default Header;