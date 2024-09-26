import '../../styles/sections/opk-footer.scss';

const shopBtn = document.querySelector('shop-login-button');

if (shopBtn.shadowRoot) {
    const shopFollowBtn = shopBtn.shadowRoot.querySelector('shop-follow-button');
    const followOnShopBtn = shopFollowBtn.shadowRoot.querySelector('follow-on-shop-button');
    // const sBtn = followOnShopBtn.shadowRoot.querySelector('button');

    const styleElement = followOnShopBtn.shadowRoot.querySelector('style');
    styleElement.innerHTML += `
        .follow-icon-wrapper:before { 
            border-color: #5433EB; 
        }
    `;
}
