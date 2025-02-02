import React, { useEffect } from 'react'

const Policy = () => {
    useEffect(() => {
        document.title = "Публичная оферта"
    }, [])
    return (
        <main className='pt-4 pt-lg-5'>
            <section id="sec-8" className="mb-8">
                <div className="container">
                    <h1 className='inner'>Публичная оферта о продаже товаров дистанционным способом</h1>
                    <p>(действует с 01 января 2018 года)</p>
                    <br />
                    {/* <h5>1. Термины и определения</h5>
                    <p>1.1. В настоящей оферте, нижеприведенные термины с заглавной буквы имеют следующие значения.
                        [Для целей настоящей оферты термины и определения в единственном числе относятся также и к терминам и определениям во множественном числе.]
                        «Компания» — юридическое лицо, ИП Вард Амалия Анатольевна  (ИНН  165123295890; ОГРН 318169000012522), созданное в соответствии с законодательством Российской Федерации и осуществляющее предпринимательскую деятельность по продаже Товаров, в том числе дистанционным способом.
                        «Продавец» — юридическое лицо, действующее от лица Компании, осуществляющее продажу Товаров, в том числе дистанционным способом через официальный Сайт, разместившее публичную оферту и осуществляющее обработку персональных данных Покупателей, прошедших регистрацию на Сайте, в целях реализации условий настоящей оферты.
                        «Покупатель» — любое дееспособное лицо как являющееся резидентом РФ, так и не являющееся таковым, намеренное приобрести Товары исключительно для личных нужд, не связанных с осуществлением предпринимательской деятельности, принявшее (акцептировавшее) настоящую оферту на нижеуказанных условиях и предоставившее Продавцу свои персональные данные посредством регистрации на Сайте и/или с помощью Оператора по телефону.
                        «Товары» — объект купли-продажи, не изъятый и не ограниченный в гражданском обороте, и предложенный к продаже посредством размещения на официальном Сайте.
                        «Заказ» — оформленный Покупателем запрос на покупку выбранных Покупателем Товаров и предоставленный Продавцу посредством сети Интернет (электронная форма, размещенная на Сайте) и/или оформленный Покупателем по телефону.
                        «Сайт, Веб – сайт» — веб-страница, содержащая контент (информацию) Продавца по оказанию услуг по договору купли-продажи Товаров дистанционным способом, имеющая уникальный адрес refettorio.cafe , в том числе Мобильная версия, а также работающая по протоколу HTTPS для защиты персональных данных Покупателей.
                        «Курьерская служба» — лица, оказывающие услуги по доставке заказанных Покупателем Товаров от имени Продавца, или сотрудники Продавца.</p>
                    <br />
                    <h5>2. Общие положения</h5>
                    <p>2.1. Продавец и Покупатель гарантируют, что обладают необходимой право- и дееспособностью, а также всеми правами, необходимыми для заключения и исполнения договора розничной купли-продажи дистанционным способом.</p>
                    <p>2.2. Продавец оставляет за собой право вносить изменения в настоящую оферту, в связи с чем Покупатель обязуется самостоятельно отслеживать наличие изменений в настоящей оферте.</p>
                    <p>2.3. При оформлении заказа Товаров Покупатель тем самым подтверждает, что он ознакомился с условиями настоящей оферты.</p>
                    <p>2.4. Договор розничной купли-продажи дистанционным способом считается заключенным с момента получения Продавцом сообщения о намерении Покупателя приобрести Товары.</p>
                    <br />
                    <h5>3. Предмет Договора</h5>
                    <p>3.1. Продавец продает Товары по ценам, представленным на Сайте Продавца, и доставляет Товар Курьерской службой, а Покупатель производит оплату и принимает Товары в соответствии с условиями настоящей оферты.</p>
                    <p>3.2. Право собственности на Товары переходит к Покупателю в момент приемки Товаров Покупателем.</p>
                    <br />
                    <h5>4. Уведомления Покупателя</h5>
                    <p>4.1. Продавец вправе отправлять сервисные сообщения Покупателю о совершенном им заказе на приобретения Товаров Продавца, которые направлены на контроль качества оказания услуг Продавцом и информирование Покупателя о надлежащем исполнении Продавцом своих обязательств по договору купли-продажи дистанционным способом</p>
                    <p>4.2. Продавец вправе осуществлять рассылку уведомлений о проводимых акциях и рекламных мероприятий.</p>
                    <br />
                    <h5>5. Оформление заказа Товаров</h5>
                    <p>5.1. Заказ Покупателя может быть оформлен по Телефону и/или посредством заполнения электронной формы заказа на официальном Веб-сайте (в том числе  мобильной версии).</p>
                    <p>5.2. Покупатель обязуется предоставить достоверные данные, необходимые и достаточные для исполнения договора розничной купли-продажи Товаров дистанционным способом.</p>
                    <p>5.3. В случае возникновения у Покупателя вопросов, касающихся Товаров, перед оформлением заказа, Покупатель должен обратиться к Продавцу по Телефону для получения необходимой информации, в соответствии с режимом работы, указанным на Веб-сайте.</p>
                    <p>5.4. Покупатель может заказать только те Товары, которые есть в наличии у Продавца в момент оформления заказа Товаров у Продавца.</p>
                    <p>5.5. При оформлении заказа посредством заполнения электронной формы заказа на Сайте Покупатель создает учетную запись в соответствии с Пользовательским соглашением, указанным на Веб-сайте.</p>
                    <p>5.6. Покупатель имеет право удалить ингредиенты из состава Товара, при наличии технической возможности, при этом цена на Товар не меняется.</p>
                    <p>5.7. Покупатель не имеет право изменить состав заказа после его оформления на Веб-сайте.</p>
                    <p>5.8. При оформлении заказа по Телефону Продавец вправе осуществлять аудиозапись телефонного разговора с Пользователем, если указанные действия необходимы Продавцу для исполнения обязанностей, предусмотренных настоящей офертой, и оценки качества оказанных услуг, без получения от Пользователя согласия на совершение указанных действий.</p>
                    <p>5.9. Если у Продавца отсутствует необходимое количество или ассортимент заказанных Покупателем Товаров, Продавец информирует об этом Покупателя по телефону. Покупатель вправе согласиться принять Товары в ином количестве или ассортименте, либо аннулировать свой заказ Товаров. В случае неполучения ответа от Покупателя Продавец вправе аннулировать Заказ Покупателя в полном объеме.</p>
                    <p>5.10. Продавец вправе временно приостановить прием заказов Товаров в случае технических неполадок, не позволяющих принять заказа Товаров, или отсутствия ингредиентов, необходимых для изготовления Товаров.</p>
                    <br />
                    <h5>6. Доставка Товаров</h5>
                    <p>6.1. Доставка Товаров осуществляется Курьерской службой по фактическому адресу, указанному Покупателем, при оформлении заказа.</p>
                    <p>6.2. Доставка Товаров осуществляется в пределах зоны доставки, в соответствии с режимом работы Продавца, указанным на Веб-сайте.</p>
                    <p>6.3. Доставка Товаров по адресам, не входящим в зону доставки, не осуществляется.</p>
                    <p>6.4. Доставка осуществляется при условии заказа Товаров на сумму минимального заказа. Сумма минимального заказа для каждой зоны доставки определяется Продавцом в одностороннем порядке и указывается на Сайте.</p>
                    <p>6.5. Продавец вправе отказаться от исполнения договора розничной купли-продажи, в  том числе и дистанционным способом, в одном из следующих случаев:</p>
                    <p>6.5.1. Отсутствие курьеров по непредвиденным обстоятельствам;</p>
                    <p>6.5.2. Сложная ситуация на дорогах (пробки, метеорологические условия и т.д.), в следствии чего курьеры не смогут выполнить обязательства по доставки Товаров в срок;</p>
                    <p>6.5.3. Большая дальность доставки (более 10 километров);</p>
                    <p>6.5.4. Если Курьерская служба по прибытии к фактическому адресу доставки Покупателя, не может осуществить фактическую передачу доставленных Товаров по вине Покупателя (Покупатель в течение 10 минут не отвечает на телефонный вызов или не открывает дверь Курьерской службе).</p>
                    <br />
                    <h5>7. Оплата Товаров</h5>
                    <p>Цены на Товары определяются Продавцом в одностороннем порядке и указываются на официальном Веб-сайте.</p>
                    <p>7.2. Оплата Товаров Покупателем производится в рублях Российской Федерации одним из следующих способов:</p>
                    <p>7. 2.1. Оплата осуществляется по факту получения Товаров наличными денежными средствами;</p>
                    <p>7.2.2. Безналичным расчетом посредством банковской карты на официальном Веб-сайте;*</p>
                    <p>* В соответствии с положением ЦБ РФ «Об эмиссии банковских карт и об операциях, совершаемых с использованием платежных карт» № 266-П от 24.12.2004 года операции по банковским картам совершаются держателем карты либо уполномоченным им лицом;</p>
                    <p>7.2.3. Безналичным расчетом банковской картой по факту получения Товаров от Продавца.**</p>
                    <p>** При условии оснащения Курьерской службы мобильными POS-терминалами (о наличии возможности произвести оплату Товаров данным способом следует заранее уточнять у Продавца).</p>
                    <p>7.3. Выдача Покупателю кассового чека осуществляется:</p>
                    <p>7.3.1. На бумажном носителе, в случае совершения заказа Товаров через Телефон и оплаты осуществляется по факту получения Товаров наличными денежными средствами, или безналичными расчетами банковской картой по факту получения Товаров;</p>
                    <p>7.3.2. В электронном виде на электронную почту Покупателя, в случае совершения заказа Товаров через Сайт безналичными расчетами банковской картой на Сайте.</p>
                    <p>7.4. Покупатель вправе в любое время обратиться к Продавцу с просьбой об отмене транзакции при оплате заказа путем безналичного расчета банковской картой. Решение о возврате денежных средств принимается Продавцом с учетом всех сложившихся обстоятельств, в том числе и требований законодательства РФ.</p>
                    <br />
                    <h5>8. Возврат и обмен Товаров</h5>
                    <p>8.1. Возврат Товара надлежащего качества не допускается.</p>
                    <p>8.2. Продавец обязан передать Покупателю Товары, которые полностью соответствуют его заказу, качество которых соответствует информации, представленной Покупателю при заключении договора розничной купли-продажи дистанционным способом.</p>
                    <p>8.3. При получении Товаров Покупатель проверяет соответствие полученных Товаров своему Заказу, комплектность и отсутствие претензий к внешнему виду доставленных Товаров в течение 10 (Десяти) минут после получения Товаров.</p>
                    <p>8.4. В случае явных внешних повреждений Товара, несоответствии фактически поставленного Товара Заказу или сопроводительному документу, Покупатель вправе потребовать замены таких Товаров Товарами надлежащего качества сразу в момент получения, либо в течение 10 (Десяти) минут после получения Товаров.</p>
                    <p>8.5. В случае невыполнения порядка предъявления претензии Покупателя по внешнему виду Товаров и их комплектности, предусмотренных пунктом 8.3, пунктом 8.4 настоящей оферты, претензии не принимаются.</p>
                    <br />
                    <h5>9. Форс-мажор</h5>
                    <p>9.1. Любая из Сторон освобождается от ответственности за полное или частичное неисполнение своих обязательств по настоящей оферте, если это неисполнение было вызвано обстоятельствами непреодолимой силы. Обстоятельства непреодолимой силы означают чрезвычайные события и обстоятельства, которые Стороны не могли ни предвидеть, ни предотвратить разумными средствами. Такие чрезвычайные события или обстоятельства включают в себя, в частности: забастовки, наводнения, пожары, землетрясения и иные стихийные бедствия, войны, военные действия и так далее.</p>
                    <br />
                    <h5>10. Ответственность Сторон публичной оферты</h5>
                    <p>10.1. Продавец не несет ответственности за ущерб, причиненный Покупателю вследствие ненадлежащего использования им Товаров, приобретённых у Продавца.</p>
                    <p>10.2. Продавец не отвечает за убытки Покупателя, возникшие в результате неправильного заполнения Заказа, в том числе неправильного указания своих персональных данных и неправомерных действий третьих лиц.</p>
                    <p>10.3. В случае злоупотребления Покупателем правами потребителя, включая, но не ограничиваясь, если Покупатель отказался от приемки и/или оплаты заказанного и доставленного Товара, Продавец вправе реализовать свое право на самозащиту, а именно: не принимать от него будущие заказы.</p>
                    <p>10.4. В случае одностороннего отказа Продавца от исполнения договора розничной купли-продажи дистанционным способом в соответствии с пунктом 6.5. настоящей публичной оферты, Продавец вправе реализовать свое право на самозащиту, взыскать убытки с Покупателя. В случае, если Покупатель оплатил Товар до его доставки, оплаченная сумма не возвращается.</p>
                    <p>10.5. В случае нарушения Пользователем условий настоящей оферты Продавец вправе заблокировать доступ Покупателя к использованию личного кабинета на Сайте Продавца, путем блокировки логина (абонентского номера телефона) Покупателя.</p>
                    <br />
                    <h5>11. Прочие условия</h5>
                    <p>11.1. Настоящая оферта вступает в силу с момента совершения Покупателем действий, направленных на регистрацию учетной записи (личного кабинета) на Сайте.</p>
                    <p>11.2. Согласие Покупателя на обработку его персональных данных действует со дня его регистрации на Сайте с указанием при этом своего имени, фамилии, адреса доставки и контактного телефона.</p>
                    <p>11.3. Все споры, связанные с неисполнением или ненадлежащим исполнением своих обязательств по настоящему Договору, Стороны будут стараться решить путем переговоров.</p>
                    <p>11.4. В случае если в ходе переговоров Стороны не достигли согласия, споры будут разрешаться в судебном порядке, в соответствии с действующим законодательством РФ.</p> */}
                </div>
            </section>
        </main>
    );
};

export default Policy;
