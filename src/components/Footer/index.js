import React from 'react';

// import coverImage from '../../assets/img/JULIA-030719-165119-8663.jpg';

function Footer() {
    return (
        <footer>
            <div className='flex-row'>
            <div class="linkedin">
                <a
                    href="https://www.linkedin.com/in/motionmusic/"
                    target="_blank"
                >
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
            <div class="github">
                <a
                    href="https://github.com/jaaybe"
                    target="_blank"
                >
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <div class="stackoverflow">
                <a
                    href="https://stackoverflow.com/"
                    target="_blank"
                >
                    <i class="fab fa-stack-overflow"></i>
                </a>
            </div>


            </div>
            


        </footer>
    );
}
export default Footer;