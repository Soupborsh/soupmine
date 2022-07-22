import cheatImg from "../images/cheat-img.jpg"
function Support() {
    return (
        <div className="support">
            <div className="support-title">
                <h2>Контакты</h2>
                <hr />
                <p>
                    Если возникли какието сложности или вопросы пишите нам в сообщество в <a href="https://vk.com/public207609128">Вконтакте</a>
                </p>
                <img className="support-img" src={cheatImg} alt="" />
                <p>
                    Если вы обнаружили как кто-то нарушает правила сервера также сообщите нам в <a href="https://vk.com/public207609128">Вконтакте</a>
                </p>
            </div>
        </div>
    );
}

export default Support;