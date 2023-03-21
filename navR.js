const navigation = document.querySelector('nav');

navigation.innerHTML += `
<a href="main.html"><h1 class="nav__title__wild_face">Wild Face</h1></a>

<ul class="logo-svg">
    <li>
    <a class="ul__li_a_file_switch" href="search.html"> 
        <svg width="30" height="27" viewBox="5 -6 25 30" fill="none">
            <path d="M16.5269 15.9417C18.1485 15.9417 19.6802 15.4735 20.8992 14.6217L26.8245 19.4605C26.9342 19.5503 27.0788 19.5952 27.2228 19.5952C27.3662 19.5952 27.5102 19.5507 27.6199 19.4614C27.8399 19.2827 27.8404 18.9927 27.621 18.8135L21.6906 13.9711C23.9108 11.8113 23.7814 8.57706 21.294 6.54644C20.0205 5.50639 18.3274 4.93367 16.5263 4.93367C14.7252 4.93367 13.032 5.50639 11.7585 6.54644C9.1311 8.69206 9.1311 12.1838 11.7585 14.3294C13.0326 15.369 14.7257 15.9417 16.5269 15.9417ZM12.5556 7.19338C13.6165 6.32698 15.0267 5.85002 16.5269 5.85002C18.027 5.85002 19.4372 6.32698 20.4981 7.19338C22.689 8.98254 22.689 11.8933 20.4981 13.6825C19.4372 14.5489 18.027 15.0258 16.5269 15.0258C15.0267 15.0258 13.6165 14.5489 12.5556 13.6825C10.3652 11.8933 10.3652 8.98254 12.5556 7.19338Z" fill="#231F20" stroke="#393C38" stroke-width="1.92"/>
        </svg>
        </a>
    </li>
    
    <li>
    <a class="ul__li_a_file_switch" href="Profil.html"> 
        <svg width="30" height="27" viewBox="0 -3 28 24" fill="none">
            <path d="M14.2574 12.6891C13.4245 12.6891 12.6103 12.4792 11.9177 12.0858C11.2251 11.6926 10.6853 11.1335 10.3666 10.4794C10.0479 9.82535 9.96444 9.10564 10.1269 8.41129C10.2894 7.71694 10.6905 7.07914 11.2795 6.57854C11.8685 6.07794 12.6189 5.73703 13.4358 5.59892C14.2527 5.4608 15.0995 5.53168 15.8691 5.80261C16.6386 6.07353 17.2964 6.53232 17.7591 7.12096C18.2219 7.70961 18.4689 8.40166 18.4689 9.10961C18.4689 10.0589 18.0252 10.9694 17.2354 11.6407C16.4456 12.3119 15.3744 12.6891 14.2574 12.6891ZM14.2574 6.96193C13.7577 6.96193 13.2692 7.08789 12.8536 7.32387C12.4381 7.55987 12.1142 7.89529 11.9229 8.28772C11.7317 8.68017 11.6816 9.112 11.7791 9.5286C11.8766 9.94521 12.1173 10.3279 12.4707 10.6283C12.8241 10.9286 13.2743 11.1332 13.7644 11.2161C14.2546 11.2989 14.7627 11.2563 15.2244 11.0938C15.6862 10.9312 16.0808 10.6559 16.3584 10.3028C16.6361 9.94961 16.7843 9.53438 16.7843 9.10961C16.7843 8.54001 16.518 7.99374 16.0442 7.59097C15.5703 7.1882 14.9276 6.96193 14.2574 6.96193Z" fill="black"/>
            <path d="M22.1188 19.3708C21.8963 19.3683 21.6837 19.2921 21.5264 19.1584C21.369 19.0247 21.2794 18.844 21.2765 18.6549C21.2765 16.7935 20.0861 15.5527 14.2574 15.5527C8.42883 15.5527 7.2384 16.7935 7.2384 18.6549C7.2384 18.8447 7.14966 19.0268 6.9917 19.1611C6.83375 19.2954 6.6195 19.3708 6.39612 19.3708C6.17273 19.3708 5.95849 19.2954 5.80053 19.1611C5.64258 19.0268 5.55383 18.8447 5.55383 18.6549C5.55383 14.1209 11.652 14.1209 14.2574 14.1209C16.8629 14.1209 22.9611 14.1209 22.9611 18.6549C22.9581 18.844 22.8685 19.0247 22.7112 19.1584C22.5538 19.2921 22.3413 19.3683 22.1188 19.3708Z" fill="black"/>
            <path d="M14.2574 12.6891C13.4245 12.6891 12.6103 12.4792 11.9177 12.0858C11.2251 11.6926 10.6853 11.1335 10.3666 10.4794C10.0479 9.82535 9.96444 9.10564 10.1269 8.41129C10.2894 7.71694 10.6905 7.07914 11.2795 6.57854C11.8685 6.07794 12.6189 5.73703 13.4358 5.59892C14.2527 5.4608 15.0995 5.53168 15.8691 5.80261C16.6386 6.07353 17.2964 6.53232 17.7591 7.12096C18.2219 7.70961 18.4689 8.40166 18.4689 9.10961C18.4689 10.0589 18.0252 10.9694 17.2354 11.6407C16.4456 12.3119 15.3744 12.6891 14.2574 12.6891ZM14.2574 6.96193C13.7577 6.96193 13.2692 7.08789 12.8536 7.32387C12.4381 7.55987 12.1142 7.89529 11.9229 8.28772C11.7317 8.68017 11.6816 9.112 11.7791 9.5286C11.8766 9.94521 12.1173 10.3279 12.4707 10.6283C12.8241 10.9286 13.2743 11.1332 13.7644 11.2161C14.2546 11.2989 14.7627 11.2563 15.2244 11.0938C15.6862 10.9312 16.0808 10.6559 16.3584 10.3028C16.6361 9.94961 16.7843 9.53438 16.7843 9.10961C16.7843 8.54001 16.518 7.99374 16.0442 7.59097C15.5703 7.1882 14.9276 6.96193 14.2574 6.96193Z" fill="black"/>
            <path d="M22.1188 19.3708C21.8963 19.3683 21.6837 19.2921 21.5264 19.1584C21.369 19.0247 21.2794 18.844 21.2765 18.6549C21.2765 16.7935 20.0861 15.5527 14.2574 15.5527C8.42883 15.5527 7.2384 16.7935 7.2384 18.6549C7.2384 18.8447 7.14966 19.0268 6.9917 19.1611C6.83375 19.2954 6.6195 19.3708 6.39612 19.3708C6.17273 19.3708 5.95849 19.2954 5.80053 19.1611C5.64258 19.0268 5.55383 18.8447 5.55383 18.6549C5.55383 14.1209 11.652 14.1209 14.2574 14.1209C16.8629 14.1209 22.9611 14.1209 22.9611 18.6549C22.9581 18.844 22.8685 19.0247 22.7112 19.1584C22.5538 19.2921 22.3413 19.3683 22.1188 19.3708Z" fill="#393C38"/>
            <path d="M14.2574 12.6891C13.4245 12.6891 12.6103 12.4792 11.9177 12.0858C11.2251 11.6926 10.6853 11.1335 10.3666 10.4794C10.0479 9.82535 9.96444 9.10564 10.1269 8.41129C10.2894 7.71694 10.6905 7.07914 11.2795 6.57854C11.8685 6.07794 12.6189 5.73703 13.4358 5.59892C14.2527 5.4608 15.0995 5.53168 15.8691 5.80261C16.6386 6.07353 17.2964 6.53232 17.7591 7.12096C18.2219 7.70961 18.4689 8.40166 18.4689 9.10961C18.4689 10.0589 18.0252 10.9694 17.2354 11.6407C16.4456 12.3119 15.3744 12.6891 14.2574 12.6891ZM14.2574 6.96193C13.7577 6.96193 13.2692 7.08789 12.8536 7.32387C12.4381 7.55987 12.1142 7.89529 11.9229 8.28772C11.7317 8.68017 11.6816 9.112 11.7791 9.5286C11.8766 9.94521 12.1173 10.3279 12.4707 10.6283C12.8241 10.9286 13.2743 11.1332 13.7644 11.2161C14.2546 11.2989 14.7627 11.2563 15.2244 11.0938C15.6862 10.9312 16.0808 10.6559 16.3584 10.3028C16.6361 9.94961 16.7843 9.53438 16.7843 9.10961C16.7843 8.54001 16.518 7.99374 16.0442 7.59097C15.5703 7.1882 14.9276 6.96193 14.2574 6.96193Z" fill="#393C38"/>
            <path d="M22.1188 19.3708C21.8963 19.3683 21.6837 19.2921 21.5264 19.1584C21.369 19.0247 21.2794 18.844 21.2765 18.6549C21.2765 16.7935 20.0861 15.5527 14.2574 15.5527C8.42883 15.5527 7.2384 16.7935 7.2384 18.6549C7.2384 18.8447 7.14966 19.0268 6.9917 19.1611C6.83375 19.2954 6.6195 19.3708 6.39612 19.3708C6.17273 19.3708 5.95849 19.2954 5.80053 19.1611C5.64258 19.0268 5.55383 18.8447 5.55383 18.6549C5.55383 14.1209 11.652 14.1209 14.2574 14.1209C16.8629 14.1209 22.9611 14.1209 22.9611 18.6549C22.9581 18.844 22.8685 19.0247 22.7112 19.1584C22.5538 19.2921 22.3413 19.3683 22.1188 19.3708Z" fill="#393C38"/>
            </svg>
            </a>

        </li>
    </ul>

                        `;