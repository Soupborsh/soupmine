import NavList from "./NavList";

function Burger() {
  return (
    <div className="burger">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" htmlFor="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">
      <NavList />
    </ul>
  </div>
  )
}

export default Burger;