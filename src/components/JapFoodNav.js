import './style.css';

const JapFoodNav = (props) => {
  return (
      <nav>
        <ul id="menu">
          <li><a href="#">{props.home}</a></li>
          <li><a href="#">{props.about}</a></li>
          <li><a href="#">Our Menu</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
  );
}

export default JapFoodNav;