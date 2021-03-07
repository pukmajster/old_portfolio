

function Contact() {
    return html`
        <section>
            <h1 class="heading">${localize.NAV_CONTACT}</h1>

            <p>${localize['CONTACT_P']}</p>

            
            <form autocomplete="false"  action="https://formspree.io/f/xdowlobv" method="POST" >

                <div id="contactForm" >

                    ${TextField({ label: 'Email', name: '_replyto', type: 'email' })}
                    ${TextField({ label: 'Subject', name: 'subject'})}
                    ${TextArea({ label: 'Message', name: 'message' })}
                    
                </div>

                <div style="margin-top: 9px" >
                    ${Button({ label: 'Send',  value: "Send" })}
                </div>

            </form>
        </section>
    `
}

const Button = ({label, value}) => html`
    <button value="${value}" >${label}</button>
`

const Label = ({label, name, type = "text"}) => html`
    <div class="textFieldLabel" >
        <input required name="${name}" type="${type}" />
    </div>
`


const TextField = ({label, name, type = "text"}) => html`
    
    <div class="textField" >
        <label for="input-text-${name}" class="textField" >${label}</label>
        <input id="input-text-${name}" required name="${name}" type="${type}" />
    </div>
`

const TextArea = ({label, name, placeholder}) => html`
    <div class="textField" >
        <label for="input-text-${name}" class="textField" >${label}</label>
        <textarea id="input-text-${name}" required name="${name}" rows="6" ></textarea>
    </div>
`