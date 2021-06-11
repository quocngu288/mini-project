import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="wrap__foot">
                <div className="top">
                    <i class="fab fa-cc-paypal"></i>
                    <i class="fab fa-cc-paypal"></i>
                    <i class="fab fa-cc-paypal"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <i class="fab fa-cc-mastercard"></i>
                </div>
                <ul className="midle">
                    <li><a>ABOUT</a></li>
                    <li><a>OUT STORES</a></li>
                    <li><a>BLOG</a></li>
                    <li><a>CONTACT</a></li>
                    <li><a>FAQ</a></li>
                </ul>
                <div className="bottom">
                    <p>Copy Right 2021 <span className="copy">C</span> <span className="theme">UX Themes</span></p>
                </div>
            </div>

        </footer>
    )
}
