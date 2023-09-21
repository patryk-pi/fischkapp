import React from "react";

type AppHeaderProps = {
    cardsAmount: number;
};

export const AppHeader = ({ cardsAmount = 0 }: AppHeaderProps) => {
    console.log(cardsAmount);

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__summary">
                    <svg
                        width="34"
                        height="31"
                        viewBox="0 0 34 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header__logo"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.7453 5.59337C13.3641 4.10977 15.5242 1.97352 21.0408 1C19.6056 2.91361 19.1717 4.20737 19.1617 5.00958C21.6341 5.08642 23.7726 5.62208 25.5756 6.48847C31.2487 9.21448 33.601 15.2147 32.5858 20.5C32.5708 18 31.1408 13.1 25.5408 13.5C25.0144 13.5376 24.4796 13.6148 23.9367 13.7239C22.5312 14.0063 21.0717 14.5028 19.5655 15.0804C18.8418 15.358 18.1074 15.6543 17.363 15.9546L17.3627 15.9547L17.3627 15.9547C16.6019 16.2616 15.8308 16.5727 15.0502 16.8722C10.6323 18.5676 5.90969 19.8935 1.04077 18C0.618064 14.6183 3.41173 7.66279 12.7453 5.59337ZM32.5858 20.5C30.8526 23.1234 28.7204 24.313 26.658 24.6957C26.3646 24.7502 26.0726 24.7883 25.7834 24.8119C24.8376 24.889 23.9214 24.8108 23.082 24.6404C22.5447 24.5314 22.0389 24.3846 21.5769 24.2166C20.984 24.001 20.4633 23.7505 20.0408 23.5C19.5408 24.8333 19.3408 28 22.5408 30C28.3779 29.0271 31.7164 25.0257 32.5858 20.5Z"
                            fill="#161616"
                        />
                        <path
                            d="M21.0408 1L21.4408 1.3L22.2 0.287706L20.9539 0.507608L21.0408 1ZM12.7453 5.59337L12.8535 6.08152L13.1069 6.02535L13.2068 5.78586L12.7453 5.59337ZM19.1617 5.00958L18.6617 5.00335L18.6556 5.49409L19.1461 5.50934L19.1617 5.00958ZM25.5756 6.48847L25.3591 6.93914V6.93914L25.5756 6.48847ZM25.5408 13.5L25.5051 13.0013L25.5408 13.5ZM23.9367 13.7239L23.8382 13.2337L23.9367 13.7239ZM19.5655 15.0804L19.7446 15.5473L19.5655 15.0804ZM17.363 15.9546L17.5487 16.4188L17.55 16.4183L17.363 15.9546ZM17.3627 15.9547L17.177 15.4903L17.1658 15.4951L17.3627 15.9547ZM17.3627 15.9547L17.5498 16.4185L17.5597 16.4143L17.3627 15.9547ZM15.0502 16.8722L14.871 16.4054L15.0502 16.8722ZM1.04077 18L0.544632 18.062L0.581619 18.3579L0.859548 18.466L1.04077 18ZM26.658 24.6957L26.5668 24.2041H26.5668L26.658 24.6957ZM25.7834 24.8119L25.7427 24.3135H25.7427L25.7834 24.8119ZM23.082 24.6404L22.9825 25.1305L23.082 24.6404ZM21.5769 24.2166L21.7477 23.7467L21.5769 24.2166ZM20.0408 23.5L20.2958 23.0699L19.7822 22.7654L19.5726 23.3244L20.0408 23.5ZM22.5408 30L22.2758 30.424L22.4363 30.5243L22.623 30.4932L22.5408 30ZM20.9539 0.507608C15.3539 1.49584 12.9956 3.69457 12.2838 5.40089L13.2068 5.78586C13.7327 4.52497 15.6945 2.45119 21.1277 1.49239L20.9539 0.507608ZM19.6616 5.01581C19.6697 4.37053 20.0297 3.1814 21.4408 1.3L20.6408 0.7C19.1814 2.64582 18.6737 4.0442 18.6617 5.00335L19.6616 5.01581ZM19.1461 5.50934C21.5545 5.58419 23.6238 6.10531 25.3591 6.93914L25.7922 6.0378C23.9214 5.13884 21.7136 4.58865 19.1772 4.50982L19.1461 5.50934ZM25.3591 6.93914C30.806 9.55649 33.0719 15.3189 32.0947 20.4057L33.0768 20.5943C34.1302 15.1105 31.6914 8.87246 25.7922 6.0378L25.3591 6.93914ZM33.0858 20.497C33.0778 19.1748 32.6997 17.2158 31.5649 15.6224C30.4075 13.9973 28.4843 12.7885 25.5051 13.0013L25.5764 13.9987C28.1972 13.8115 29.789 14.8527 30.7504 16.2026C31.7344 17.5842 32.0787 19.3252 32.0858 20.503L33.0858 20.497ZM25.5051 13.0013C24.9545 13.0406 24.3985 13.1211 23.8382 13.2337L24.0352 14.2141C24.5608 14.1085 25.0744 14.0346 25.5764 13.9987L25.5051 13.0013ZM23.8382 13.2337C22.3911 13.5245 20.9005 14.0329 19.3865 14.6136L19.7446 15.5473C21.2429 14.9726 22.6713 14.4882 24.0352 14.2141L23.8382 13.2337ZM19.3865 14.6136C18.6581 14.8929 17.9196 15.1909 17.1759 15.4909L17.55 16.4183C18.2952 16.1177 19.0256 15.823 19.7446 15.5473L19.3865 14.6136ZM17.1773 15.4903L17.177 15.4904L17.5484 16.4189L17.5487 16.4188L17.1773 15.4903ZM17.1658 15.4951L17.1657 15.4951L17.5597 16.4143L17.5597 16.4142L17.1658 15.4951ZM17.1756 15.491C16.4143 15.7982 15.6471 16.1077 14.871 16.4054L15.2293 17.3391C16.0146 17.0377 16.7896 16.725 17.5498 16.4184L17.1756 15.491ZM14.871 16.4054C10.4659 18.0958 5.90219 19.3541 1.22199 17.534L0.859548 18.466C5.91719 20.4329 10.7986 19.0393 15.2293 17.3391L14.871 16.4054ZM1.53691 17.938C1.14935 14.8374 3.74627 8.10075 12.8535 6.08152L12.6371 5.10523C3.07719 7.22482 0.0867783 14.3991 0.544632 18.062L1.53691 17.938ZM32.1686 20.2244C30.5087 22.7368 28.493 23.8467 26.5668 24.2041L26.7492 25.1873C28.9478 24.7793 31.1965 23.51 33.0029 20.7756L32.1686 20.2244ZM26.5668 24.2041C26.2907 24.2553 26.0156 24.2913 25.7427 24.3135L25.824 25.3102C26.1296 25.2853 26.4385 25.245 26.7492 25.1873L26.5668 24.2041ZM25.7427 24.3135C24.85 24.3863 23.9813 24.3128 23.1814 24.1504L22.9825 25.1305C23.8616 25.3089 24.8253 25.3917 25.824 25.3102L25.7427 24.3135ZM23.1814 24.1504C22.6697 24.0466 22.1878 23.9067 21.7477 23.7467L21.406 24.6865C21.89 24.8625 22.4197 25.0162 22.9825 25.1305L23.1814 24.1504ZM21.7477 23.7467C21.1826 23.5412 20.6902 23.3037 20.2958 23.0699L19.7858 23.9301C20.2364 24.1973 20.7855 24.4609 21.406 24.6865L21.7477 23.7467ZM19.5726 23.3244C19.0188 24.8013 18.81 28.2579 22.2758 30.424L22.8058 29.576C19.8715 27.7421 20.0627 24.8654 20.5089 23.6756L19.5726 23.3244ZM22.623 30.4932C28.6796 29.4838 32.1706 25.3119 33.0768 20.5943L32.0947 20.4057C31.2622 24.7395 28.0762 28.5705 22.4586 29.5068L22.623 30.4932Z"
                            fill="black"
                        />
                    </svg>
                    <div className="header__counter">
                        <h1>Cards: {cardsAmount}</h1>
                    </div>
                </div>
                <button className="header__button">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="40" height="40" rx="20" fill="#161616" />
                        <path
                            d="M25 20H15"
                            stroke="white"
                            strokeLinecap="round"
                        />
                        <path
                            d="M20 25V15"
                            stroke="white"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};
