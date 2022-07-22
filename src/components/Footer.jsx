import "../style.css";
import DiscordIcon from "../images/discord.svg"
import YouTubeIcon from "../images/youtube.svg"
import VkIcon from "../images/vk.svg"
function Footer() {
    return (
        <div className="foot">
            <div className="contacts">
                <a rel="noopener" href="https://vk.com/public207609128"><img className="cont-icons" src={VkIcon} alt="" />VK</a>
                <a rel="noopener" href="https://www.youtube.com/channel/UCS8QyMCuFk0VBwfNZ6n86YA/featured"><img className="cont-icons" src={YouTubeIcon} alt="" />YouTube</a>
                <a rel="noopener" href="https://discord.gg/pVxvn77CTm"><img className="cont-icons" src={DiscordIcon} alt="" />Discord</a>
            </div>
            <div className="under">
                <hr />
                <p><span>SoupMine</span> © 2021. Все права защищены.</p>
            </div>
        </div>
    );
};

export default Footer;