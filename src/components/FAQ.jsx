function FAQ() {
    return (
        <div className="faq">
            <div className="pop-questions">
                <h1 className="questions-title" >Ответы на часто задаваемые вопросы</h1>
                <div className="questons-list">
                    <details className="questions-item">
                        <summary className="question">Когда проходит вайп? Останеться ли привилегия?</summary>
                        <p className="answer">Вайп проходит каждый раз в месяц, вайп сделан для того чтоб игрокам которые очень сильно развились было интересно дальше играть и чтобы у новичков был шанс подняться в топ 1 и в конце получить привилегию</p>
                    </details>
                    <details className="questions-item">
                        <summary className="question">Стоит ли доверять системе покупке доната на сайте?</summary>
                        <p className="answer">Конечно, система очень защищена и некто вас не обманет, привилегия выдается в автоматическом режиме. В случая если вы передумаете средства не возрашаются</p>
                    </details>
                    <details className="questions-item">
                        <summary className="question">Можно ли получить привелегию бесплатно?</summary>
                        <p className="answer">Просто так так конечно нет, вы можете купить её только на нашем официальном сайте или выйграть у нас в конкурсе или ивенте</p>
                    </details>
                    <details className="questions-item">
                        <summary className="question">Можно ли стать Администратором?</summary>
                        <p className="answer">На данный момент мы не нуждаемся в боьшом количестве Администраторов и Модераторов</p>
                    </details>
                    <details className="questions-item">
                        <summary className="question">Как установить приват у себя дома?</summary>
                        <p className="answer">Это делается очень легко, для этого вам понадобиться 1 деревяный топор которым вы отмечаете 1 и 2 грани куба в котором находится ваш дом. Далее убедимся что вы не превысили лимит 40.000 блоков, и пишем команду /rg claim НазваниеРегиона</p>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default FAQ;